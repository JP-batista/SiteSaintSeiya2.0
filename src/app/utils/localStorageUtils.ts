// src/utils/localStorageUtils.ts

/**
 * Salva um valor no localStorage.
 * @param key - A chave para armazenar o valor.
 * @param value - O valor a ser armazenado.
 */
export const saveToLocalStorage = (key: string, value: any): void => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Erro ao salvar no localStorage: ${key}`, error);
      }
    }
  };
  
  /**
   * Carrega um valor do localStorage.
   * @param key - A chave do valor a ser carregado.
   * @param defaultValue - Um valor padrão caso nada seja encontrado.
   * @returns O valor armazenado ou o valor padrão.
   */
  export const loadFromLocalStorage = <T>(key: string, defaultValue: T): T => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : defaultValue;
      } catch (error) {
        console.error(`Erro ao carregar ${key} do localStorage`, error);
        return defaultValue;
      }
    }
    return defaultValue;
  };
  
  /**
   * Remove um valor do localStorage.
   * @param key - A chave do valor a ser removido.
   */
  export const removeFromLocalStorage = (key: string): void => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Erro ao remover ${key} do localStorage`, error);
      }
    }
  };
  