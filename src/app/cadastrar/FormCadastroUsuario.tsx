'use client'; // Necessário para usar hooks e estado no Next.js App Router

import React, { useState, FormEvent } from 'react';
import { RegisterFormData } from '@/@types/usuarios'; // Vamos criar este tipo em breve

// 🎨 Cores baseadas na sua escolha: #5096FE (equivalente a rgba(80, 150, 254, 1))
const PRIMARY_COLOR = 'bg-[#5096FE]';
const HOVER_COLOR = 'hover:bg-[#4085E0]'; // Um pouco mais escuro
const FOCUS_RING = 'focus:ring-blue-500/80';
const BORDER_COLOR = 'border-[#5096FE]';

export default function SignUpPage() {
  const [formData, setFormData] = useState<RegisterFormData>({
    full_name: '',
    email: '',
    password: '',
    confirm_password: '', // Apenas para validação no front-end
    is_family_leader: false,
  });

  const [errors, setErrors] = useState<Partial<RegisterFormData>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Manipulador de mudança de input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Função de validação simples no front-end
  const validate = (): boolean => {
    const newErrors: Partial<RegisterFormData> = {};
    if (!formData.full_name) newErrors.full_name = 'Nome completo é obrigatório.';
    if (!formData.email) newErrors.email = 'Email é obrigatório.';
    // Validação de email básica
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido.';
    if (formData.password.length < 6) newErrors.password = 'A senha deve ter pelo menos 6 caracteres.';
    if (formData.password !== formData.confirm_password) newErrors.confirm_password = 'As senhas não coincidem.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manipulador de submissão do formulário
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setLoading(true);
    setSuccess(false);
    setErrors({});

    try {
      // ⚠️ DICA: No envio para a API, você DEVE remover o campo confirm_password
      const { confirm_password, ...dataToSend } = formData; 

      const response = await fetch('/api/v1/users/register', { // Endpoint de exemplo do FastAPI
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend), // Envia apenas os dados necessários
      });

      if (!response.ok) {
        // Tenta ler a mensagem de erro da API
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Falha no cadastro. Tente novamente.');
      }

      setSuccess(true);
      // Opcional: Redirecionar para a página de login ou home
      // router.push('/login'); 

    } catch (error) {
      console.error('Erro de registro:', error);
      // Exibir erro genérico ou o erro da API
      setErrors({ email: (error as Error).message }); 
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="p-8 bg-white shadow-xl rounded-lg max-w-md w-full text-center border-t-4 border-[#5096FE]">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Cadastro Concluído!</h2>
          <p className="text-gray-600 mb-6">Sua conta foi criada com sucesso.</p>
          <a 
            href="/login" 
            className={`py-2 px-4 rounded-lg text-white font-semibold transition duration-200 ease-in-out ${PRIMARY_COLOR} ${HOVER_COLOR} focus:outline-none focus:ring-4 ${FOCUS_RING}`}
          >
            Ir para Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="p-8 bg-white shadow-xl rounded-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Criar Conta</h2>
        {/*  */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            label="Nome Completo" 
            name="full_name" 
            type="text"
            value={formData.full_name}
            onChange={handleChange}
            error={errors.full_name}
          />
          <Input 
            label="Email" 
            name="email" 
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input 
            label="Senha" 
            name="password" 
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <Input 
            label="Confirmação de Senha" 
            name="confirm_password" 
            type="password"
            value={formData.confirm_password}
            onChange={handleChange}
            error={errors.confirm_password}
          />
          
          <div className="flex items-center space-x-2 pt-2">
            <input
              id="is_family_leader"
              name="is_family_leader"
              type="checkbox"
              checked={formData.is_family_leader}
              onChange={handleChange}
              className={`h-4 w-4 text-[#5096FE] ${BORDER_COLOR} rounded focus:ring-2 focus:ring-[#5096FE]/50`}
            />
            <label htmlFor="is_family_leader" className="text-sm font-medium text-gray-700 select-none">
              Sou Líder Familiar
            </label>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className={`w-full py-3 mt-6 rounded-lg text-white font-bold transition duration-200 ease-in-out ${PRIMARY_COLOR} ${HOVER_COLOR} focus:outline-none focus:ring-4 ${FOCUS_RING} disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
          >
            {loading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : 'Cadastrar'}
          </button>
        </form>
      </div>
    </div>
  );
}

// Componente de Input Reutilizável
interface InputProps {
  label: string;
  name: keyof RegisterFormData;
  type: string;
  value: string | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, name, type, value, onChange, error }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="mt-1">
      <input
        id={name}
        name={name}
        type={type}
        required
        value={value as string}
        onChange={onChange}
        className={`appearance-none block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-opacity-70 focus:ring-[#5096FE] sm:text-sm`}
      />
    </div>
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);