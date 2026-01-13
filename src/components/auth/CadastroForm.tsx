// src/components/auth/CadastroForm.tsx
"use client";

import { useActionState, useEffect, useState } from 'react';
import { Info, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { GrupoFamiliarRead } from '@/@types/grupos_familiares';
import { cadastrarUsuario } from '@/actions/auth';

export default function CadastroForm({ grupos }: { grupos: GrupoFamiliarRead[] }) {
    const [isLider, setIsLider] = useState(false)

    // O useActionState esta sendo usado para 3 coisas:
    // 1- Capturar e retornar o resultado da action cadastrarUsuario
    // 2- Informar se a action esta ou não em Loading
    // 3- Ao retornar o resultado, ela também retorna os dados preenchidos anteriormente para aplicar nos campos 
    const [state, formAction, isPending] = useActionState(cadastrarUsuario, {
        error: null,
        status: 0
    })

    // Usado para quando houver erro, o valor do checkbox retornado pelo payload ser atualizado
    // Pois o valor dele esta sendo controlado pelo useState(isLider)
    useEffect(() => {
        if (state?.payload?.lider_return !== undefined) {
            setIsLider(!!state.payload.lider_return);
        }
    }, [state])

    return (
        <form action={formAction} className="p-5 flex flex-col gap-4">
            {state?.error && (
                <p className="text-red-500 bg-red-50 p-2 border border-red-200 rounded">
                    {state.error}
                </p>
            )}
            { /* Nome Completo */}
            <div className='div-col-global'>
                <label>Nome Completo</label>
                <input
                    type='text'
                    placeholder='José da Silva'
                    className='input-global'
                    name='nome'
                    defaultValue={state?.payload?.nome_return || ""}
                    required
                />
            </div>

            { /* Grupo Familiar */}
            {!isLider && (
                <div className='div-col-global'>
                    <div className='div-row-global items-center'>
                        <label>Grupo Familiar</label>
                        <div 
                            title='Um Grupo Familiar serve para criar um grupo onde pessoas possuem acesso as mesmas receitas/despesas.'
                        >
                            <Info size={15} className='cursor-help' />
                        </div>
                    </div>
                    { /* O parametro key resolve o problema do select não receber o valor antigo após um erro */ }
                    <select
                        key={state?.payload?.grupo_return}
                        className='select-global'
                        name='grupo_familiar_id'
                        defaultValue={state?.payload?.grupo_return || ""}
                        required={!isLider}
                    >
                        <option value="" hidden>Escolha um Grupo Familiar</option>
                        {grupos.map(
                            function (grupo) {
                                return (
                                    <option key={grupo.id} value={grupo.id}>{grupo.titulo}</option>
                                )
                            }
                        )}
                    </select>
                </div>
            )}
            
            { /* Líder Familiar */}
            <div className='div-row-global items-center'>
                <input
                    type='checkbox'
                    className='checkbox-global'
                    name='lider_familiar'
                    defaultChecked={isLider}
                    onChange={(e) => setIsLider(e.target.checked)}
                />
                <label htmlFor='lider'>Sou um Líder Familiar</label>
            </div>

            {/* Email */}
            <div className='div-col-global'>
                <label>E-mail</label>
                <input
                    type='email'
                    placeholder='jose.silva@gmail.com'
                    className='input-global'
                    name='email'
                    defaultValue={state?.payload?.email_return || ""}
                    required
                />
            </div>

            {/* Senha */}
            <div className='div-row-global justify-between'>
                <div className='div-col-global w-[45%] justify-between'>
                    <label>Senha</label>
                    <input
                        type='text'
                        className='input-global'
                        name='senha'
                        required
                    />
                </div>
                <div className='div-col-global w-[45%] justify-between'>
                    <label>Confirmar Senha</label>
                    <input
                        type='text'
                        className='input-global'
                        name='confirmar_senha'
                        required
                    />
                </div>
            </div>
            
            {/* Botão Cadastrar/Link para Login */}
            <div className='div-col-global items-end'>
                <button
                    type='submit'
                    disabled={isPending}
                    className='btn-azul-global gap-2 disabled:opacity-50'
                >
                    {isPending && (<RefreshCw className="w-4 h-4 animate-spin" />)}
                    {isPending ? "Cadastrando" : "Cadastrar"}
                </button>
                <Link href='/entrar' className='text-blue-700 text-[14px] underline'>
                    Já possui cadastro? Entre.
                </Link>
            </div>
        </form>
  );
}
