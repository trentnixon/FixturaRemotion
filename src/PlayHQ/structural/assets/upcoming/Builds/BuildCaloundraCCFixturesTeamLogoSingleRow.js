import styled from 'styled-components';
import {OuterShell} from '../../common/Containers/CaloundraCC/OuterShell';
import {useStylesContext} from '../../../../context/StyleContext';
import {InnerShell} from '../../common/Containers/CaloundraCC/InnerShell';
import {TeamLogoSingleRow} from '../TeamLogoSingleRow/TeamLogoSingleRow';
import {CaloundraCCFixtureGround} from '../../../sport/cricket/TeamsAndScores/CaloundraCCTeamsAndScores/GroundLabel';
import {TwoMetaPoints} from '../../common/FixtureMetadata/TwoMetaPoints/TwoMetaPoints';

export const BuildCaloundraCCFixturesTeamLogoSingleRow = (props) => {
	const {matchData} = props;
	const {StyleConfig} = useStylesContext();
	const {Color} = StyleConfig;

	const CustomStyle = {
		height: '40px',
		width: '80%',
		margin: '0 10%',
	};
	return (
		<MatchContainer>
			<CaloundraCCFixtureGround matchData={matchData} />
			<OuterShell borderColor={Color.Primary.Main}>
				<InnerShell Gradient={Color.Background.Gradients.QLDC}>
					<TeamLogoSingleRow {...props} />
				</InnerShell>
			</OuterShell>
			<TwoMetaPoints
				{...props}
				MetaPoints={['round', 'time']}
				CustomStyle={CustomStyle}
			/>
		</MatchContainer>
	);
};
const MatchContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 20px auto;
`;
