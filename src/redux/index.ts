import { legacy_createStore as createStore, combineReducers} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { mainReducer } from "./mainReducer"

const rootReduser = combineReducers({
    main: mainReducer,
})

export type RootState = ReturnType<typeof rootReduser>

export const store = createStore(rootReduser, composeWithDevTools())