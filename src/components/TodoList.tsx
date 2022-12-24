import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodoStatus } from '../redux/todo/todoSlice';
import { useSelector } from 'react-redux';
import { TodoType } from '../model';
import TodoAdd from './TodoAdd';

export default function TodoList() {

  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todo);

  const editHandler = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(
      editTodoStatus({
        index: index,
        status: event.target.checked,
      })
    );
  } 

  const deleteHandler = (id: string) => {
    dispatch(
      deleteTodo(id)
      );
    } 
  
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <TodoAdd/>
            <div className="card">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {
                    todos?.map((todo: TodoType, index: number) => {
                      return (
                        <li key={todo.id} className="list-group-item text-start d-flex justify-content-between">
                          <div className="">
                            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" onChange={(e) => editHandler(e, index)} />
                            <label style={{ textDecoration: todo.status ? 'line-through' : '' }} className="form-check-label">{todo.name}</label>
                          </div>
                          <div className="action">
                            <button onClick={(e) => deleteHandler(todo.id)} className="btn btn-sm btn-danger">Delete</button>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
