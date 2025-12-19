"use client";

import React, { useState } from 'react';
import { Info } from 'lucide-react';
import Link from 'next/link';
import { cadastrarUsuario } from '@/actions/cadastrar';

export default function CadastroForm() {

  return (
    <form action={cadastrarUsuario} className="p-5 flex flex-col gap-4">
        
        { /* Nome Completo */}
        <div className='div-col-global'>
            <label>Nome Completo</label>
            <input
                type='text'
                placeholder='José da Silva'
                className='input-global'
                name='nome'
                id=''
                required
            />
        </div>

        { /* Grupo Familiar */}
        <div className='div-col-global'>
            <div className='div-row-global items-center'>
                <label>Grupo Familiar</label>
                <div 
                    title='Um Grupo Familiar serve para criar um grupo onde pessoas possuem acesso as mesmas receitas/despesas.'
                >
                    <Info size={15} className='cursor-help' />
                </div>
            </div>
            <select
                className='select-global'
                name='grupo_familiar'
                id=''
            >
                <option className='select-placeholder-global' value="">Escolha um Grupo Familiar</option>
            </select>
        </div>

        { /* Líder Familiar */}
        <div className='div-row-global items-center'>
            <input
                type='checkbox'
                className='checkbox-global'
                name='lider'
                id='lider'
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
                id=''
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
                    id=''
                    required
                />
            </div>
            <div className='div-col-global w-[45%] justify-between'>
                <label>Confirmar Senha</label>
                <input
                    type='text'
                    className='input-global'
                    id=''
                    required
                />
            </div>
        </div>
        
        {/* Botão Cadastrar/Link para Login */}
        <div className='div-col-global items-end'>
            <button
                type='submit'
                className='btn-azul-global'
            >
                Cadastrar
            </button>
            <Link href='/entrar' className='text-blue-700 text-[14px] underline'>
                Já possui cadastro? Entre.
            </Link>
        </div>
    </form>
  );
}
