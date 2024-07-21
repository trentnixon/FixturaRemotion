import React from 'react';
import {ContainerQLDCBodyHeight} from '../../../assets/common/Containers/QLDC/ContainerBodyHeight';
import {ContainerQLDCAsset} from '../../../assets/common/Containers/QLDC/ContainerQLDCAsset';
import QLDCPlayerRow from './PlayerRows/QLDCPlayerRow';
import {useVideoDataContext} from '../../../../context/VideoDataContext';

export const CricketQLDCTop5Map = ({TYPE}) => {
	const {DATA} = useVideoDataContext();

	return (
		<ContainerQLDCBodyHeight>
			<ContainerQLDCAsset>
				{DATA.DATA.map((player, i) => (
					<QLDCPlayerRow key={i} player={player} i={i} TYPE={TYPE} />
				))}
			</ContainerQLDCAsset>
		</ContainerQLDCBodyHeight>
	);
};
