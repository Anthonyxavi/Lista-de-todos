import todoStore from "../../store/todo.store";
import { todo } from "../models/todo.models";






export const createNewHTML = (todo)=>{
    const {done,description,id} = todo
    if(!todo) throw new Error("todo required")

        const html = 
        `<div class="view" >
                    <input class="toggle" type="checkbox" ${done?'checked':''}>
                    <label>${description}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">`;
        const LIelement = document.createElement('li')
        LIelement.innerHTML = html
        LIelement.setAttribute('data-id',id)
        if (todo.done) LIelement.classList.add('comleted');
        return LIelement
    
}