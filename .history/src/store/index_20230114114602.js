import { reducer } from "./reducers"
import {numberAdd2} from "./actions/number"

const initialState = {
    other: "...",
    number: 0
}

export {
    reducer,
    initialState,
}