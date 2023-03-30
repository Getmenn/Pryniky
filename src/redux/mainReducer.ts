import { IBook, IStateBooks, loadTypes, onTablePackAction } from '../types/dats'

const defaultState: IStateBooks = {
    books: [],
    total: 0
}

export const mainReducer = (state = defaultState, action: onTablePackAction ): IStateBooks =>{  //переделать
    switch (action.type) {
        case loadTypes.NEW_BOOKS:
            return { ...state, books: [...action.payload] }
        case loadTypes.ADD_BOOKS:
            return { ...state, books: [...state.books, ...action.payload] }
        case loadTypes.LOAD_TOTAL:
            return {...state, total: action.payload}
        default:
            return state
    }
}

export const newBooks = (payload: IBook[]) => ({ type: loadTypes.NEW_BOOKS, payload }) 
export const addBooks = (payload: IBook[]) => ({ type: loadTypes.ADD_BOOKS, payload }) 
export const loadTotal = (payload: number) => ({type: loadTypes.LOAD_TOTAL, payload}) 
