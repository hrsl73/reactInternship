import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeTodo,updateTodo} from '../features/todo/todoSlice'

function Todos() {

    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch()

return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Todos
        </h2>

        <ul className="space-y-3">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-200 transition"
                >
                    {/* Left side - Text */}
                    <span className="text-gray-700 font-medium">
                        {todo.text}
                    </span>

                    {/* Right side - Buttons grouped */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => {
                                const newText = prompt("Enter updated text:", todo.text)
                                if (newText && newText.trim()) {
                                    dispatch(updateTodo({
                                        id: todo.id,
                                        text: newText
                                    }))
                                }
                            }}
                            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                        >
                            Modify
                        </button>

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200"
                        >
                            X
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
)
}

export default Todos
