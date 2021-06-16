import React, {useEffect, useState} from 'react';
import * as Location from 'expo-location';
import {Text, Alert} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {colors} from '../../utils';
import {useAppSelector} from '../../hooks/hooks';
import {StackNavigationProp} from '@react-navigation/stack';

type ParamList = {
	SearchScreen: undefined;
	WeatherScreen: undefined;
};

interface ISearchProps {
	navigation: StackNavigationProp<any, any>;
}

import {
	Container,
	Input,
	Title,
	ListButtons,
	ButtonAction,
	TextButton,
	SecundaryTitle,
	ListRecentsSearch,
	BackgroundRecentSearch,
	RecentSearch,
	InfoRecentSearch,
	PrimaryRecentSearch,
	SecondaryRecentSearch,
} from './styles';

const SearchScreen: any = ({navigation}: any) => {
	const [city, setCity] = useState<string>('');
	const recentSearch = useAppSelector((state) => state.recentSearch.recent);

	useEffect(() => {
		getPermission();
	}, [navigation]);

	const getPermission = async () => {
		let {status} = await Location.requestForegroundPermissionsAsync();

		if (status !== 'granted') {
			Alert.alert('Access to location is needed to run the app');
			return;
		}
	};

	const currentLocationHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();

		navigation.navigate('Home', {currentLocation: true});
	};

	const submitHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (city.length < 4) {
			Alert.alert('Insira uma cidade válida!');
			return;
		}
		navigation.navigate('Home', {city: city});
		setCity('');
	};

	const submitRecentCityHandler = (city: string | null) => {
		navigation.navigate('Home', {city: city});
	};

	return (
		<Container>
			<Title>Type your Location here: </Title>
			<Input
				type="text"
				value={city}
				placeholder="Cidade"
				onChangeText={(searchCity: React.SetStateAction<string>) =>
					setCity(searchCity)
				}
			/>
			<ListButtons>
				<ButtonAction onPress={submitHandler}>
					<TextButton>Submit</TextButton>
				</ButtonAction>
				<ButtonAction onPress={currentLocationHandler}>
					<Text>
						<MaterialIcons
							name="gps-fixed"
							size={24}
							color="white"
						/>
					</Text>
				</ButtonAction>
			</ListButtons>
			<SecundaryTitle>Previous Searches</SecundaryTitle>
			<ListRecentsSearch>
				{recentSearch.map((item) => (
					<BackgroundRecentSearch
						onPress={() => submitRecentCityHandler(item.city)}
					>
						<RecentSearch>
							<InfoRecentSearch>
								<PrimaryRecentSearch>
									{item.city}
								</PrimaryRecentSearch>
								<SecondaryRecentSearch>
									{`${item.state}, ${item.country}`}
								</SecondaryRecentSearch>
							</InfoRecentSearch>
						</RecentSearch>
						<MaterialIcons
							name="arrow-forward"
							size={30}
							color={colors.PRIMARY_COLOR}
							style={{marginRight: 15}}
						/>
					</BackgroundRecentSearch>
				))}
			</ListRecentsSearch>
		</Container>
	);
};

export default SearchScreen;
