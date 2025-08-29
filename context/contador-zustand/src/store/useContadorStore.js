import { create } from "zustand";
import { persist } from "zustand/middleware";

const handler = (set) => ({
  contador: 0,

  incrementarContador: () => set((state) => ({ contador: state.contador + 1 })),
  decrementarContador: () => set((state) => ({ contador: state.contador - 1 })),
  resetContador: () => set({ contador: 0 }),
});

export const useStore = create(persist(handler, { name: "counter" }));

export const useUserStore = create((set) => ({
  usuarios: [],

  cargarUsuarios: async () => {
    try {
      const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const datos = await respuesta.json();

      set({ usuarios: datos });
    } catch (error) {
      console.log(`No se pudo establecer conexión con los usuarios ${error}`);
    }
  },
}));
