import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'
import { addN, div25, int, multi7, numberAdd2 } from '../../store/actions/number'


const UseReducer = (props) => {
    const [state] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!" />
            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => numberAdd2(dispatch
                        )}>+2</button>
                    <button className="btn"
                        onClick={() => multi7}>*7</button>
                    <button className="btn"
                        onClick={() => div25}>/25</button>
                    <button className="btn"
                        onClick={() => int}>int</button>
                    <button className="btn"
                        onClick={() => addN}>add-9</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
