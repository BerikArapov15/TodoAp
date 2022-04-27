import React from 'react';
import { Route, Routes} from 'react-router-dom';
import AddTodo from './components/AddTodo/AddTodo';
import EditTodo from './components/EditTodo/EditTodo';
import HomePage from './components/HomePage/HomePage';
import TodoList from './components/TodoList/TodoList';

const MainRoutes = () => {
    return (
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/add' element={<AddTodo/>} />
          <Route path='/todos' element={<TodoList/>} />
          <Route path='/edit' element={<EditTodo/>} />

          
      </Routes>
    );
};

export default MainRoutes;