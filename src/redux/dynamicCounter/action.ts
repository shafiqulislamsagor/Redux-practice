import { DDECREMENT, DINCREMENT } from "./actionType"

export const increment = (value:number) =>{
    return {
        type: DINCREMENT,
        payload: value
    }
}
export const decrement = (value:number) =>{
    return {
        type: DDECREMENT,
        payload: value
    }
}