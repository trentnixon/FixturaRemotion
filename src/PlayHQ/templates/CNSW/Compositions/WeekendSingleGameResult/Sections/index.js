import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import {PrincipalSponsorAlwaysShow} from '../../../Components/Intro/PrincipalSponsor';
import styled from 'styled-components';
import {getContrastColor} from '../../../../../utils/colors';
import {LogoClubTitleHeaderLimited} from '../../../Components/Header/LogoClubTitleHeader';

export const Match = (props) => {
	const {THEME, fontFamily} = props;
	return (
		<>
			<LogoClubTitleHeaderLimited {...props} />
			<MatchContainer THEME={THEME} fontFamily={fontFamily}>
				<DisplayGradeName {...props} />
				<TeamsAndScores {...props} />
				<HeaderContainer {...props} />
				<PrincipalSponsorAlwaysShow FPS={30} {...props} />
			</MatchContainer>
		</>
	);
};

const GradeName = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 2em;
	line-height: 1em;
	letter-spacing: -0.085em;
	text-transform: uppercase;
	margin: 10px 0;
	text-align: right;
	font-family: ${(props) => props.fontFamily};
`;
const DisplayGradeName = (props) => {
	const {fontFamily, THEME} = props;
	console.log('gradeName', props.matchData.gradeName);
	return (
		<GradeName
			fontFamily={fontFamily}
			style={{
				color: getContrastColor(THEME.primary),
			}}
		>
			{props.matchData.gradeName}
		</GradeName>
	);
};
