export default function TodoCount(props) {
    return (
        <div className="todo-count">
            Total Todos: {props.todos.length}
        </div>
    );
}