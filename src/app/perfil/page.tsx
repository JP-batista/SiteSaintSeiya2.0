'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import cavaleiros, { Cavaleiro } from '../data/skins'; // Importando temas de cavaleiros e interface
import Image from 'next/image';

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState('Seiya de Pégaso');
    const [email, setEmail] = useState("seiya@cosmo.com");
    const [bio, setBio] = useState("Cavaleiro de Bronze e protetor de Atena.");
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [birthdate, setBirthdate] = useState("");
    const [location, setLocation] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");
    const [selectedCavaleiro, setSelectedCavaleiro] = useState(cavaleiros[0]);
    const [achievements, setAchievements] = useState<string[]>([]);
    const [completedDifficulties, setCompletedDifficulties] = useState<string[]>([]);
    const [isThemeSelectionOpen, setThemeSelectionOpen] = useState(false);
    const [quizProgress, setQuizProgress] = useState(0);
    const totalAchievements = 10; // Total de conquistas disponíveis
    const totalDifficulties = 4; // Facil, medio, dificil, impossivel

    useEffect(() => {
        const savedUsername = localStorage.getItem('username');
        const savedEmail = localStorage.getItem('email');
        const savedBio = localStorage.getItem('bio');
        const savedBirthdate = localStorage.getItem('birthdate');
        const savedLocation = localStorage.getItem('location');
        const savedLinkedin = localStorage.getItem('linkedin');
        const savedTwitter = localStorage.getItem('twitter');
        const savedInstagram = localStorage.getItem('instagram');
        const savedSelectedCavaleiro = localStorage.getItem('selectedCavaleiro');
        const savedNotificationsEnabled = localStorage.getItem('notificationsEnabled') === 'true';
        const savedAchievements = localStorage.getItem('achievements');
        const savedCompletedDifficulties = localStorage.getItem('completedDifficulties');

        setUsername(savedUsername || 'Seiya de Pégaso');
        setEmail(savedEmail || "seiya@cosmo.com");
        setBio(savedBio || "Cavaleiro de Bronze e protetor de Atena.");
        setBirthdate(savedBirthdate || "");
        setLocation(savedLocation || "");
        setLinkedin(savedLinkedin || "");
        setTwitter(savedTwitter || "");
        setInstagram(savedInstagram || "");
        setSelectedCavaleiro(savedSelectedCavaleiro ? cavaleiros.find(c => c.name === savedSelectedCavaleiro) || cavaleiros[0] : cavaleiros[0]);
        setNotificationsEnabled(savedNotificationsEnabled);
        setAchievements(savedAchievements ? JSON.parse(savedAchievements) : []);
        setCompletedDifficulties(savedCompletedDifficulties ? JSON.parse(savedCompletedDifficulties) : []);
        setQuizProgress((savedCompletedDifficulties ? JSON.parse(savedCompletedDifficulties).length : 0) / totalDifficulties * 100);
    }, []);

    useEffect(() => {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('bio', bio);
        localStorage.setItem('birthdate', birthdate);
        localStorage.setItem('location', location);
        localStorage.setItem('linkedin', linkedin);
        localStorage.setItem('twitter', twitter);
        localStorage.setItem('instagram', instagram);
        localStorage.setItem('selectedCavaleiro', selectedCavaleiro.name);
        localStorage.setItem('notificationsEnabled', notificationsEnabled.toString());
        localStorage.setItem('achievements', JSON.stringify(achievements));
    }, [username, email, bio, birthdate, location, linkedin, twitter, instagram, selectedCavaleiro, notificationsEnabled, achievements]);

  
    const handleEditToggle = () => setIsEditing(!isEditing);
    const handleSave = () => setIsEditing(false);

    const handleThemeChange = (cavaleiro: Cavaleiro) => {
        setSelectedCavaleiro(cavaleiro);
        setThemeSelectionOpen(false);
    };

  return (
    <div className="min-h-screen text-white">
      {/* Banner do perfil */}
      <div className="relative mt-6">
        <div
            className="relative w-full max-w-[calc(100%-3rem)] h-72 overflow-hidden rounded-3xl shadow-lg border-4 border-yellow-500 mx-auto mb-8"
            style={{
                backgroundImage: `url(${selectedCavaleiro.banner})`,
                backgroundSize: 'cover',
                backgroundPosition: "right", // Alinha a imagem de fundo à direita
            }}
        >
        </div>
        {/* Foto de perfil com sobreposição */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 shadow-xl" >
            <div
                style={{
                backgroundImage: `url(${selectedCavaleiro.banner})`,
                backgroundPosition: '85% center', // Alinha a imagem à direita
                backgroundSize: 'cover',
                width: '10rem', // Largura da imagem
                height: '10rem', // Altura da imagem
                }}
                className="rounded-full overflow-hidden"
            />
        </div>
      </div>

      <div className="container mx-auto p-6 pt-20">
        <h1 className="text-5xl font-bold text-yellow-500 text-center mb-6">{username}</h1>
        
        {/* Informações do Perfil com fundo escurecido */}
        <div 
            className="relative bg-gray-800 p-10 rounded-3xl shadow-2xl mb-12 text-center"
            style={{
                backgroundImage: `url(${selectedCavaleiro.banner})`,
                backgroundSize: 'cover',
                backgroundPosition: '75% center', // Alinha a imagem de fundo à direita
            }}
        >
            <div className="absolute inset-0 bg-black opacity-70 rounded-3xl"></div>

            <div className="relative z-10">
                <h2 className="text-4xl font-bold text-yellow-400 mb-10">Informações do Perfil</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left bg-gray-900 bg-opacity-75 p-8 rounded-3xl shadow-lg border border-yellow-500">
                    <div>
                        <label className="flex items-center text-lg font-semibold text-yellow-300 mb-2">
                            <span className="mr-3">📧</span>Email
                        </label>
                        {isEditing ? (
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 mt-2 rounded-lg bg-gray-700 border border-yellow-500 focus:ring-2 focus:ring-yellow-500 shadow-inner placeholder-gray-400 text-white"
                                placeholder="Seu email"
                            />
                        ) : (
                            <p className="mt-2 text-lg text-white">{email}</p>
                        )}
                    </div>
                    <div>
                        <label className="flex items-center text-lg font-semibold text-yellow-300 mb-2">
                            <span className="mr-3"></span>Nome
                        </label>
                        {isEditing ? (
                            <input
                            value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-3 mt-2 rounded-lg bg-gray-700 border border-yellow-500 focus:ring-2 focus:ring-yellow-500 shadow-inner placeholder-gray-400 text-white"
                                placeholder="Nome do Perfil"
                                />
                        ) : (
                            <p className="mt-2 text-lg text-white">{username}</p>
                        )}
                    </div>

                    <div>
                        <label className="flex items-center text-lg font-semibold text-yellow-300 mb-2">
                            <span className="mr-3">🎂</span>Data de Nascimento
                        </label>
                        {isEditing ? (
                            <input
                                type="date"
                                value={birthdate}
                                onChange={(e) => setBirthdate(e.target.value)}
                                className="w-full p-3 mt-2 rounded-lg bg-gray-700 border border-yellow-500 focus:ring-2 focus:ring-yellow-500 shadow-inner placeholder-gray-400 text-white"
                            />
                        ) : (
                            <p className="mt-2 text-lg text-white">{birthdate || "Não informado"}</p>
                        )}
                    </div>

                    <div className="col-span-2">
                        <label className="flex items-center text-lg font-semibold text-yellow-300 mb-2">
                            <span className="mr-3">📍</span>Localização
                        </label>
                        {isEditing ? (
                            <input
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full p-3 mt-2 rounded-lg bg-gray-700 border border-yellow-500 focus:ring-2 focus:ring-yellow-500 shadow-inner placeholder-gray-400 text-white"
                                placeholder="Cidade, País"
                            />
                        ) : (
                            <p className="mt-2 text-lg text-white">{location || "Não informado"}</p>
                        )}
                    </div>

                    <div className="col-span-2">
                        <label className="flex items-center text-lg font-semibold text-yellow-300 mb-2">
                            <span className="mr-3">✍️</span>Biografia
                        </label>
                        {isEditing ? (
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className="w-full p-4 mt-2 rounded-lg bg-gray-700 border border-yellow-500 focus:ring-2 focus:ring-yellow-500 shadow-inner placeholder-gray-400 text-white"
                                rows={4}
                                placeholder="Escreva uma breve descrição sobre você"
                            />
                        ) : (
                            <p className="mt-2 text-lg text-white">{bio}</p>
                        )}
                    </div>
                </div>

                <div className="mt-10 text-left">
                    <label className="block text-lg font-semibold text-yellow-300 mb-6">Redes Sociais</label>
                    {isEditing ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                            placeholder="LinkedIn"
                            value={linkedin}
                            onChange={(e) => setLinkedin(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-700 border border-yellow-500 focus:ring-2 focus:ring-yellow-500 text-white shadow-inner"
                        />
                        <input
                            placeholder="Twitter"
                            value={twitter}
                            onChange={(e) => setTwitter(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-700 border border-yellow-500 focus:ring-2 focus:ring-yellow-500 text-white shadow-inner"
                        />
                        <input
                            placeholder="Instagram"
                            value={instagram}
                            onChange={(e) => setInstagram(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-700 border border-yellow-500 focus:ring-2 focus:ring-yellow-500 text-white shadow-inner"
                        />
                    </div>
                    ) : (
                    <div className="flex justify-center space-x-8 mt-4">
                        {linkedin && <a href={linkedin} target="_blank" className="text-yellow-400 hover:underline hover:text-yellow-300 transition-colors">LinkedIn</a>}
                        {twitter && <a href={twitter} target="_blank" className="text-yellow-400 hover:underline hover:text-yellow-300 transition-colors">Twitter</a>}
                        {instagram && <a href={instagram} target="_blank" className="text-yellow-400 hover:underline hover:text-yellow-300 transition-colors">Instagram</a>}
                    </div>
                    )}
                </div>

                {/* Botões de Ação */}
                <div className="flex justify-center space-x-6 mt-12">
                    <button
                        onClick={handleEditToggle}
                        className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
                    >
                        {isEditing ? "Cancelar" : "Editar Perfil"}
                    </button>
                    {isEditing && (
                    <button
                        onClick={handleSave}
                        className="bg-gradient-to-br from-green-400 to-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
                    >
                        Salvar
                    </button>
                    )}
                </div>
            </div>
        </div>
  

        {/* Progresso do Usuário */}
        <div className="bg-gray-800 p-8 rounded-3xl shadow-lg mb-12 text-center relative overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute inset-0 opacity-25 bg-[url('/path/to/decorative-background.jpg')] bg-cover bg-center"></div>
            <div className="relative z-10">
                <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 p-2">Progresso</h2>

                {/* Barra de progresso de quizzes completos */}
                <p className="text-lg mb-3 font-semibold text-gray-300">Quiz Completos</p>
                <div className="w-full bg-gray-700 rounded-full h-6 shadow-inner overflow-hidden mb-8 relative">
                    <div
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${quizProgress}%` }}
                    ></div>
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm font-bold text-gray-100 animate-pulse">
                        {quizProgress}%
                    </span>
                </div>

                <p className="text-lg font-semibold text-gray-300 mb-5">
                    Conquistas Desbloqueadas: {achievements.length}/{totalAchievements}
                </p>

                {/* Barra de progresso de conquistas */}
                <div className="w-full bg-gray-700 rounded-full h-6 shadow-inner overflow-hidden mb-8 relative">
                    <div
                        className="bg-gradient-to-r from-green-400 via-yellow-400 to-yellow-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${(achievements.length / totalAchievements) * 100}%` }}
                    ></div>
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm font-bold text-gray-100 animate-pulse">
                        {Math.round((achievements.length / totalAchievements) * 100)}%
                    </span>
                </div>

                {/* Conquistas Desbloqueadas */}
                <div className="flex justify-center flex-wrap space-x-4 mt-4">
                    {Array.from({ length: totalAchievements }).map((_, idx) => (
                        <div key={idx} className="relative group flex flex-col items-center space-y-1">
                            <div
                                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-transform duration-300 text-sm font-semibold ${
                                    idx < achievements.length
                                        ? 'border-yellow-500 text-yellow-400'
                                        : 'border-gray-500 text-gray-400 opacity-50'
                                } group-hover:scale-105`}
                            >
                                {idx < achievements.length ? (
                                    <span>🏆</span>
                                ) : (
                                    <span>🔒</span>
                                )}
                            </div>
                            {/* Nome da conquista e tooltip */}
                            <div className="text-xs font-bold text-gray-200 mt-2">
                                {idx < achievements.length
                                    ? `Conquista ${idx + 1}`
                                    : `Bloqueada`}
                            </div>
                            {idx < achievements.length && (
                                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-xs text-yellow-300 p-2 rounded-lg shadow-lg w-36 text-center">
                                    {achievements[idx]}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Conquista especial "Progresso Máximo!" */}
                {achievements.includes("Progresso Máximo!") && (
                    <div className="relative group flex flex-col items-center space-y-2 mt-8 animate-bounce">
                        <div className="w-16 h-16 rounded-full border-4 border-green-400 flex items-center justify-center text-green-400 text-lg font-semibold transition-transform duration-300 group-hover:scale-110 shadow-xl">
                            🏆
                        </div>
                        <div className="text-xs font-bold text-gray-200 mt-2">Progresso Máximo!</div>
                        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-xs text-green-300 p-3 rounded-lg shadow-xl w-40 text-center">
                            Todas as dificuldades concluídas com sucesso!
                        </div>
                    </div>
                )}

                {/* Botão para ver mais detalhes das conquistas */}
                <button
                    onClick={() => alert("Em breve: detalhes das conquistas!")}
                    className="mt-8 bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                >
                    Ver Detalhes das Conquistas
                </button>
            </div>
        </div>

        {/* Seleção de Tema (Banner e Skin) */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg mb-12">
            <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Escolher Tema do Cavaleiro</h2>
            <button 
                onClick={() => setThemeSelectionOpen(true)} 
                className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-transform duration-300 ease-out transform hover:scale-110 hover:bg-gradient-to-r focus:ring-4 focus:ring-yellow-300"
            >
                <span className="flex items-center space-x-2">
                    <span>⚔️</span>
                    <span>Escolher Tema</span>
                </span>
            </button>


            {isThemeSelectionOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
                <div className="bg-gray-900 rounded-lg p-6 w-full max-w-4xl text-white shadow-xl overflow-y-auto" style={{ maxHeight: '90vh' }}>
                    <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Selecione um Tema</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cavaleiros.map((cavaleiro) => (
                        <button
                        key={cavaleiro.name}
                        onClick={() => handleThemeChange(cavaleiro)}
                        className={`flex flex-col items-center p-3 rounded-lg transition-transform duration-200 transform hover:scale-105 ${selectedCavaleiro.name === cavaleiro.name ? 'bg-yellow-500 text-gray-900 shadow-lg' : 'bg-gray-800 text-yellow-300'}`}
                        >
                        <div
                            className="w-full h-32 mb-3 rounded-lg shadow-lg bg-cover bg-center"
                            style={{
                            backgroundImage: `url(${cavaleiro.banner})`,
                            backgroundPosition: 'center right',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                        <span className="text-lg font-bold">{cavaleiro.name}</span>
                        </button>
                    ))}
                    </div>

                    <button
                    onClick={() => setThemeSelectionOpen(false)}
                    className="mt-6 bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                    Fechar
                    </button>
                </div>
                </div>
            )}
        </div>

        {/* Botão de Logout */}
        <div className="text-center mt-10">
            <Link href="/login">
                <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300">
                Sair da Conta
                </button>
            </Link>
        </div>
      </div>
    </div>
  );
}
