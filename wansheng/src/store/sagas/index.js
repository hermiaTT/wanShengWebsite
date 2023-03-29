import {all} from 'redux-saga/effects';
import AIWatcher from './AI';

export default function* RootSagas(){
    yield all([
        AIWatcher()
    ])
}