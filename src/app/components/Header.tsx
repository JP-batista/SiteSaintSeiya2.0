// src/app/components/Header.tsx

import React from 'react';

export default function Header() {
  return (
    <header className="py-6">
      <img
        src="https://i.pinimg.com/originals/cf/38/b3/cf38b3ac9fc826e5e8b9c620f570fa4e.png"
        alt="Logo Os Cavaleiros do Zodíaco"
        className="mx-auto w-96 hover:scale-105 transition-transform duration-300"
      />
      <h1 className="text-4xl text-gray-100 font-bold mt-4 text-center">
      </h1>
    </header>
  );
}
