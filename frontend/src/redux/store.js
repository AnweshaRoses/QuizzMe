import {combineReducers, configureStore} from '@reduxjs/toolkit'
import  questionReducer  from './questionReducer'
import  resultReducer  from './resultReducer'
import languageReducer from './languageReducer'
const rootReducer=combineReducers({
    questions:questionReducer,
    result:resultReducer,
    language: languageReducer,
})

export default configureStore({reducer:rootReducer})