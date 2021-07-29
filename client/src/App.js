import './App.css';
import {useState, useEffect} from 'react'
import { Route } from "react-router-dom"
import Home from "./views/Home/Home"
import SignUp from './views/SignUp/SignUp';
import SignIn from './views/SignIn/SignIn';
import {verify} from "./services/users"
import NewTodo from './views/NewTodo/NewTodo';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const verifyUser = async () => {
     setUser(await verify())
    }
    verifyUser()
  }, [])
  return (
    <div className="App">
      <Route exact path="/">
        <Home user={user} setUser={setUser}/>
      </Route>
      {/* route for all todo's */}
      {/* single todo */}
      {user && (
        <Route path="/new-todo">
          <NewTodo setUser={setUser} user={user} />
        </Route>
      )}
    
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
