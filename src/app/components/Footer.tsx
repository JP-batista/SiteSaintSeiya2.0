// src/app/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Os Cavaleiros do Zodíaco. Todos os direitos reservados.</p>
          <p className="mt-2">
            Site desenvolvido por João Pedro Batista. Conecte-se conosco: 
            <a href="https://x.com/JP_Eissoai" target="_blank" className="ml-2 text-yellow-500 hover:text-yellow-400">
              Twitter
            </a>
            ,
            <a href="https://www.facebook.com/jpribeiro.batista" target="_blank" className="ml-2 text-yellow-500 hover:text-yellow-400">
              Facebook
            </a>
            ,
            <a href="https://www.instagram.com/jp_batista20/" target="_blank" className="ml-2 text-yellow-500 hover:text-yellow-400">
              Instagram
            </a>
          </p>
          <p className="mt-4 text-xs text-gray-400">
            As informações contidas neste site são de domínio público e fazem parte do universo da série Saint Seiya. 
            Este site é uma homenagem à obra criada por Masami Kurumada.
          </p>
        </div>
      </footer>
    );
  }
  