// Normaliza texto para buscar: sin tildes ni mayúsculas ("Coñac" ≈ "conac").
export function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}
