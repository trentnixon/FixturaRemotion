import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import styled from 'styled-components';
import {useStylesContext} from '../../../../../../context/StyleContext';

export const CNSWFixtureBuild = (props) => {
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
	margin: 10px;
	text-align: right;
`;
const DisplayGradeName = (props) => {
	const {StyleConfig,TextStyles} = useStylesContext();
	const {Color} = StyleConfig;
	return (
		<GradeName
			style={{
				...TextStyles.copyMedium,
				color: Color.Primary.Contrast,
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
				...TextStyles.copyLarge,
				color: Color.Primary.Contrast,
				...StyleConfig.Font.Copy,
			}}
		>
			{props.Result}
		</MatchResult>
	);
};
