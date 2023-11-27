import {useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {darkenColor, getContrastColor} from '../../../../utils/colors';

const InningsScore = styled.h3`
	line-height: 1em;
	font-weight: 400;
	margin: 0;
	letter-spacing: 0em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

const Runs = styled.h3`
	color: ${(props) => props.color};
	font-size: 1em;
	line-height: 1em;
	font-weight: 400;
	margin: 0;
	letter-spacing: 0em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

const Overs = styled.h3`
	font-size: 1em;
	line-height: 1em;
	font-weight: 400;
	margin: 0;
	letter-spacing: 0em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
	color: ${(props) => props.color};
`;


const generateTeamStyle = (FPS_SCORECARD) => {
	const frame = useCurrentFrame();
	return {
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
	};
};

export const DisplayInningsScore = (props) => {
	const {FirstInnings, Type,THEME, fontFamily, FPS_SCORECARD, score, overs} = props;

	/* console.log(score, overs) */
	//if (Type !== 'Two Day+' || FirstInnings === '1') return false;
	return (
        
		<InningsScore
			fontFamily={fontFamily}
			style={generateTeamStyle(FPS_SCORECARD)}
		>
		
			<Runs
				color={getContrastColor(darkenColor(THEME.primary))}
				fontFamily={fontFamily}
				style={generateTeamStyle(FPS_SCORECARD)}
			>
				{score}
			</Runs>

			{overs && (
				<Overs
					color={getContrastColor(darkenColor(THEME.primary))}
					fontFamily={fontFamily}
					style={generateTeamStyle(FPS_SCORECARD, THEME)}
				>{`(${overs})`}</Overs>
			)}
		</InningsScore>
	);
};
