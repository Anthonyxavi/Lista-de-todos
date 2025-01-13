import { createNewHTML } from "./createTodosHTML"
import { todo } from "../models/todo.models"




let element

export const renderTodos = (elementId,todo =[]
)=>{
    if (!element) element = document.querySelector(elementId) 
        if (!element) throw new Error("no found");
    element.innerHTML = '';
    
    todo.forEach(todo => element.createNewHTML(todo))

}