import { useTheme } from '../../context/ThemeContext';

export default function ThemeSwitcher() {
  const { toggleTheme, toggleDarkMode, isDarkMode } = useTheme();

  return (
    <div className="flex space-x-4 p-4">
      <button onClick={() => toggleTheme('sanctuary')} className="bg-yellow-500 px-4 py-2 rounded-lg">Tema Santuário</button>
      <button onClick={() => toggleTheme('asgard')} className="bg-blue-500 px-4 py-2 rounded-lg">Tema Asgard</button>
      <button onClick={() => toggleTheme('poseidon')} className="bg-blue-700 px-4 py-2 rounded-lg">Tema Poseidon</button>
      <button onClick={() => toggleTheme('hades')} className="bg-red-500 px-4 py-2 rounded-lg">Tema Hades</button>
      
      <button onClick={toggleDarkMode} className="bg-gray-800 px-4 py-2 rounded-lg">
        {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </div>
  );
}
