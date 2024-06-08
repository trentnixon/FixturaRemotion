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
`;

const Runs = styled.h3`
	color: ${(props) => props.color};
	font-size: 0.9em;
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

export const DisplayInningsScore = (props) => {
	const {
		FirstInnings,
		Type,
		StyleConfig,
		fontFamily,
		FPS_SCORECARD,
		score,
		overs,
	} = props;

	const {Color} = StyleConfig;

	return (
		<>
			<InningsScore style={{...StyleConfig.Font.Copy}}>
				<Runs
					color={getContrastColor(Color.Primary.Darken)}
					fontFamily={fontFamily}
					style={{...StyleConfig.Font.Copy}}
				>
					<FirstInningsScore
						Type={Type}
						FirstInnings={FirstInnings}
						FPS_SCORECARD={FPS_SCORECARD}
						StyleConfig={StyleConfig}
					/>
					{score}
				</Runs>

				{overs && (
					<Overs
						color={getContrastColor(Color.Primary.Darken)}
						style={{...StyleConfig.Font.Copy}}
					>{`(${overs})`}</Overs>
				)}
			</InningsScore>
		</>
	);
};

const FirstInningsScore = (props) => {
	const {FirstInnings, Type} = props;
	if (Type !== 'Two Day+' || FirstInnings === '1') return false;
	return FirstInnings;
};

const TeamScore = styled.h3`
	line-height: 1em;
	font-weight: 900;
	margin: 0;
	text-align: right;
	letter-spacing: 0em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

/* const FirstInningsRuns = styled(TeamScore)`
	font-weight: 400;
`;
 */
