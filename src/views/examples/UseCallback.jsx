import React, { useCallback, useState } from 'react'
import UseCallBackButtons from './UseCallbackButtons'
import PageTitle from '../../components/layout/PageTitle'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const inc = useCallback(function inc(delta) {
        setCount(curr =>curr + delta)
    },[setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallBackButtons inc={inc}/>
            </div>
        </div>
    )
}

export default UseCallback
