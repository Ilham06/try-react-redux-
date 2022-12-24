import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from '../redux/todo/todoSlice';
import { useSelector } from 'react-redux';

export default function TodoList() {

  const [name, setName] = useState<string>('')
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todo);
  
  const submitHandler = () => {
    if (name) {
      dispatch(
        addTodo({
          id: nanoid(),
          name: name,
          status: 'todo',
        })
      );
      setName('');
    }
  };
  
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="input-group mb-3">
              
                <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="new task" aria-label="Recipient's username" aria-describedby="button-addon2" value={name} />
                <button onClick={() => submitHandler()} className="btn btn-outline-primary" type="button" id="button-addon2">Add Task</button>
              
            </div>
            <div className="card">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {
                    todos?.map((todo: any) => {
                      return (
                        <li key={todo.id} className="list-group-item text-start d-flex justify-content-between">
                          <div className="">
                            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                            <label className="form-check-label">{todo.name}</label>
                          </div>
                          <div className="action">
                            <button className="btn btn-sm btn-danger">Delete</button>
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
