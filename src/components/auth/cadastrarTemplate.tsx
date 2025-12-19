"use client";

import React, { useState } from 'react';
import { Info } from 'lucide-react';
import Link from 'next/link';
import { cadastrarUsuario, cadastrarGrupoFamiliar } from '@/actions/cadastrar';

export default function CadastroForm() {
  const [isLider, setIsLider] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  // Função para lidar com o envio do formulário de usuário
  async function handleUserSubmit(formData: FormData) {
    try {
      // Se for líder, garantimos que o grupo_familiar vá vazio
      if (isLider) {
        formData.set('grupo_familiar', '');
      }

      const result = await cadastrarUsuario(formData);

      if (result.success) {
        if (isLider) {
          setUserId(result.userId); // Guarda o ID para vincular ao grupo
          setShowPopup(true);       // Abre o popup
        } else {
          alert("Cadastro realizado com sucesso!");
          window.location.href = '/entrar';
        }
      }
    } catch (error) {
      alert("Erro ao cadastrar: " + (error as Error).message);
    }
  }

  // Função para cadastrar o grupo no popup
  async function handleGroupSubmit(formData: FormData) {
    if (!userId) return;
    
    formData.append('usuario_id', userId); // Vincula o grupo ao usuário
    const result = await cadastrarGrupoFamiliar(formData);
    
    if (result.success) {
      alert("Grupo e Líder cadastrados com sucesso!");
      window.location.href = '/entrar';
    }
  }

  return (
    <>
      <form action={handleUserSubmit} className="p-5 flex flex-col gap-4">
        {/* Nome Completo */}
        <div className='div-col-global'>
          <label htmlFor="nome">Nome Completo</label>
          <input
            id="nome"
            name="nome"
            type='text'
            placeholder='José da Silva'
            className='input-global'
            required
          />
        </div>

        {/* Grupo Familiar - OCULTO SE FOR LÍDER */}
        {!isLider && (
          <div className='div-col-global'>
            <div className='div-row-global items-center'>
              <label htmlFor="grupo_familiar">Grupo Familiar</label>
              <div title='Um Grupo Familiar serve para criar um grupo...'>
                <Info size={15} className='cursor-help' />
              </div>
            </div>
            <select
              id="grupo_familiar"
              name='grupo_familiar'
              className='select-global'
              required={!isLider}
            >
              <option value="">Escolha um Grupo Familiar</option>
              <option value="1">Família Silva</option>
            </select>
          </div>
        )}

        {/* Líder Familiar */}
        <div className='div-row-global items-center'>
          <input
            type='checkbox'
            className='checkbox-global'
            name='lider'
            id='lider'
            checked={isLider}
            onChange={(e) => setIsLider(e.target.checked)}
          />
          <label htmlFor='lider'>Sou um Líder Familiar</label>
        </div>

        {/* Email */}
        <div className='div-col-global'>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type='email'
            placeholder='jose.silva@gmail.com'
            className='input-global'
            required
          />
        </div>

        {/* Senhas */}
        <div className='div-row-global justify-between'>
          <div className='div-col-global w-[45%]'>
            <label htmlFor="senha">Senha</label>
            <input id="senha" name="senha" type='password' className='input-global' required />
          </div>
          <div className='div-col-global w-[45%]'>
            <label htmlFor="confirmar">Confirmar Senha</label>
            <input id="confirmar" name="confirmar" type='password' className='input-global' required />
          </div>
        </div>
        
        <div className='div-col-global items-end'>
          <button type='submit' className='btn-azul-global'>Cadastrar</button>
          <Link href='/entrar' className='text-blue-700 text-[14px] underline'>
            Já possui cadastro? Entre.
          </Link>
        </div>
      </form>

      {/* POPUP DE CADASTRO DE GRUPO */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-[400px]">
            <h2 className="text-xl font-bold mb-4">Cadastrar Grupo Familiar</h2>
            <p className="text-sm text-gray-600 mb-4">Como você é um líder, precisamos dar um nome ao seu novo grupo.</p>
            
            <form action={handleGroupSubmit} className="flex flex-col gap-4">
              <div className="div-col-global">
                <label>Nome do Grupo</label>
                <input 
                  name="nome_grupo" 
                  type="text" 
                  placeholder="Ex: Família Silva" 
                  className="input-global" 
                  required 
                />
              </div>
              <button type="submit" className="btn-azul-global w-full">
                Finalizar Cadastro
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}