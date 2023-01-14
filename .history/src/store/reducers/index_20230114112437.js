export default function reducer(state = initialState, action) {
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