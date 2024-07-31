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

const Runs = styled(TeamScore)`
	font-size: 65px;
	font-weight: 400 !important;
`;

const TeamName = styled(TeamScore)`
	font-size: 30px;
	font-weight: 400 !important;
	font-family: Arial !important;
`;

const Overs = styled(TeamScore)`
	font-size: 2em;
	font-weight: 600;
`;

const YetToBat = styled(TeamScore)`
	font-size: 2em;
`;

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
	const {StyleConfig} = useStylesContext();
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
					<YetToBat style={createStyle}>{score}</YetToBat>
				) : (
					<>
						<FirstInningsScore
							FirstInnings={FirstInnings}
							Type={Type}
							textAlign={textAlign}
						/>
						<Runs style={createStyle}>{score}</Runs>
					</>
				)}
				{overs && <Overs style={createStyle}>{`(${overs})`}</Overs>}
				<TeamName style={createStyle}>{Name}</TeamName>
			</div>
		</TeamScoreContainer>
	);
};

export default TeamDetail;
/* <LogoHolder style={generateLogoStyle(FPS_SCORECARD)}>
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
			</LogoHolder> */
