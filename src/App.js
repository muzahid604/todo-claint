import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Headers from './Components/Headers';
import RequireAuth from './Components/RequireAuth';
import AddTask from './Components/AddTask';
import Calendar from './Components/Calendar';
import Complete from './Components/Complete';

function App() {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path='/' element={
          <Home />
        }></Route>
        <Route path='/addtask' element={
          <RequireAuth>
            <AddTask />
          </RequireAuth>
        }></Route>
        <Route path='/completed' element={
          <RequireAuth>
            <Complete />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/calendar' element={<Calendar />}></Route>
        <Route path='/addtask' element={<AddTask />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
