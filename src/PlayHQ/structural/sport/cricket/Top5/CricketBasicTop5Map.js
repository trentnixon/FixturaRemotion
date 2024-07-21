import React from 'react';
import styled from 'styled-components';
import {ContainerBodyHeight} from '../../../assets/common/Containers/ContainerBodyHeight';
import {useVideoDataContext} from '../../../../context/VideoDataContext';
import BasicTop5PlayerRow from './PlayerRows/BasicTop5PlayerRow';

const PlayerContainer = styled.div`
	width: 100%;
	z-index: 1000;
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 100%;
`;

export const CricketBasicTop5Map = ({TYPE}) => {
	const {DATA} = useVideoDataContext();

	return (
		<ContainerBodyHeight>
			<PlayerContainer>
				{DATA.DATA.map((player, i) => (
					<BasicTop5PlayerRow key={i} player={player} i={i} TYPE={TYPE} />
				))}
			</PlayerContainer>
		</ContainerBodyHeight>
	);
};
