// src/app/components/Header.tsx

export default function Header() {
    return (
      <header className="py-6">
        <img
          src="https://i.pinimg.com/originals/cf/38/b3/cf38b3ac9fc826e5e8b9c620f570fa4e.png" // URL da logo
          alt="Logo Os Cavaleiros do Zodíaco"
          className="mx-auto w-auto h-45 hover:scale-110 transition-transform duration-300" // Aumentando o tamanho da logo
        />
      </header>
    );
  }
  