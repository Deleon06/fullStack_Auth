import './App.css';
import {useState, useEffect} from 'react'
import { Route } from "react-router-dom"
import Home from "./views/Home/Home"
import SignUp from './views/SignUp/SignUp';
import SignIn from './views/SignIn/SignIn';
import {verify} from "./services/users"
import { getAllTodos } from './services/todos';
import NewTodo from './views/NewTodo/NewTodo';

function App() {
  const [user, setUser] = useState(null)
  const [todos, setTodos] = useState()

  useEffect(() => {
    const verifyUser = async () => {
      let data = await getAllTodos();
      setTodos(data)
   }
  }, [])
  return (
    <div className="App">
      {/* route for all todo's */}
      {/* single todo */}
      <Route path="/new-todo">
        <NewTodo setUser={setUser} user={user} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      {!user && (
        <>
      <Route path="/sign-in">
        <SignIn setUser={setUser} user={user}/>
      </Route>
      <Route path="/sign-up">
        <SignUp setUser={setUser} user={user}/>
      </Route>
        </>
      )}
    </div>
  );
}

export default App;
