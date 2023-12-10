import Todo from './TodoModel'

export default interface Todos {
    id: number;
    title: string;
    todos: Array<Todo>
}