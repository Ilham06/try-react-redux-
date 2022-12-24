import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from '../redux/todo/todoSlice';

export default function TodoAdd() {

  const [name, setName] = useState<string>('')
  const dispatch = useDispatch();

  const submitHandler = () => {
    if (name) {
      dispatch(
        addTodo({
          id: nanoid(),
          name: name,
          status: false,
        })
      );
      setName('');
    }
  };

  return (
    <div className="input-group mb-3">
      <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="new task" aria-label="Recipient's username" aria-describedby="button-addon2" value={name} />
      <button onClick={() => submitHandler()} className="btn btn-outline-primary" type="button" id="button-addon2">Add Task</button>
    </div>
  )
}
