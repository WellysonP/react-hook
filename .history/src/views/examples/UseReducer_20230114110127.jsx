import React, { useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'


function reducer(state = initialState, action) {
    switch (action.type) {
        case 'add2':
            return { ...state, number: state.number + 2 }
        case 'multi7':
            return { ...state, number: state.number * 7 }
        case 'div25':
            return { ...state, number: state.number / 25 }
        case 'int':
            return { ...state, number: parseInt(state.number) }
        case 'addN':
            return { ...state, number: state.number + action.payload }
        default:
            return state
    }
}

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
