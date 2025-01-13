import { todo } from "../todos/models/todo.models";



const Filters = {
    All:'all',
    Completed:'completed',
    pending:'pending'
}

const state = {
todos:[
new todo('tiempo'),
new todo('espacio'),
new todo('realidad'),
new todo('alma'),
new todo('mente'),
new todo('poder'),

],filter:Filters.All
}

const intStore=()=>{}

const getTodos=(filter = Filters.All)=>{
switch (filter) {
    case Filters.All:
        return [...state.todos]
        break;
    case Filters.Completed:
        state.todos.filter(todo => todo.done)
        
    case Filters.pending:
        state.todos.filter(todo => !todo.done)

    default:throw new Error(`option ${filter} is no  valid`);
    
        break;
}


}
const loadStore=()=>{}

const setFilter=(newFilter = Filters.All)=>{

state.filter = newFilter

}

const addTodos=(description)=>{
if(!description)throw new Error("description neeeded");
state.todos.push( new todo (description))


}
const setCurrentFilter=()=>{
    return state.filter
}


const toggleTodos=(todoId)=>{
state.todos = state.todos.map(todo => {
if(todo.id === todoId){ todo.done = !todo.done}
return todo 
})


}


const deleteTodos=(todoId)=>{
state.todos = state.todos.filter(todo=>todo.id !== todoId)

}
const deleteComplete=()=>{
    state.todos = state.todos.filter(todo=>!todo.done)
}




export default{
    intStore,
    loadStore,
    getTodos,
    setFilter,
    setCurrentFilter,
    toggleTodos,
    deleteTodos,
    deleteComplete,
    addTodos,


}