import todoStore from '../store/todo.store'
import html from './app.html?raw'
import { todo } from './models/todo.models'
import { renderTodos } from './uses-cases/render-todo'

//referencias
const elementID = {
    TodoList: '.todo-list',
}

export const App = (elementId)=>{

const displayTodo = ()=>{

    const todos = todoStore.getTodos(todoStore.setCurrentFilter())
   console.log(todos) 
    renderTodos(elementID.TodoList,todos)
}


(()=>{
    const app = document.createElement('div')
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodo()
})()



}