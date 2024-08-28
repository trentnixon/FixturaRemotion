import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import styled from 'styled-components';
import {useStylesContext} from '../../../../../../context/StyleContext';

export const ThunderFixtureBuild = (props) => {
	const {matchData} = props;
	return (
		<>
			<DisplayMatchResult Result={matchData.result} />
			<MatchContainer>
				<DisplayGradeName matchData={matchData} />
				<TeamsAndScores matchData={matchData} />
				<HeaderContainer matchData={matchData} />
			</MatchContainer>
		</>
	);
};

const GradeName = styled.h2`
	font-style: normal;
	font-weight: 400;
	text-transform: uppercase;
	margin: 10px 0.5em;
	text-align: right;
`;
const DisplayGradeName = (props) => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Color} = StyleConfig;
	return (
		<GradeName
			style={{
				color: Color.Primary.Contrast,
				...StyleConfig.Font.Copy,
				...TextStyles.copyMedium,
			}}
		>
			{props.matchData.gradeName}
		</GradeName>
	);
};

const MatchResult = styled.h2`
	font-style: normal;
	font-weight: 600;
	text-transform: uppercase;
	margin: 10px 0;
	text-align: center;
`;
const DisplayMatchResult = (props) => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Color} = StyleConfig;
	return (
		<MatchResult
			style={{
				color: Color.Primary.Contrast,
				...StyleConfig.Font.Copy,
				...TextStyles.copyMedium,
			}}
		>
			{props.Result}
		</MatchResult>
	);
};
