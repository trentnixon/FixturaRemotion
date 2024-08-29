import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import styled from 'styled-components';
import {useStylesContext} from '../../../../../../context/StyleContext';

export const SixersFixtureBuild = (props) => {
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
	text-transform: uppercase;
	margin: 10px 0.5em 20px;
	text-align: right;
`;
const DisplayGradeName = (props) => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Color} = StyleConfig;
	return (
		<GradeName
			style={{
				color: Color.Primary.Contrast,
				...TextStyles.copyMedium,
				...StyleConfig.Font.Copy,
			}}
		>
			{props.matchData.gradeName}
		</GradeName>
	);
};

const MatchResult = styled.h2`
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
				...TextStyles.copyLargeBold,
				...StyleConfig.Font.Copy,
			}}
		>
			{props.Result}
		</MatchResult>
	);
};
