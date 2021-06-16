import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../utils';
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';

const {PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR} = colors;

import {
	Container,
	Row,
	AlterRow,
	Detail,
	AlterDetail,
	DetailItems,
	TextSecondary,
} from './styles';

export default function WeatherDetails({currentWeather, unitsSystem}: any) {
	const {
		main: {feels_like, humidity, pressure},
		wind: {speed},
	} = currentWeather;

	const windSpeed =
		unitsSystem === 'metric'
			? `${Math.round(speed)} m/s`
			: `${Math.round(speed)} miles/h`;

	return (
		<Container>
			<Row>
				<AlterDetail>
					<Row>
						<FontAwesome5
							name="temperature-low"
							size={25}
							color={PRIMARY_COLOR}
						/>
						<DetailItems>
							<Text>Feels like :</Text>
							<TextSecondary>{feels_like} °</TextSecondary>
						</DetailItems>
					</Row>
				</AlterDetail>
				<Detail>
					<Row>
						<MaterialCommunityIcons
							name="water"
							size={30}
							color={PRIMARY_COLOR}
						/>
						<DetailItems>
							<Text>Humidity :</Text>
							<TextSecondary>{humidity} %</TextSecondary>
						</DetailItems>
					</Row>
				</Detail>
			</Row>
			<AlterRow>
				<AlterDetail>
					<Row>
						<MaterialCommunityIcons
							name="weather-windy"
							size={30}
							color={PRIMARY_COLOR}
						/>
						<DetailItems>
							<Text>Wind Speed :</Text>
							<TextSecondary>{windSpeed}</TextSecondary>
						</DetailItems>
					</Row>
				</AlterDetail>
				<Detail>
					<Row>
						<MaterialCommunityIcons
							name="speedometer"
							size={30}
							color={PRIMARY_COLOR}
						/>
						<DetailItems>
							<Text>Pressure :</Text>
							<TextSecondary>{pressure} hPa</TextSecondary>
						</DetailItems>
					</Row>
				</Detail>
			</AlterRow>
		</Container>
	);
}
