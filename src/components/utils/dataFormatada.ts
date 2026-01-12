// src/components/utils/dataFormatada.ts

export function dataMenu() {
    const dataAtual = new Date();

    const formatador = new Intl.DateTimeFormat('pt-BR', {
        weekday: 'short', // ddd (Sáb)
        day: 'numeric',   // d (10)
        month: 'long',    // mmmm (janeiro)
        year: 'numeric',  // yyyy (2026)
    });

    // Formata a nova data com o formato pré-definido acima
    const dataFormatada = formatador.format(dataAtual);

    // Substitui o "." por "," e remove as preposições "de"
    const dataLimpa = dataFormatada.replace('.', '').replaceAll(" de ", " ");

    // Faz com que a primeira letra do dia da semana e do mês seja maiúscula
    const dataFinal = dataLimpa.split(" ").map(palavra => {
        if (isNaN(Number(palavra))) {
            return palavra.charAt(0).toUpperCase() + palavra.slice(1);
        }
        return palavra;
    }).join(" ");

    // Retorna a data final formatada
    return dataFinal;
}