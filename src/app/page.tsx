// src/app/page.tsx

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center">
      {/* O Header foi removido aqui porque ele já está no layout */}
      
      {/* Seção introdutória */}
      <section className="my-8">
        <h2 className="text-3xl text-yellow-400">Sobre Cavaleiros do Zodíaco</h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Os Cavaleiros do Zodíaco (Saint Seiya) é uma série japonesa de mangá e anime criada por Masami Kurumada. A série segue um grupo de jovens guerreiros chamados Cavaleiros, cuja missão é proteger a deusa Atena e salvar a Terra de ameaças sobrenaturais.
        </p>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Cada Cavaleiro usa uma armadura que é inspirada nas constelações e tem poderes especiais. A série se destaca por suas lutas épicas, a amizade entre os Cavaleiros e o tema da superação.
        </p>
      </section>

      {/* Chamada para conhecer o autor */}
      <section className="my-8">
        <h2 className="text-3xl text-yellow-400">Conheça o Autor</h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Este site foi criado por um fã apaixonado pelos Cavaleiros do Zodíaco. Se você quer conhecer mais sobre o autor e sua paixão por essa série, clique no link abaixo.
        </p>
        <Link href="/about" className="text-yellow-400 hover:text-yellow-500 mt-4 block">
          Saiba mais sobre o autor
        </Link>
      </section>
    </div>
  );
}
