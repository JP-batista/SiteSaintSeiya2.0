// src/app/characters/gold/leao/page.tsx

export default function LeaoPage() {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Aiolia de Leão</h1>
        </div>
        <img 
          src="https://i.pinimg.com/originals/83/7a/ef/837aef49ae60078b330f2237a2c015bd.png" 
          alt="Aiolia de Leão" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Aiolia é o Cavaleiro de Ouro de Leão, conhecido por sua bravura e coragem. Ele guarda a quinta casa do zodíaco e é extremamente leal a Atena.
          </p>
          <p className="text-gray-300">
            Sua força física e sua vontade inabalável de proteger a justiça o tornam um dos Cavaleiros de Ouro mais respeitados.
          </p>
        </div>
        <p className="text-yellow-400 mt-6 text-center">
          <a href="/characters/gold" className="hover:text-yellow-500">Voltar para Cavaleiros de Ouro</a>
        </p>
      </div>
    );
  }
  