import { useState ,useEffect} from "react"
import englishQuizData from "../dummy"
import { useDispatch } from 'react-redux';
import * as Action from '../redux/questionReducer'

export const useFetchQuestions=()=>{
    const dispach=useDispatch()
    const [getData, setGetData] = useState({isLoading:false, apiData:[],serverError:null})
    useEffect(() => {
        setGetData(prev=>({...prev,isLoading:true}));
        (async () =>{
            try{
                let questions = await englishQuizData;
                if(questions.length>0){
                    setGetData(prev=>({...prev,isLoading:false}));
                    setGetData(prev=>({...prev,apiData:questions}));
                    
                    dispach(Action.startExamAction(questions))
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