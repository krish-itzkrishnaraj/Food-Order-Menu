
import React, { useReducer } from 'react';

const reducer = (state, action)=>{
      switch(action.type){
         case "INCREMENT":
         return {count: state.count+1, showText:state.showText, showTexttwo: state.showTexttwo}
         case "DECREMENT":
         return {count: state.count-1, showText:state.showText,showTexttwo: state.showTexttwo}
         case "TOGGLEONE":
         return {count:state.count, showText: !state.showText,showTexttwo: state.showTexttwo}
         case "TOGGLETWO":
            return {count:state.count, showText: state.showText, showTexttwo: !state.showTexttwo}
         default:
         return state;
      }
}

function Management() {
    const [state, dispatch] = useReducer(reducer, {count:0, showText: false, showTexttwo: false})
  return (
    <div>
        <h1>Usereducer Page</h1>
        <hr/>
         <h1>{state.count}</h1>
         <h1>{state.showText && "ONE"}</h1>
         <h1>{state.showTexttwo && "TWO"}</h1>
         <button onClick={()=>{dispatch({type:"INCREMENT"})}}>+</button>
         <button onClick={()=>{dispatch({type:"DECREMENT"})}}>-</button>
         <button onClick={()=>{dispatch({type:"TOGGLEONE"})}}>Show/Hide</button>
         <button onClick={()=>{dispatch({type:"TOGGLETWO"})}}>Show/Hide</button>

    </div>
  )
}

export default Management