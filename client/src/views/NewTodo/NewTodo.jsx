import React from 'react'
import Layout from '../../components/Layout/Layout'
import { createTodo } from '../../services/todos'
import {useHistory} from 'react-router'

export default function NewTodo(props) {
  const [input, setInput] = setState({ name: "", due_date: "", complete: "" })
  const history = useHistory()
   
  const handleChange = (e) => {
    const { id, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTodo(input)
    history.push('/')
  }
  return (
    <div>
      <Layout user={props.user} setUser={props.setUser}>
        <div>
          New Todo
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input id="name" value={input.name} onChange={handleChange} />
            <label>Due Data</label>
            <input id="due_date" value={input.due_date} onChange={handleChange} />
            <label>Complete</label>
            <input id="complete" value={input.complete} onChange={handleChange} />
          </form>
        </div>
      </Layout>
    </div>
  )
}
