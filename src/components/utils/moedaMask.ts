"use client"

// Formata valores numéricos para
// 12.5  -> "R$ 12,50"
// -12.5 -> "R$ -12,50"

import React, { useState } from "react";
import { moedaFormatada } from "./moedaFormatada";


// Máscara para input que formata o valor para moeda ao digitar
export function MoedaMask (valorInicial: number = 0) {
    // Valor formatado com símbolo da moeda
    const [valorMoeda, setValorMoeda] = useState(moedaFormatada(valorInicial));
    // Valor numérico para o back-end
    const [valorNumerico, setValorNumerico] = useState(valorInicial);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Remove tudo que não for número
        const valorBruto = e.target.value.replace(/\D/g, "");
        // Converte para número e divide por 100 para ter as casas decimais
        const valorTratado = Number(valorBruto) / 100;

        // Atualiza os states
        setValorMoeda(moedaFormatada(valorTratado));
        setValorNumerico(valorTratado);
    };

    return {
        valorMoeda,
        valorNumerico,
        handleInputChange
    };
}