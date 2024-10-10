// src/app/utils/favoriteCharacter.ts

// Função para salvar o personagem favorito no localStorage
export const saveFavoriteCharacter = (character: string) => {
    localStorage.setItem('favoriteCharacter', character);
  };
  
  // Função para obter o personagem favorito do localStorage
  export const getFavoriteCharacter = () => {
    return localStorage.getItem('favoriteCharacter');
  };
  