// src/app/login/signup/page.tsx

"use client"; // Marca como Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Para redirecionamento
import Image from 'next/image';
import Link from 'next/link';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter(); // Hook para redirecionamento

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica se todos os campos estão preenchidos
    if (!name || !email || !password || !confirmPassword) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    // Redireciona para a página principal após o preenchimento correto
    router.push('/');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="bg-gray-900 bg-opacity-75 shadow-lg rounded-2xl max-w-3xl w-full p-8 flex flex-col items-center">
        
        {/* Título e logo */}
        <div className="mb-8 text-center">
          <Image
            src="/icons/logo4.png" // Substitua pelo caminho da logo do Syner
            alt="Logo Syner"
            width={200}
            height={200}
          />
          <h1 className="text-2xl font-semibold text-yellow-500 mt-4">Crie sua conta</h1>
        </div>

        {/* Formulário de criação de conta */}
        <form onSubmit={handleSubmit} className="w-full max-w-md grid grid-cols-2 gap-6">
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Seu nome"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Seu e-mail"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Sua senha"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-1">Confirmar Senha</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Confirme sua senha"
            />
          </div>

          {/* Botão de criar conta centralizado */}
          <div className="col-span-2 mt-4 flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-yellow-500 text-gray-900 py-3 px-8 rounded-lg font-semibold hover:bg-yellow-600 transition-all transform hover:scale-105"
            >
              Criar Conta
            </button>
          </div>
        </form>

        {/* Link para voltar ao login */}
        <div className="mt-6">
          <p className="text-gray-300">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-yellow-500 hover:underline">
              Fazer Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
