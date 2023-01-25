import React from 'react'
import './DataTable.css'
import {useDispatch} from 'react-redux'
import {AsyncSetRoadCreator} from '../../store/roadReduser'

const tableData = [{
	id: 1,
	name: '№1',
	fromLat: 59.84660399,
	fromLng: 30.29496392,
	toLat: 59.82934196,
	toLng: 30.42423701,
}, {
	id: 2,
	name: '№2',
	fromLat: 59.82934196,
	fromLng: 30.42423701,
	toLat: 59.82761295,
	toLng: 30.41705607,
},{
	id: 3,
	name: '№3',
	fromLat: 59.83567701,
	fromLng: 30.38064206,
	toLat: 59.84660399,
	toLng: 30.29496392,
},{
	id: 4,
	name: '№4',
	fromLat: 59.84669399,
	fromLng: 30.29496392,
	toLat: 59.82761295,
	toLng: 30.41705607,
},{
	id: 5,
	name: '№5',
	fromLat: 59.83567701,
	fromLng: 30.38064206,
	toLat: 59.84660399,
	toLng: 30.29496392,
}
]

const DataTable = () =>{

	const dispatch = useDispatch()

	const setPoints = (id, block) => {
		const elemArr = [...document.getElementsByClassName('active')]
		if (elemArr.length){
			elemArr[0].classList.value = 'grid-wrapper row table-body'
		}
		block.classList.value = 'grid-wrapper row active'
		dispatch(AsyncSetRoadCreator(tableData.find(item => item.id === id)))
	}

	return (<div className={'data-wrapper'}>
		<div className={'table-wrapper'}>
			<div className={'grid-wrapper row table-header'}>
				<div className={'sell'}>Номер заявки</div>
				<div className={'sell'}>Координаты ОТ lat</div>
				<div className={'sell'}>Координаты ОТ lng</div>
				<div className={'sell'}>Координаты ДО lat</div>
				<div className={'sell'}>Координаты ДО lng</div>
			</div>
			{
				tableData.map(item =>{
					return <div
						className={ 'grid-wrapper row table-body'} key={item.id}
						onClick={(event) => setPoints(item.id, event.target.parentElement)}
					>
						<div className={'sell'}>{item.name}</div>
						<div className={'sell'}>{item.fromLat}</div>
						<div className={'sell'}>{item.fromLng}</div>
						<div className={'sell'}>{item.toLat}</div>
						<div className={'sell'}>{item.toLng}</div>
					</div>
				})
			}
		</div>


	</div>)
}
export default DataTable
