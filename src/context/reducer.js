export const initialState = {
    todos : 
    [],
};




const reducer = (state ,action) => {
    console.log(action)

    switch(action.type){
        case "ADD_TODO":
            
        return {
            ...state,
            todos: [action.payload, ...state.todos],//eklenen statelei tut ve arkasına her serefınde yaz 
        };

        default:
            return {
                ...state,
            };
    }

};

export default reducer;