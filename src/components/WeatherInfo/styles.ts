import styled from 'styled-components';

import {colors} from '../../utils';
const {PRIMARY_COLOR, SECONDARY_COLOR} = colors;

export const Container = styled.View`
	align-items: center;
`;

export const Icon = styled.Image`
	width: 100px;
	height: 100px;
`;

export const Description = styled.Text`
	text-transform: capitalize;
`;

export const PrimaryText = styled.Text`
	font-size: 40px;
	color: ${PRIMARY_COLOR};
`;

export const SecondaryText = styled.Text`
	font-size: 20px;
	color: ${SECONDARY_COLOR};
	font-weight: 500;
	margin-top: 10px;
`;
