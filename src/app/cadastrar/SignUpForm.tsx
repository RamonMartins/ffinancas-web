// app/signup/SignUpForm.tsx

'use client'; // ESSENCIAL: Declara que este é um Client Component

import React, { useState, FormEvent } from 'react';

// 1. Definição da interface (TypeScript)
interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function CadastroForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Manipulador de mudança de input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manipulador de envio do formulário
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Validação Simples
    if (!formData.name || !formData.email || !formData.password) {
      setError('Por favor, preencha todos os campos.');
      setLoading(false);
      return;
    }

    try {
      // 🚨 Ponto de Integração: Substitua esta lógica pela sua API de cadastro
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simula um delay de API

      // Exemplo de envio de dados (usando fetch se fosse para uma API real)
      /*
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Falha no cadastro. Tente novamente.');
      }
      */

      setSuccess(true);
      setFormData({ name: '', email: '', password: '' }); // Limpa o formulário
      
    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro desconhecido.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Mensagens de Feedback */}
      {error && (
        <div className="rounded-md bg-red-100 p-3 text-red-700">
          {error}
        </div>
      )}
      {success && (
        <div className="rounded-md bg-green-100 p-3 text-green-700">
          Cadastro realizado com sucesso!
        </div>
      )}

      {/* Campo Nome */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nome Completo
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {/* Campo Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {/* Campo Senha */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Senha
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {/* Botão de Cadastro */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full rounded-md py-3 font-semibold text-white shadow-md transition duration-150 ease-in-out ${
          loading
            ? 'cursor-not-allowed bg-indigo-400'
            : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        }`}
      >
        {loading ? 'Cadastrando...' : 'Cadastrar'}
      </button>

      {/* Link para Login */}
      <div className="mt-4 text-center text-sm">
        <p className="text-gray-600">
          Já tem uma conta?{' '}
          <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Faça Login
          </a>
        </p>
      </div>
    </form>
  );
}