export default function TodoList(props) {
    return (
        <ul className="todo-list">
            {props.todos.map((todo) => (
                <li key={todo}>{todo}</li>
            ))}
        </ul>
    );
}