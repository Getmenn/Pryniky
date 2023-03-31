import { IStateData, ITableData, actions, loadTypes } from "../types/dats"


const defaultState: IStateData = {
    data: [],
}

export const mainReducer = (state = defaultState, action: actions ): IStateData =>{  //переделать
    switch (action.type) {
        case loadTypes.SET_DATA:
            return { ...state, data: [...action.payload] }
        case loadTypes.ADD_ROW:
            return { ...state, data: [...state.data, action.payload] }
        case loadTypes.DELETE_ROW:          
            return { ...state, data: [...state.data.filter(el => el.id !== action.payload)] }
        case loadTypes.CLEAN_DATA:
            return {...state, data: []}
        default:
            return state
    }
}

export const setData = (payload: ITableData[]) => ({ type: loadTypes.SET_DATA, payload }) 
export const addRow = (payload: ITableData) => ({ type: loadTypes.ADD_ROW, payload }) 
export const deleteRow = (payload: string) => ({ type: loadTypes.DELETE_ROW, payload }) 
export const cleanData = () => ({type: loadTypes.CLEAN_DATA}) 
