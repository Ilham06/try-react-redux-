import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TodoType, TodoEditType } from '../../model';

const initialState: TodoType[] = [
  {
    id: '1',
    name: 'Try React Redux',
    status: false
  },
];

const todo = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.push(action.payload);
    },
    editTodoStatus: (state, action: PayloadAction<TodoEditType>) => {
      state[action.payload.index].status = action.payload.status
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter(todo => todo.id != action.payload)
    }
  },
});

export default todo.reducer;
export const { addTodo, editTodoStatus, deleteTodo } = todo.actions;
