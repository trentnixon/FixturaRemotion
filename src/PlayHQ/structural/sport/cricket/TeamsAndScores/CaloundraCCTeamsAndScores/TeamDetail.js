import React from 'react';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {ImageWithFallback} from '../../../../../utils/global/ImageWithFallback';
import styled from 'styled-components';
import FirstInningsScore from './FirstInningsScore';
import {generateTeamStyle, generateLogoStyle} from './utils';

const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	padding: 20px 0;
`;

const TeamScore = styled.h3`
	line-height: 1em;
	margin: 0;
	text-align: right;
	letter-spacing: 0em;
	text-transform: uppercase;
`;

const Runs = styled(TeamScore)``;

const TeamName = styled(TeamScore)``;

const Overs = styled(TeamScore)``;

const YetToBat = styled(TeamScore)``;

const TeamDetail = ({
	score,
	overs,
	direction,
	justifyContent,
	FirstInnings,
	Type,
	Name,
	textAlign,
}) => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font, Color} = StyleConfig;
	const {FPS_SCORECARD} = TIMINGS;

	const createStyle = generateTeamStyle(
		FPS_SCORECARD,
		textAlign,
		Font.Title,
		Color.Primary.Contrast
	);

	return (
		<TeamScoreContainer style={{flexDirection: direction, justifyContent}}>
			<div>
				{score === 'Yet to Bat' ? (
					<YetToBat style={{...createStyle, ...TextStyles.copyMedium}}>
						{score}
					</YetToBat>
				) : (
					<>
						<FirstInningsScore
							FirstInnings={FirstInnings}
							Type={Type}
							textAlign={textAlign}
						/>
						<Runs style={{...createStyle, ...TextStyles.copyLargeBold}}>
							{score}
						</Runs>
					</>
				)}
				{overs && <Overs style={createStyle}>{`(${overs})`}</Overs>}
				<TeamName style={{...createStyle, ...TextStyles.copySmallBold}}>
					{Name}
				</TeamName>
			</div>
		</TeamScoreContainer>
	);
};

export default TeamDetail;
