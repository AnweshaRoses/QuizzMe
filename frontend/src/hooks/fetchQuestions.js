import { useState ,useEffect} from "react"
import englishQuizData,{answers} from "../dummy"
import { useDispatch } from 'react-redux';
import * as Action from '../redux/questionReducer'

export const useFetchQuestions=()=>{
    const dispach=useDispatch()
    const [getData, setGetData] = useState({isLoading:false, apiData:[],serverError:null})
    useEffect(() => {
        setGetData(prev=>({...prev,isLoading:true}));
        (async () =>{
            try{
                let question = await englishQuizData;
                if(question.length>0){
                    setGetData(prev=>({...prev,isLoading:false}));
                    setGetData(prev=>({...prev,apiData:{question,answers}}));
                    
                    dispach(Action.startExamAction({question,answers}))
                }else{
                    throw new Error("No Question Available")
                }
            }catch(error){
                setGetData(prev=>({...prev,isLoading:false}));
                setGetData(prev=>({...prev,serverError:error}));
            }
        })();
      
    },[dispach]);
    return[getData,setGetData]
    
}
// Move action Dispatch Function

export const MoveNextQuestion = () => async (dispach) => {
    try {
        dispach(Action.moveNextAction()); /** increase trace by 1 */
    } catch (error) {
        console.log(error)
    }
}
export const MovePrevQuestion = () => async (dispach) => {
    try {
        dispach(Action.movePrevAction()); /** decrease trace by 1 */
    } catch (error) {
        console.log(error)
    }
}

