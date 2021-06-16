import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Text, Alert, ActivityIndicator} from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from '../../components/WeatherInfo';
import UnitsPicker from '../../components/UnitsPicker';
import ReloadIcon from '../../components/ReloadIcons';
import WeatherDetails from '../../components/WeatherDetails';
import {colors} from '../../utils';
import {search} from '../../components/Search';
import {useAppDispatch} from '../../hooks/hooks';
import {recentSearchActions} from '../../store/recentSearch';

interface IWeather {
	children?: React.ReactNode;
	currentLocation?: boolean;
	city?: string;
}

import {Container, BoxMain} from './styles';

const WeatherScreen: React.FunctionComponent = ({route, navigation}: any) => {
	const [errorMessage, setErrorMessage] = useState<string>('');
	const [currentWeather, setCurrentWeather] = useState<Object>();
	const [unitsSystem, setUnitsSystem] = useState('metric');
	const [error, setError] = useState<boolean>(false);

	const {city, currentLocation} = route.params;
	const dispatch = useAppDispatch();

	useEffect(() => {
		load();
	}, [unitsSystem, route]);

	useEffect(() => {
		if (error) {
			navigation.goBack('Home');
			return;
		}
	}, [error]);

	async function load() {
		setCurrentWeather(undefined);
		setErrorMessage('');
		setError(false);
		if (currentLocation) {
			try {
				const location = await Location.getCurrentPositionAsync();

				const {latitude, longitude} = location.coords;

				const result = await search({
					latitude: latitude,
					longitude: longitude,
					unitsSystem: unitsSystem,
				});

				if (!result.resultSearch) {
					Alert.alert('Erro ao localizar!');
					setError(true);
					return;
				}
				setCurrentWeather(result.resultSearch);
				dispatch(
					recentSearchActions.setRecentSearch(result.cityProps)
				);
			} catch (error: any) {
				setErrorMessage(error.message);
				Alert.alert('Erro ao localizar!');
			}
		}
		if (city) {
			try {
				const result = await search({
					city: city,
					unitsSystem: unitsSystem,
				});

				if (!result.resultSearch) {
					Alert.alert('Cidade não localizada!');
					setError(true);
					return;
				}
				setCurrentWeather(result.resultSearch);
				dispatch(
					recentSearchActions.setRecentSearch(result.cityProps)
				);
			} catch (error: any) {
				setErrorMessage(error.message);
			}
		}
	}
	if (currentWeather) {
		return (
			<Container>
				<StatusBar style="auto" />
				<BoxMain>
					<UnitsPicker
						unitsSystem={unitsSystem}
						setUnitsSystem={setUnitsSystem}
					/>
					<ReloadIcon load={load} />
					<WeatherInfo currentWeather={currentWeather} />
				</BoxMain>
				<WeatherDetails
					currentWeather={currentWeather}
					unitsSystem={unitsSystem}
				/>
			</Container>
		);
	} else if (errorMessage) {
		return (
			<Container>
				<ReloadIcon load={load} />
				<Text style={{textAlign: 'center'}}>{errorMessage}</Text>
				<StatusBar style="auto" />
			</Container>
		);
	} else {
		return (
			<Container>
				<ActivityIndicator
					size="large"
					color={colors.PRIMARY_COLOR}
				/>
				<StatusBar style="auto" />
			</Container>
		);
	}
};

export default WeatherScreen;
