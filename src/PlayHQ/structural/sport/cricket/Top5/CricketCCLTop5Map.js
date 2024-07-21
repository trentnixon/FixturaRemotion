import React from 'react';

import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../assets/common/Containers/ContainerBodyHeight';

import {useVideoDataContext} from '../../../../context/VideoDataContext';
import {CLLTop5PlayerRow} from './PlayerRows/CLLTop5PlayerRow';

export const CricketCCLTop5Map = (props) => {
	const {TYPE} = props;
	const {DATA} = useVideoDataContext();

	return (
		<ContainerBodyHeight>
			<ContainerInnerBodyHeight>
				{DATA.DATA.map((player, i) => {
					return <CLLTop5PlayerRow key={i} player={player} i={i} TYPE={TYPE} />;
				})}
			</ContainerInnerBodyHeight>
		</ContainerBodyHeight>
	);
};
