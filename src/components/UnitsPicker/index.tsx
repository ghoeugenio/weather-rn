import React from 'react';
import {Picker} from '@react-native-community/picker';

import {Container} from './styles';

export default function UnitsPicker({unitsSystem, setUnitsSystem}: any) {
	return (
		<Container>
			<Picker
				selectedValue={unitsSystem}
				onValueChange={(item) => setUnitsSystem(item)}
				mode="dropdown"
				itemStyle={{fontSize: 12}}
			>
				<Picker.Item label="C°" value="metric" />
				<Picker.Item label="F°" value="imperial" />
			</Picker>
		</Container>
	);
}
