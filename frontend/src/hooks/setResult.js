import * as Action from '../redux/resultReducer'

export const PushAns=(result)=>async(dispatch)=>{
    try{
        await dispatch(Action.pushResultAction(result))
    }catch(error){
        console.log(error);
    }
}

export const updateResult=(index)=>async (dispach)=>{
    try{
        dispach(Action.updateResultAction(index))
    }catch(error){
        console.log(error);
    }
}