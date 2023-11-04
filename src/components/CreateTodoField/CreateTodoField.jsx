import { useState } from "react"
import { HiPlus } from 'react-icons/hi'

const CreateTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState('')

    const addTodo = title => {
        setTodos(prev => [
            {
                _id: new Date(),
                title,
                isCompleted: false
            },
            ...prev
        ])
        setTitle('')
    }

    

  return (
    <div className="flex gap-5 items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-4 mt-20 w-full">
        <button className="rounded-lg bg-pink-400 w-6 h-6 flex items-center justify-center" onClick={() => addTodo(title)}>
            <HiPlus />
        </button>
        <input type="text" className="bg-transparent outline-none w-full border-none" placeholder="Add a task" onChange={e => setTitle(e.target.value)} value={title} onKeyPress={e => e.key === 'Enter' && addTodo(title)} />
    </div>
  )
}

export default CreateTodoField