import styled from 'styled-components';
import {getContrastColor, darkenColor} from '../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {SpringToFrom} from '../../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {
	EraseToMiddleFromTop,
	FromMiddle,
	FromTopToBottom,
} from '../../../../../Animation/ClipWipe';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	padding: 0 10px;
	margin-top: 50px;
	background-color: ${(props) => darkenColor(props.THEME.secondary)};
`;

const HeaderCopy = styled.p`
	font-family: ${(props) => props.fontFamily};
	font-style: normal;
	font-weight: 400;
	display: block;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	width: 100%;
`;

const GameType = styled(HeaderCopy)`
	font-size: 1.4em;
	width: 15%;
	font-weight: 900;
`;

const Ground = styled(HeaderCopy)`
	font-size: 1.4em;
	text-align: center;
	width: 70%;
`;

const Round = styled(HeaderCopy)`
	font-size: 1.4em;
	width: 15%;
	text-align: right;
`;

export const HeaderContainer = (props) => {
	const {type, round, THEME, fontFamily, FPS_SCORECARD, ground} = props;
	const frame = useCurrentFrame();
	return (
		<HeaderContainerStyles THEME={THEME}> 
			<GameType>
				<HeaderCopy
					THEME={THEME}
					fontFamily={fontFamily}
					style={{
						color: getContrastColor(darkenColor(props.THEME.secondary)),
					}}
				>
					{type}
				</HeaderCopy>
			</GameType>
			<Ground>
				<HeaderCopy
					THEME={THEME}
					fontFamily={fontFamily}
					style={{
						color: getContrastColor(darkenColor(props.THEME.secondary)),
					}}
				>
					{ground}
				</HeaderCopy>
			</Ground>
			<Round>
				<HeaderCopy
					THEME={THEME}
					fontFamily={fontFamily}
					style={{
						color: getContrastColor(darkenColor(props.THEME.secondary)),
					}}
				>
					{round}
				</HeaderCopy>
			</Round>
		</HeaderContainerStyles>
	);
};
