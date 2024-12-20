import React, { useReducer } from 'react'


const reducer = (state, action) =>{
    switch (action.type){
        case "INCREMENT" :
            return { count : state.count +1};
        case "DECREMENT" :
            return { count : state.count -1};
        case "RESET" :
            return {count : 0};
        default :
            throw new Error("Unknown action type")
    }
}
const initialState = {
    count :0
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
        <div>
            <h1>count : {state.count}</h1>
            <button onClick={() => dispatch({type :"INCREMENT"})}>Increment</button>
            <button onClick={() => dispatch({type :"DECREMENT"})}>Decrement</button>
            <button onClick={() => dispatch({type :"RESET"})}>Reset</button>
        </div>
    </React.Fragment>
  )
}

export default Counter