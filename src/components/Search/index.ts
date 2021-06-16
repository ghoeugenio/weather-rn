interface Search {
	city?: string;
	latitude?: number;
	longitude?: number;
	unitsSystem?: string;
}

export const search = async (props: Search) => {
	const BASE_WEATHER_URL =
		'https://api.openweathermap.org/data/2.5/weather?';
	const WEATHER_API_KEY = '6a442e8aaca3a58fad45e324bf00a93e';

	let resultSearch = undefined;
	let cityProps = undefined;
	let weatherUrl = '';

	if (props.city) {
		weatherUrl = `${BASE_WEATHER_URL}q=${props.city}&units=${props.unitsSystem}&appid=${WEATHER_API_KEY}`;
		const response = await fetch(weatherUrl);

		const result = await response.json();
		if (response.ok) {
			resultSearch = result;
			cityProps = await findByName(props.city);
		}
	}

	if (props.latitude && props.longitude) {
		weatherUrl = `${BASE_WEATHER_URL}lat=${props.latitude}&lon=${props.longitude}&units=${props.unitsSystem}&appid=${WEATHER_API_KEY}`;

		const response = await fetch(weatherUrl);

		const result = await response.json();
		if (response.ok) {
			resultSearch = result;
			cityProps = await findByLatLng(props.latitude, props.longitude);
		}
	}

	return {resultSearch, cityProps};
};

const findByName = async (citySearch: string) => {
	const response = await fetch(
		`https://api.opencagedata.com/geocode/v1/json?q=${citySearch}&key=b904e147307640f58306cf9b69e624bf`
	);
	const result = await response.json();
	const {
		results: [
			{
				components: {state_code, country, town, city},
			},
		],
	} = result;
	const cityByName = {
		city: !!city ? city : town,
		state: state_code,
		country: country,
	};

	if (!country || !state_code) {
		return;
	}

	return cityByName;
};

const findByLatLng = async (latitude: number, longitude: number) => {
	const response = await fetch(
		`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=b904e147307640f58306cf9b69e624bf`
	);
	const result = await response.json();
	const {
		results: [
			{
				components: {state_code, country, town, city},
			},
		],
	} = result;
	const cityByLatLng = {
		city: !!town ? town : city,
		state: state_code,
		country: country,
	};

	if (!country || !state_code) {
		return;
	}

	return cityByLatLng;
};
