
export const fetchRout = ({fromLat, fromLng, toLat, toLng}) => {
	return fetch(
		`http://router.project-osrm.org/route/v1/driving/${fromLng},${fromLat};${toLng},${toLat}?steps=true&geometries=geojson&overview=full`
	).then((r) => r.json());
}
