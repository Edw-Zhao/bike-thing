import { useState, useEffect } from 'react';
import BikeInput from './BikeInput';

const initialList = {
	id: 0,
	type: "",
	ageRange: ""
};

function Donate() {
	const [bikes, setBikes] = useState([initialList]);

	useEffect(() => console.log(bikes), [bikes]);

	const setBikeType = (bikeType, bikeIndex) => {
		const updateBikes = bikes.map((bike) => {
			if (bike.id == bikeIndex) {
				bike.type = bikeType;
			}

			return bike;
		});

		setBikes(updateBikes);
	}

	const addBikeForm = () => {
		const newBike = {
			id: bikes.length,
			type: "",
			ageRange: ""
		}

		setBikes([...bikes, newBike]);
	}

	return (
		<div className="bike-form-container donate-form-one">
			...
			<p className="input-title">Bike Info.</p>
			{bikes.map((bike, i) => (
				<div className="bike-input" key={i}>
					<BikeInput setBikeType={setBikeType} bikeIndex={bike.id} />
				</div>
			))}
			<button className="add-bike-btn" onClick={addBikeForm}>
				<i class="fa-solid fa-circle-plus"></i> Add A Bike
			</button>
			...
		</div>
	)
}

export default Donate
