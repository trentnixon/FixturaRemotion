import styled from 'styled-components';
import {getContrastColor} from '../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {restrictString} from '../../../../../utils/copy';
import {P} from '../../../Components/Common/type';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const GameType = styled.div`
	width: 15%;
	font-weight: 900;
`;

const Ground = styled.div`
	text-align: center;
	width: 70%;
`;

const Round = styled.div`
	width: 15%;
	text-align: right;
`;

export const HeaderContainer = (props) => {
	const {matchData, fontFamily} = props;
	const {type, round, ground} = matchData; 

	const defaultTextStyle = {
		fontFamily: fontFamily,
		fontStyle: 'normal',
		fontWeight: '400',
		display: 'block',
		fontSize: '1.5em',
		letterSpacing: '-0.015em',
		textTransform: 'uppercase',
		width: '100%',
		color: getContrastColor(props.THEME.primary),
		textAlign: 'center',
	};
	return (
		<HeaderContainerStyles>
			<GameType>
				<P {...defaultTextStyle}>{type}</P>
			</GameType>
			<Ground>
				<P {...defaultTextStyle}>{restrictString(ground, 40)}</P>
			</Ground>
			<Round>
				<P {...defaultTextStyle}>{round}</P>
			</Round>
		</HeaderContainerStyles>
	);
};
