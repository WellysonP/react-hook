import React, { useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'


const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!" />
            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                    onClick={()=> dispatch({type: 'add2'})}>+2</button>
                    <button className="btn"
                    onClick={()=> dispatch({type: 'multi7'})}>*7</button>
                    <button className="btn"
                    onClick={()=> dispatch({type: 'div25'})}>/25</button>
                    <button className="btn"
                    onClick={()=> dispatch({type: 'int'})}>int</button>
                    <button className="btn"
                    onClick={()=> dispatch({type: 'addN', payload:-9})}>add-9</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
