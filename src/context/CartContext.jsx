import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const STORAGE_KEY = 'lovera-cart-v1'
const MAX_QTY = 99 // tope razonable para evitar errores de tipeo / abuso

const CartContext = createContext(null)

function readInitialCart() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    // Saneamos lo que venga de localStorage: nunca confiamos en datos
    // guardados por el propio navegador sin validarlos de nuevo.
    return parsed
      .filter(
        (item) =>
          item &&
          typeof item.id === 'string' &&
          typeof item.name === 'string' &&
          typeof item.price === 'number' &&
          Number.isFinite(item.price) &&
          item.price >= 0 &&
          typeof item.quantity === 'number'
      )
      .map((item) => ({
        ...item,
        quantity: clampQty(item.quantity),
      }))
  } catch {
    return []
  }
}

function clampQty(qty) {
  const n = Math.floor(Number(qty))
  if (!Number.isFinite(n) || n < 1) return 1
  if (n > MAX_QTY) return MAX_QTY
  return n
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, quantity = 1 } = action
      const existing = state.find((item) => item.id === product.id)
      if (existing) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: clampQty(item.quantity + quantity) }
            : item
        )
      }
      return [
        ...state,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: clampQty(quantity),
        },
      ]
    }
    case 'REMOVE':
      return state.filter((item) => item.id !== action.id)
    case 'SET_QTY':
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: clampQty(action.quantity) } : item
      )
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, undefined, readInitialCart)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // Si localStorage falla (modo privado, cuota llena, etc.) el carrito
      // sigue funcionando en memoria durante la sesión.
    }
  }, [items])

  const api = useMemo(() => {
    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
    const totalPrice = items.reduce((sum, i) => sum + i.quantity * i.price, 0)
    return {
      items,
      totalItems,
      totalPrice,
      addItem: (product, quantity = 1) => dispatch({ type: 'ADD', product, quantity }),
      removeItem: (id) => dispatch({ type: 'REMOVE', id }),
      setQuantity: (id, quantity) => dispatch({ type: 'SET_QTY', id, quantity }),
      clear: () => dispatch({ type: 'CLEAR' }),
    }
  }, [items])

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}
