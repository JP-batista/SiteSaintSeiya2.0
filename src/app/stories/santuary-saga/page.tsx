// src/app/stories/santuary-saga/page.tsx

import Link from 'next/link';

export default function SantuarySagaPage() {
  return (
    <div className="min-h-screen bg-transparent p-8">
      {/* Título da Página */}
      <h1 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
        Saga do Santuário
      </h1>

      {/* Introdução à Saga */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-8">Introdução à Saga</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 - Introdução dos Cavaleiros de Bronze */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Introdução dos Cavaleiros de Bronze</h3>
            <p className="text-gray-300 text-lg">
              Seiya e outros jovens guerreiros, como Shiryu, Hyoga, Shun e Ikki, são apresentados. Cada um possui uma armadura sagrada (Cloth) associada a uma constelação e luta em nome de Atena.
            </p>
          </div>

          {/* Card 2 - Conflito com o Santuário */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Conflito com o Santuário</h3>
            <p className="text-gray-300 text-lg">
              Saori Kido descobre ser a reencarnação de Atena, e o Santuário, liderado pelo Grande Mestre, se volta contra ela. O Grande Mestre é, na verdade, um usurpador, controlado pelo Cavaleiro de Ouro de Gêmeos, Saga, que planeja matar Atena e tomar seu poder.
            </p>
          </div>

          {/* Card 3 - Batalha nas Doze Casas */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Batalha nas Doze Casas</h3>
            <p className="text-gray-300 text-lg">
              O clímax da saga ocorre quando Atena é ferida por uma flecha dourada, e os Cavaleiros de Bronze precisam atravessar as Doze Casas do Zodíaco, onde enfrentam os poderosos Cavaleiros de Ouro. Cada casa é protegida por um Cavaleiro de Ouro associado a uma constelação do zodíaco.
            </p>
          </div>

          {/* Card 4 - Enfrentando os Cavaleiros de Ouro */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Enfrentando os Cavaleiros de Ouro</h3>
            <p className="text-gray-300 text-lg">
              Os Cavaleiros de Bronze enfrentam inimigos poderosos, como Aldebaran de Touro, Aioria de Leão e Shaka de Virgem, mas também recebem ajuda de alguns, como Mu de Áries e Dohko de Libra.
            </p>
          </div>

          {/* Card 5 - Saga de Gêmeos */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Saga de Gêmeos</h3>
            <p className="text-gray-300 text-lg">
              No final, Seiya e seus amigos descobrem a verdade sobre o Grande Mestre e enfrentam Saga de Gêmeos, que revela sua natureza dividida entre o bem e o mal. Após uma batalha épica, Seiya consegue destruir a armadura de Saga e salvar Atena.
            </p>
          </div>

          {/* Card 6 - Restauração da Ordem */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Restauração da Ordem</h3>
            <p className="text-gray-300 text-lg">
              Após a derrota de Saga, a verdadeira paz é restaurada no Santuário, e Saori, como Atena, assume seu papel legítimo como líder dos Cavaleiros.
            </p>
          </div>

        </div>
      </section>

      {/* Batalhas das Doze Casas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Batalhas das Doze Casas e Episódios</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Casa de Áries - Episódios 41 e 42</h3>
            <p className="text-gray-300 text-lg">
              Os Cavaleiros de Bronze enfrentam Mu de Áries, que inicialmente os confronta, mas depois os ajuda a restaurar suas armaduras e a seguir em frente.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Casa de Touro - Episódio 43</h3>
            <p className="text-gray-300 text-lg">
              Seiya enfrenta Aldebaran de Touro. Seiya precisa quebrar o chifre da armadura de Aldebaran para poder prosseguir.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Casa de Gêmeos - Episódios 44 a 48</h3>
            <p className="text-gray-300 text-lg">
              Os Cavaleiros de Bronze enfrentam a ilusão da Casa de Gêmeos. Mais tarde, é revelado que Saga de Gêmeos, o Grande Mestre, está controlando tudo.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Casa de Câncer - Episódio 49</h3>
            <p className="text-gray-300 text-lg">
              Shiryu enfrenta Máscara da Morte de Câncer em uma luta épica onde Shiryu acaba enviando Máscara da Morte para o Mundo dos Mortos.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Casa de Leão - Episódios 50 e 51</h3>
            <p className="text-gray-300 text-lg">
              Seiya luta contra Aiolia de Leão, que está sob controle mental, mas Seiya consegue libertá-lo.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Casa de Virgem - Episódios 52 a 55</h3>
            <p className="text-gray-300 text-lg">
              Ikki enfrenta Shaka de Virgem, o cavaleiro mais próximo de Deus. Ikki sacrifica-se para derrotar Shaka.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Casa de Libra - Episódios 56 e 57</h3>
            <p className="text-gray-300 text-lg">
              Hyoga é libertado do caixão de gelo por Shiryu e os Cavaleiros de Bronze encontram as armas da armadura de Libra, de Dohko.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Casa de Escorpião - Episódio 58</h3>
            <p className="text-gray-300 text-lg">
              Hyoga enfrenta Milo de Escorpião, e é quase derrotado pelo poderoso ataque Antares de Milo, mas consegue resistir.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Casa de Sagitário - Episódio 59</h3>
            <p className="text-gray-300 text-lg">
              Na Casa de Sagitário, os Cavaleiros de Bronze recebem uma mensagem e proteção de Aiolos de Sagitário.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Casa de Capricórnio - Episódio 60</h3>
            <p className="text-gray-300 text-lg">
              Shiryu enfrenta Shura de Capricórnio, que sacrifica sua vida para salvar Shiryu, reconhecendo sua lealdade a Atena.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Casa de Aquário - Episódio 61</h3>
            <p className="text-gray-300 text-lg">
              Hyoga enfrenta Camus de Aquário, seu mestre, em uma batalha intensa onde Camus força Hyoga a superar seus limites.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Casa de Peixes - Episódios 62 e 63</h3>
            <p className="text-gray-300 text-lg">
              Seiya e Shun enfrentam Afrodite de Peixes. Afrodite usa rosas venenosas para tentar impedir os Cavaleiros de Bronze.
            </p>
          </div>
        </div>
      </section>

      {/* Batalhas Principais */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Batalhas Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Batalha 1: Seiya vs. Aldebaran */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <img
              src="https://seiya.com.br/wp-content/uploads/2021/07/Aldebara.jpg"
              alt="Batalha de Seiya contra Aldebaran"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl text-yellow-300 font-bold mb-2">Luta de Seiya contra Aldebaran</h3>
            <p className="text-gray-300 text-lg">
              Seiya enfrenta o imponente Aldebaran de Touro na Casa de Touro. Para passar, Seiya precisa quebrar o chifre da armadura de Aldebaran, uma tarefa quase impossível. A persistência de Seiya leva a uma vitória surpreendente.
            </p>
          </div>

          {/* Batalha 2: Shaka vs. Ikki */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <img
              src="https://criticalhits.com.br/wp-content/uploads/2023/03/ikki-morre-02.jpg"
              alt="Combate épico de Shaka contra Ikki"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl text-yellow-300 font-bold mb-2">Combate épico de Shaka de Virgem contra Ikki de Fênix</h3>
            <p className="text-gray-300 text-lg">
              Shaka de Virgem, o cavaleiro mais próximo de Deus, trava uma batalha intensa contra Ikki de Fênix. Durante a luta, Shaka utiliza o poderoso golpe de "Rendição Divina", mas Fênix se recusa a ser derrotado.
            </p>
          </div>
        </div>
      </section>

      {/* Link de Voltar */}
      <div className="text-center">
        <Link href="/stories" legacyBehavior>
          <a className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300">
            Voltar para Histórias Épicas
          </a>
        </Link>
      </div>
    </div>
  );
}
