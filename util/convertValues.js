export function formatDate(value) {
  const date = new Date(value)
  return date.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
}

export function formatReal(value) {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
}

export function formatVote(value) {
  return value.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})
}