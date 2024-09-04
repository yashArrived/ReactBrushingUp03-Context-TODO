import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
        id:1,
        todo : "Learn React",
        completed : false}
        // },{
        // id:2,
        // todo : "Learn Vue",

        // },{
        // id:3,
        // todo : "Go to Gym",
        // }
        // {
        //     id:4,
        //     todo : "Shopping",
        //     },
        
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{},
});


export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;