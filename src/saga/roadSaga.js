import {put, takeEvery} from 'redux-saga/effects'
import {ASYNC_SET_ROAD, SetPolylineCreator, SetRoadCreator} from '../store/roadReduser'
import {fetchRout} from '../fetch/fetchRoad.js'

function* setRoadWorker(params){
	const json = yield fetchRout(params.payload)
	yield put(SetRoadCreator(params.payload))
	yield put(SetPolylineCreator( json.routes[0].geometry.coordinates))
}

export function* setRoadWatcher(){
	yield takeEvery(ASYNC_SET_ROAD, setRoadWorker)
}

