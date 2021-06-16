import styled from 'styled-components';
import {colors} from '../../utils';
const {PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR} = colors;

export const Container = styled.View`
	margin-top: auto;
	margin: 15px;
	border-width: 1px;
	border-color: ${BORDER_COLOR};
	border-radius: 10px;
`;

export const Row = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const AlterRow = styled(Row)`
	border-top-width: 1px;
	border-top-color: ${BORDER_COLOR};
`;

export const Detail = styled.View`
	flex: 1px;
	padding: 20px;
`;

export const AlterDetail = styled(Detail)`
	border-right-width: 1px;
	border-right-color: ${BORDER_COLOR};
`;

export const DetailItems = styled.View`
	align-items: flex-end;
	justify-content: flex-end;
`;

export const TextSecondary = styled.Text`
	font-size: 15px;
	color: ${SECONDARY_COLOR};
	font-weight: 700;
	margin: 7px;
`;
