// src/app/login/page.tsx
"use client"; // Marca este componente como Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Usando next/navigation

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Usando useRouter de next/navigation

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica se ambos os campos foram preenchidos
    if (username && password) {
      // Redireciona para a página inicial
      router.push('/');
    } else {
      alert('Por favor, preencha ambos os campos de usuário e senha.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl text-yellow-400 mb-6 text-center font-bold">Login</h1>
      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
              Usuário
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Atualiza o estado do campo "usuário"
              className="w-full p-3 bg-gray-900 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Atualiza o estado do campo "senha"
              className="w-full p-3 bg-gray-900 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
