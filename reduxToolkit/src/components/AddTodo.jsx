import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo({ text: input }))
        setInput('')
    }

return (
    <form 
        onSubmit={addTodoHandler} 
        className="max-w-md mx-auto rounded-2xl p-3 mt-6 flex gap-3 bg-white"
    >
        <input
            type="text"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 
                        focus:outline-none focus:ring-2 focus:ring-indigo-400 
                        focus:border-indigo-400 transition"
        />

        <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
        >
            Add
        </button>
    </form>
)
}

export default AddTodo