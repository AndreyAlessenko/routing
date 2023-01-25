const defaultState = {}

export const SET_ROAD = 'SET_ROAD'
export const SET_POLYLINE = 'SET_POLYLINE'
export const ASYNC_SET_ROAD = 'ASYNC_SET_ROAD'

export const roadReducer = (state = defaultState, action) => {
	switch (action.type){
		case SET_ROAD:
			return {...state, activeRoad: {...state.activeRoad, ...action.payload}}
		case SET_POLYLINE:
			return {...state, polyline: [...action.payload]}
		default:
			return state
	}
}

export const SetRoadCreator = (payload) => ({type: SET_ROAD, payload})
export const SetPolylineCreator = (payload) => ({type: SET_POLYLINE, payload})
export const AsyncSetRoadCreator = (payload) => ({type: ASYNC_SET_ROAD,payload})
