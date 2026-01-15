
// Formata valores numéricos para
// 12.5  -> "R$ 12,50"
// -12.5 -> "R$ -12,50"

export const moedaFormatada = (valor: number) => {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

