import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react';
import WeatherScreen from '../../screen/WeatherScreen';
import SearchScreen from '../../screen/SearchScreen';

const AuthStack = createStackNavigator();

const Navigator: React.FC = () => {
	return (
		<NavigationContainer>
			<AuthStack.Navigator initialRouteName="Search">
				<AuthStack.Screen
					name="Search"
					component={SearchScreen}
					options={{title: 'Search'}}
				/>
				<AuthStack.Screen
					name="Home"
					component={WeatherScreen}
					options={{title: 'Weather'}}
				/>
			</AuthStack.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;
