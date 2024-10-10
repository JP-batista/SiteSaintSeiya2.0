// src/app/mangas/page.tsx

export default function MangasPage() {
    return (
      <div className="min-h-screen bg-transparent p-8">
        <h1 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
          Todos os Mangás de Saint Seiya
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card Mangá 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Saint Seiya: Clássico</h3>
            <p className="text-gray-300">O mangá original lançado em 1986.</p>
          </div>
          {/* Outros cards de mangás */}
          {/* Adicionar mais cards conforme necessário */}
        </div>
      </div>
    );
  }
  