export default function Header() {
  return (
    <header className="py-8">
      {/* Logo principal */}
      <div className="flex justify-center items-center mb-8">
        <img
          src="https://i.pinimg.com/originals/cf/38/b3/cf38b3ac9fc826e5e8b9c620f570fa4e.png"
          alt="Logo Os Cavaleiros do Zodíaco"
          className="w-auto h-auto hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Linha com os capacetes */}
      <div className="flex justify-center items-center space-x-6">
        <img
          src="/logos/helmet-pegasus.svg"
          alt="Capacete de Pégaso"
          className="w-20 h-auto hover:scale-110 transition-transform duration-300 ease-in-out"
          style={{ filter: 'brightness(0) invert(1)' }} // Logo branca
        />
        <img
          src="/logos/helmet-draco.svg"
          alt="Capacete de Dragão"
          className="w-32 h-auto hover:scale-110 transition-transform duration-300 ease-in-out"
          style={{ filter: 'brightness(0) invert(1)' }} // Logo branca
        />
        <img
          src="/logos/helmet-cygnus.svg"
          alt="Capacete de Cisne"
          className="w-24 h-auto hover:scale-110 transition-transform duration-300 ease-in-out"
          style={{ filter: 'brightness(0) invert(1)' }} // Logo branca
        />
        <img
          src="/logos/helmet-andromeda.svg"
          alt="Capacete de Andrômeda"
          className="w-20 h-auto hover:scale-110 transition-transform duration-300 ease-in-out"
          style={{ filter: 'brightness(0) invert(1)' }} // Logo branca
        />
        <img
          src="/logos/helmet-phoenix.svg"
          alt="Capacete de Fênix"
          className="w-20 h-auto hover:scale-110 transition-transform duration-300 ease-in-out"
          style={{ filter: 'brightness(0) invert(1)' }} // Logo branca
        />
      </div>
    </header>
  );
}
