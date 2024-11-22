// src/utils/localStorageUtils.ts

export const salvarToLocalStorage = (key: string, value: any): void => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Erro ao salvar no localStorage: ${key}`, error);
    }
  }
};

export const carregarFromLocalStorage = <T>(key: string, defaultValue: T): T => {
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

export const removerFromLocalStorage = (key: string): void => {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Erro ao remover ${key} do localStorage`, error);
    }
  }
};
