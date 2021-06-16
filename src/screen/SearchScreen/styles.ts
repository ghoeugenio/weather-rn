import styled from 'styled-components';
import {colors} from '../../utils/index';

export const Container = styled.View`
	flex: 1px;
	margin-left: 16px;
	margin-right: 16px;
`;

export const Title = styled.Text`
	margin-top: 16px;
	margin-bottom: 10px;
	font-size: 20px;
`;

export const Input = styled.TextInput`
	border: 2px solid ${colors.BORDER_COLOR};
	border-radius: 10px;

	height: 48px;

	padding-left: 10px;
`;

export const ListButtons = styled.View`
	flex-direction: row;
	justify-content: space-between;

	margin-top: 16px;
`;

export const ButtonAction = styled.TouchableOpacity`
	background-color: ${colors.PRIMARY_COLOR};
	width: 100px;
	height: 50px;
	border-radius: 8px;
	justify-content: center;
	align-items: center;
`;

export const TextButton = styled.Text`
	font-size: 16px;
	color: #fff;
`;

export const SecundaryTitle = styled(Title)`
	font-size: 24px;
	font-weight: bold;
`;

export const ListRecentsSearch = styled.View`
	flex-direction: column-reverse;
`;

export const BackgroundRecentSearch = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	background-color: ${colors.BORDER_COLOR};
	height: 70px;
	border-radius: 10px;
	margin-bottom: 8px;
`;

export const RecentSearch = styled.View`
	border-left-width: 3px;
	border-left-color: ${colors.PRIMARY_COLOR};
	height: 40px;
	border-radius: 2px;
	margin-left: 15px;
`;

export const InfoRecentSearch = styled.View`
	flex-direction: column;
	margin-left: 10px;
`;

export const SecondaryRecentSearch = styled.Text`
	font-size: 16px;
`;

export const PrimaryRecentSearch = styled(SecondaryRecentSearch)`
	font-weight: bold;
`;
