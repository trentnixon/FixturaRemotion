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
	padding: 10px 0;
`;

const TeamScore = styled.h3`
	margin: 0;
	text-align: right;
	text-transform: uppercase;
`;

const Runs = styled(TeamScore)``;

const TeamName = styled(TeamScore)``;

const Overs = styled(TeamScore)``;

const YetToBat = styled(TeamScore)``;

const LogoHolder = styled.div`
	margin: 0 2em;
`;

const TeamDetail = ({
	team,
	imgStyles,
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
		Color.Primary.BackgroundContractColor
	);

	return (
		<TeamScoreContainer style={{flexDirection: direction, justifyContent}}>
			<div>
				{score === 'Yet to Bat' ? (
					<YetToBat style={createStyle}>{score}</YetToBat>
				) : (
					<>
						<FirstInningsScore
							FirstInnings={FirstInnings}
							Type={Type}
							textAlign={textAlign}
						/>
						<Runs style={{...createStyle, ...TextStyles.copyXLargeBold}}>
							{score}
						</Runs>
					</>
				)}
				{overs && <Overs style={{...createStyle}}>{`(${overs})`}</Overs>}
				<TeamName style={{...createStyle, ...TextStyles.copyMedium}}>
					{Name}
				</TeamName>
			</div>
			<LogoHolder style={generateLogoStyle(FPS_SCORECARD)}>
				<ImageWithFallback
					src={team.logo}
					style={{
						...imgStyles,
						borderRadius: '100%',
						height: '80px',
						width: '80px',
						objectFit: 'cover',
					}}
				/>
			</LogoHolder>
		</TeamScoreContainer>
	);
};

export default TeamDetail;
