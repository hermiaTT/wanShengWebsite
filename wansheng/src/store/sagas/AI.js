import {select, put, takeLatest} from 'redux-saga/effects'
import { getOpenAIResponse } from '../../lib/api';

function*  getAIimg (action) {
  let prompt ="A virtual interior design with following requirement: ";
  action.value.forEach((element,id) => {
    if(element.value){
      let curSentence = `${id+1}: ${element.id} is ${element.value} `;
      prompt += curSentence;
    }
  });
    try {
      const response = yield getOpenAIResponse(prompt)
      yield put({
        type: "SET_AIIMG",
        aiImgs: response.data.data
      })  

    } catch (e) {
      //console.log(e);
      return("Something is going wrong, Please try again.");
    }
}

export default function* AIWatcher(){
    yield takeLatest('SUBMIT_DES',getAIimg)
}