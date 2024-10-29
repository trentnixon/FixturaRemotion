import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import styled from 'styled-components';
import {useStylesContext} from '../../../../../../context/StyleContext';

export const MutedFixtureBuild = (props) => {
	const {matchData} = props;
	return (
		<>
			<MatchContainer>
				<DisplayMatchResult Result={matchData.result} />
				<TeamsAndScores matchData={matchData} />
				<DisplayGradeName matchData={matchData} />
				<HeaderContainer matchData={matchData} />
			</MatchContainer>
		</>
	);
};

const GradeName = styled.h2`
	text-transform: uppercase;
	margin: 0px;
	text-align: left;
`;
const DisplayGradeName = (props) => {
	const {BuildProps, TextStyles} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	return (
		<GradeName
			style={{
				color: TemplateVariation.useMutedColor,
				...TextStyles.copySmallBold,
			}}
		>
			{props.matchData.gradeName}
		</GradeName>
	);
};

const MatchResult = styled.h2`
	text-transform: uppercase;
	margin: 0 0 20px 0;
	text-align: left;
`;
const DisplayMatchResult = (props) => {
	const {BuildProps, TextStyles} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	return (
		<MatchResult
			style={{
				color: TemplateVariation.useMutedColor,
				...TextStyles.copySmallBold,
			}}
		>
			{props.Result}
		</MatchResult>
	);
};
