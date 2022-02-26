import {createSlice, nanoid} from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: [
    {id: nanoid(), description: 'Entender o React Native', completed: true},
    {id: nanoid(), description: 'Registrar-se no MongoDB', completed: true},
    {id: nanoid(), description: 'Criar o Banco de Dados', completed: true},
    {id: nanoid(), description: 'Criar as Models da Api', completed: false},
    {id: nanoid(), description: 'Fazer Controllers da Api', completed: false},
    {id: nanoid(), description: 'Fazer Middlewares da Api', completed: false},
    {id: nanoid(), description: 'Criar as rotas da API', completed: false},
    {id: nanoid(), description: 'Fazer o Layout do App', completed: false},
    {id: nanoid(), description: 'Programar o App', completed: false},
    {id: nanoid(), description: 'Conectar com Redux', completed: false},
    {id: nanoid(), description: 'Inserir Ícone no App', completed: false},
    {id: nanoid(), description: 'Testar a Aplicação', completed: false},
    {
      id: nanoid(),
      description: 'Inserir na Loja de Aplicativos',
      completed: false,
    },
  ],
  reducers: {
    addItem: (state, action) => {
      const {payload: description} = action;

      state.push({id: nanoid(), description, completed: false});
    },
    toggleCompleted: (state, action) => {
      const {payload: id} = action;

      return state.map(item => {
        return item.id === id ? {...item, completed: !item.completed} : item;
      });
    },
    deleteItem: (state, action) => {
      const {payload: id} = action;

      return state.filter(item => item.id !== id);
    },
  },
});

export const {addItem, toggleCompleted, deleteItem} = listSlice.actions;

export default listSlice.reducer;
