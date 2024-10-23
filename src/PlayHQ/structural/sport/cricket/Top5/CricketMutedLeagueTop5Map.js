import React from 'react';
import styled from 'styled-components';
import {ContainerBodyHeight} from '../../../assets/common/Containers/ContainerBodyHeight';
import {useVideoDataContext} from '../../../../context/VideoDataContext';
import MutedPlayerRow from './PlayerRows/MutedPlayerRow';

const PlayerContainer = styled.div`
	width: 730px;
	z-index: 1000;
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 100%;
`;

export const CricketMutedLeagueTop5Map = ({TYPE}) => {
	const {DATA} = useVideoDataContext();

	return (
		<ContainerBodyHeight styles={{padding: '0%'}}>
			<PlayerContainer>
				{DATA.DATA.map((player, i) => (
					<MutedPlayerRow key={i} player={player} i={i} TYPE={TYPE} />
				))}
			</PlayerContainer>
		</ContainerBodyHeight>
	);
};
