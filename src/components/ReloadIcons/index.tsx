import React from 'react';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colors} from '../../utils';

import {ReloadView} from './styles';

export default function ReloadIcon({load}: any) {
	const reloadIconName =
		Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';
	return (
		<ReloadView>
			<Ionicons
				onPress={load}
				name={reloadIconName}
				size={24}
				color={colors.PRIMARY_COLOR}
			/>
		</ReloadView>
	);
}
