// src/components/utils/dataFormatada.ts

export function dataMenu() {
    const dataAtual = new Date();

    const formatador = new Intl.DateTimeFormat('pt-BR', {
        weekday: 'short', // ddd (Sáb)
        day: 'numeric',   // d (10)
        month: 'long',    // mmmm (janeiro)
        year: 'numeric',  // yyyy (2026)
    });

    // Formata e capitaliza a primeira letra (opcional)
    const dataFormatada = formatador.format(dataAtual);
    const dataFinal = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);

    return dataFinal.replace('.', '');
}