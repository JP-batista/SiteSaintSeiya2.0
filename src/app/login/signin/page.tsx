// src/app/login/signin/page.tsx

"use client"; // Marca como Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function SigninPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Para redirecionamento

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica se os campos estão preenchidos
    if (!email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você pode adicionar lógica de autenticação (API, Firebase, etc.)
    // Se a autenticação for bem-sucedida, redirecione o usuário
    router.push('/'); // Redireciona para a página principal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-gray-900 bg-opacity-75 shadow-lg rounded-lg max-w-3xl w-full p-8 flex flex-col items-center">
        
        {/* Título e logo */}
        <div className="mb-8 text-center">
          <Image
            src="/icons/logo4.png" // Substitua pelo caminho da logo do Syner
            alt="Logo Atena"
            width={200}
            height={200}
          />
          <h1 className="text-2xl font-semibold text-yellow-500 mt-4">Entrar na sua conta</h1>
        </div>

        {/* Formulário de login */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Seu e-mail"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Sua senha"
            />
          </div>

          {/* Botão de entrar */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
          >
            Entrar
          </button>
        </form>

        {/* Link para criar uma nova conta */}
        <div className="mt-6">
          <p className="text-gray-300">
            Não tem uma conta?{' '}
            <Link href="/login/signup" className="text-yellow-500 hover:underline">
              Criar conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
