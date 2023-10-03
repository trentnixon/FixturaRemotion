import styled from 'styled-components';
import {
	GetBackgroundContractColorForText,
	getContrastColor,
	setOpacity,
} from '../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FromMiddle, FromTopToBottom} from '../../../../../Animation/ClipWipe';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 40px;
	padding: 0px 10px;

	/* 	background-color: ${(props) => setOpacity(props.THEME.secondary, 0.05)}; */
`;

const HeaderCopy = styled.p`
	font-family: ${(props) => props.fontFamily};
	font-style: normal;
	font-weight: 400;
	display: block;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	width: 100%;
	font-size: 1.2em;
	line-height: 1.2em;
	margin: 0;
`;

const HeaderItem = ({
	label,
	width,
	fontFamily,
	primaryColor,
	FPS_SCORECARD,
	frame,
	textAlign,
}) => {
	const commonStyles = {
		color: primaryColor,
		clipPath: FromTopToBottom(30, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
		textAlign: textAlign,
	};

	return (
		<HeaderCopy style={{...commonStyles, width}} fontFamily={fontFamily}>
			{label}
		</HeaderCopy>
	);
};

export const HeaderContainer = ({
	type,
	round,
	THEME,
	fontFamily,
	FPS_SCORECARD,
	gradeName,
}) => {
	const frame = useCurrentFrame();
	const primaryColor = THEME.primary;

	return (
		<HeaderContainerStyles
			THEME={THEME}
			style={{
				clipPath: FromMiddle(7, 'Wobbly'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_SCORECARD - 30,
					FPS_SCORECARD,
					1,
					0
				),
			}}
		>
			<HeaderItem
				label={type}
				width="15%"
				fontFamily={fontFamily}
				primaryColor={GetBackgroundContractColorForText(
					THEME.primary,
					THEME.secondary
				)}
				FPS_SCORECARD={FPS_SCORECARD}
				frame={frame}
				textAlign="left"
			/>
			<HeaderItem
				label={gradeName}
				width="60%"
				fontFamily={fontFamily}
				primaryColor={GetBackgroundContractColorForText(
					THEME.primary,
					THEME.secondary
				)}
				FPS_SCORECARD={FPS_SCORECARD}
				frame={frame}
				textAlign="center"
			/>
			<HeaderItem
				label={round}
				width="20%"
				fontFamily={fontFamily}
				primaryColor={GetBackgroundContractColorForText(
					THEME.primary,
					THEME.secondary
				)}
				FPS_SCORECARD={FPS_SCORECARD}
				frame={frame}
				textAlign="right"
			/>
		</HeaderContainerStyles>
	);
};
