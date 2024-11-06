// src/app/login/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden fixed inset-0 p-8">
      <div className="rounded-lg max-w-6xl w-full p-12 flex flex-col md:flex-row shadow-lg">
        
        {/* Esquerda: Formulário de login */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="text-center mb-8">
            {/* Logo do Syner maior e centralizada */}
            <img
              src="/icons/logo4.png"
              alt="Logo do Atena"
              width={300}
              height={300}
              className="rounded-full transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Botões de ação */}
          <div className="space-y-6 w-full max-w-xs">
            {/* Botão de criar conta */}
            <Link href="/login/signup">
              <button className="bg-yellow-500 text-gray-900 w-full py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300">
                Criar Conta
              </button>
            </Link>
            {/* Botão de login com Google */}
            <button className="bg-white border border-gray-300 w-full py-4 rounded-lg flex items-center justify-center space-x-2 font-semibold hover:bg-gray-300 transition-colors duration-300">
              <Image
                src="/icons/google-logo.png"
                alt="Google Logo"
                width={24}
                height={24}
              />
              <span>Continuar com o Google</span>
            </button>
          </div>
        </div>

        {/* Linha de divisão */}
        <div className="w-[1px] bg-gray-500 mx-8 hidden md:block"></div>

        {/* Direita: Texto descritivo */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center pl-8">
          {/* Logo adicional */}
          <div className="text-center mb-8">
            <img
              src="https://i.pinimg.com/originals/cf/38/b3/cf38b3ac9fc826e5e8b9c620f570fa4e.png"
              alt="Logo LOS"
              className="w-auto h-auto hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>

          <p className="text-gray-300 text-lg mb-8 text-center">
            Explore o universo dos Cavaleiros do Zodíaco! Descubra sagas épicas, personagens icônicos e batalhas lendárias neste portal dedicado ao mundo de Saint Seiya.
          </p>
          <div className="text-center w-full max-w-xs">
            <Link href="/login/signin">
              <button className="bg-yellow-500 text-gray-900 w-full py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
