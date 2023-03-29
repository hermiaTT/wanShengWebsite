import {select, put, takeLatest} from 'redux-saga/effects'
import { getOpenAIResponse } from '../../lib/api';

function*  getAIimg (action) {
    try {
      const response = yield getOpenAIResponse(action.value)
      yield put({
        type: "SET_AIIMG",
        aiImg: response.data.data[0].url
      })  

    } catch (e) {
      //console.log(e);
      return("Something is going wrong, Please try again.");
    }
}

export default function* AIWatcher(){
    yield takeLatest('UPDATE_DES',getAIimg)
}