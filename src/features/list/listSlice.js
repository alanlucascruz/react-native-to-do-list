import { createSlice, nanoid } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: 'list',
  initialState: [
    { id: nanoid(), description: "Estudar React Native", completed: true },
    { id: nanoid(), description: "Projetar um Aplicativo", completed: true },
    { id: nanoid(), description: "Analisar a Base de Dados", completed: true },
    { id: nanoid(), description: "Desenvolver a Api", completed: false },
    { id: nanoid(), description: "Desenvolver o App", completed: false },
    { id: nanoid(), description: "Testar a Aplicação", completed: false },
    { id: nanoid(), description: "Inserir na Loja de Aplicativos", completed: false },
  ],
  reducers: {
    addItem: (state, action) => {
      const { payload: description } = action;

      state.push({ id: nanoid(), description, completed: false });
    },
    toggleCompleted: (state, action) => {
      const { payload: id } = action;

      return state.map(item => {
        return item.id === id ? { ...item, completed: !item.completed } : item
      });
    },
    deleteItem: (state, action) => {
      const { payload: id } = action;

      return state.filter(item => item.id !== id);
    }
  }
});

export const { addItem, toggleCompleted, deleteItem } = listSlice.actions;

export default listSlice.reducer;