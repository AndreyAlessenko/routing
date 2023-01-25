import {all} from 'redux-saga/effects'
import {setRoadWatcher} from './roadSaga'

export function* rootWatcher(){
	yield all([setRoadWatcher()])
}
