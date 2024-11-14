import { useState, useEffect } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        fetch('/todo.json')
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error('Error loading todos:', error));
    }, []);

    const addTodo = () => {
        if (!newTodo.trim()) return;
        const newItem = {
            id: Date.now(),
            text: newTodo,
            completed: false
        };
        setTodos([...todos, newItem]);
        setNewTodo('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 bg-white rounded shadow">
            <div className="flex gap-2 mb-4">
                <input
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="할 일을 입력하세요"
                    className="flex-1 px-3 py-2 border rounded"
                />
                <button
                    onClick={addTodo}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    추가
                </button>
            </div>

            <div className="space-y-2">
                {todos.map(todo => (
                    <div key={todo.id} className="flex items-center gap-2 p-2 border rounded">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span className={todo.completed ? 'flex-1 line-through text-gray-500' : 'flex-1'}>
              {todo.text}
            </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="p-1 text-red-500 hover:text-red-700"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;