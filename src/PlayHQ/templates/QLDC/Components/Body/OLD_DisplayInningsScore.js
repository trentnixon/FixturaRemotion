import {useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {darkenColor, getContrastColor} from '../../../../utils/colors';
import {P} from '../Common/type';
import {DisplayTeamScore} from '../Common/CommonVariables';

const InningsScore = styled.h3`
	line-height: 1em;
	font-weight: 400;
	margin: 0;
	letter-spacing: 0em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

const TeamScore = styled.h3`
	line-height: 1em;
	font-weight: 900;
	margin: 0;
	text-align: right;
	letter-spacing: 0em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

export const DisplayInningsScore = (props) => {
	const {FirstInnings, Type, THEME, fontFamily, FPS_SCORECARD, score, overs} =
		props;

	const RunsStyles = {
		color: getContrastColor(darkenColor(THEME.primary)),
		fontSize: '1em',
		lineHeight: '1em',
		fontWeight: '400',
		margin: '0',
		textAlign: 'center', 
		textTransform: 'uppercase',
		fontFamily: fontFamily,
	};
	const OversStyles = {
		color: getContrastColor(darkenColor(THEME.primary)),
		fontSize: '0.8em',
		lineHeight: '1em',
		fontWeight: '400',
		margin: '0',
		textAlign: 'center',
		textTransform: 'uppercase',
		fontFamily: fontFamily,
	};

	return (
		<>
			<InningsScore fontFamily={fontFamily}>
				<FirstInningsScore
					Type={Type}
					FirstInnings={FirstInnings}
					THEME={THEME}
					FPS_SCORECARD={FPS_SCORECARD}
					fontFamily={fontFamily}
				/>
				<DisplayTeamScore name={score} customStyles={RunsStyles} />

				{overs && <DisplayTeamScore name={overs} customStyles={OversStyles} />}
			</InningsScore>
		</>
	);
};

const FirstInningsScore = (props) => {
	const {
		FirstInnings,
		Type,
		fontFamily,
		THEME /* FPS_SCORECARD, THEME,textAlign */,
		FPS_SCORECARD,
	} = props;
	if (Type !== 'Two Day+' || FirstInnings === '1') return false;
	return <P>{FirstInnings}</P>;
};
