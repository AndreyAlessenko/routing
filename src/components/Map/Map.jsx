import React from 'react'
import './Map.css'
import {useSelector} from 'react-redux'
import { MapContainer, TileLayer, Marker, useMapEvents, Polyline, Popup} from 'react-leaflet'

const defaultPosition = [59.987074, 30.179847]

const Map = () =>{

	const activeRoad = useSelector(state => state.roadReducer.activeRoad)
	const polyline = useSelector(state => state.roadReducer.polyline)

	const routing = polyline && polyline.map(arr => {
		return [arr[1], arr[0]]
	})

	const getMarkers = (points) => {
		return points ? [[points.fromLat, points.fromLng], [points.toLat, points.toLng]] : []
	}

	const points = getMarkers(activeRoad)
	const getCenter = (points) =>{
		return points.length === 2 ? [(points[0][0] + points[1][0])/2, (points[0][1] + points[1][1])/2] : defaultPosition
	}

	const getCoef = (points) =>{
		if(!points || points.length === 1){
			return 15
		}
		else if(points.length === 2){
			const x = (Math.sqrt((points[0][0] - points[1][0]) * (points[0][0] - points[1][0]) + (points[0][1] - points[1][1]) * (points[0][1] - points[1][1]))).toFixed(3) * 100
			if(x > 8) {
				return 13
			}else{
				return (17.2 - 0.32 * x).toFixed(0)
			}
		}
	}

	return (<div className={'map-wrapper'}>
		<MapContainer center={getCenter(points)} zoom={15} scrollWheelZoom={false} className="h-screen">
			<TileLayer
				attribution='&copy; Taxmap'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			{routing ?
				<Polyline color={"blue"} opacity={0.7} weight={6} positions={routing}>
					<Popup>Polygon</Popup>
				</Polyline>
			:
			null}

			{points.length > 0 ? points.map((item,idx) => {
				return (<Marker key={idx}  position={item}></Marker>)
			})
			:
			null}

			<MyComponent center={getCenter(points)} coef={getCoef(points)} />
		</MapContainer>
	</div>)
}

function MyComponent({center, coef}) {
	const map = useMapEvents({})
	map.flyTo(center, coef, {animate:true})
}


export default Map
