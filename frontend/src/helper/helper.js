import axios from 'axios'

export function attempts_Number(result){
    return result.filter(r=>r!==undefined).length;
}
export function earnPoints_Number(result, answers, point){
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}
export function flagResult(totalpoints, earnpoints){
    return((earnpoints/totalpoints)*100 );
}
// Get data from backend

export async function getServerData(url, callback){
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}
export async function postServerData(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}

