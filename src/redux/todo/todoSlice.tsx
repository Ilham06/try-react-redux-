import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TodoType {
  id: string
  name: string
  status: string
}

const initialState: TodoType[] = [
  {
    id: '1',
    name: 'Try React Redux',
    status: 'in progress'
  },
];

const todo = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.push(action.payload);
    }
  },
});

export default todo.reducer;
export const { addTodo } = todo.actions;
