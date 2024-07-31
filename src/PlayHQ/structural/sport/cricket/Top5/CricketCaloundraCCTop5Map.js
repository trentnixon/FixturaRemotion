import React from 'react';
import styled from 'styled-components';
import {ContainerBodyHeight} from '../../../assets/common/Containers/ContainerBodyHeight';
import {useVideoDataContext} from '../../../../context/VideoDataContext';
import CaloundraCCTop5PlayerRow from './PlayerRows/CaloundraCCTop5PlayerRow';

const PlayerContainer = styled.div`
	width: 100%;
	z-index: 1000;
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 100%;
`;

export const CricketCaloundraCCTop5Map = ({TYPE}) => {
	const {DATA} = useVideoDataContext();

	return (
		<ContainerBodyHeight>
			<PlayerContainer>
				{DATA.DATA.map((player, i) => (
					<CaloundraCCTop5PlayerRow key={i} player={player} i={i} TYPE={TYPE} />
				))}
			</PlayerContainer>
		</ContainerBodyHeight>
	);
};
