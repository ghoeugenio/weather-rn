import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../../utils';

const {PRIMARY_COLOR, SECONDARY_COLOR} = colors;

import {
	Container,
	Icon,
	Description,
	PrimaryText,
	SecondaryText,
} from './styles';

export default function WeatherInfo({currentWeather}: any) {
	const {
		main: {temp},
		weather: [details],
		name,
	} = currentWeather;
	const {icon, main, description} = details;

	const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

	return (
		<Container>
			<Text>{name}</Text>
			<Icon source={{uri: iconUrl}} />
			<PrimaryText>{temp}°</PrimaryText>
			<Description>{description}</Description>
			<SecondaryText>{main}</SecondaryText>
		</Container>
	);
}
