import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';

import {HeaderLogo, SingleResultHeaderLogo} from './Logo';
import {OrganisationName} from './ClubLabel';
import {DisplayVideoTitleTop} from './VideoTitle';
import {ContainerHeaderHeight} from '../../../../structural/assets/common/Containers/ContainerHeaderHeight';

const Positioning = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	position: absolute;
	height: auto;
	top: 50px;
`;
const Row = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: row;
	width: auto;
	align-items: center;
	justify-content: center;
`;
const InnerContainer = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: center;
	padding-left: 10px;
`;

export const LogoClubTitleHeader = (props) => {
	console.log('props ', props);
	const {THEME, VIDEOMETA, FPS_MAIN} = props;
	const frame = useCurrentFrame();

	return (
		<ContainerHeaderHeight {...props}>
			<Row>
				<InnerContainer>
					<OrganisationName
						frame={frame}
						NAME={VIDEOMETA.Club.Name}
						grouping_category={VIDEOMETA.grouping_category}
						FPS_MAIN={FPS_MAIN}
						{...props}
					/>
					<DisplayVideoTitleTop
						THEME={THEME}
						frame={frame}
						FPS_MAIN={FPS_MAIN}
						VALUE={VIDEOMETA.Video.TitleSplit[0]}
						{...props}
					/>
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};

export const LogoClubTitleHeaderLimited = (props) => {
	console.log('props ', props);
	const { VIDEOMETA, FPS_MAIN} = props;
	const frame = useCurrentFrame();

	return (
		<ContainerHeaderHeight {...props}>
			<Row>
				<InnerContainer>
					<OrganisationName
						frame={frame}
						NAME={VIDEOMETA.Club.Name}
						grouping_category={VIDEOMETA.grouping_category}
						FPS_MAIN={FPS_MAIN}
						{...props}
					/> 
					
				</InnerContainer> 
			
			</Row>
		</ContainerHeaderHeight>
	);
};

export const RosterTitleHeader = (props) => {
	const {THEME, VIDEOMETA, FPS_MAIN} = props;
	const frame = useCurrentFrame();

	return (
		<Positioning
			style={{
				width: '70%',
			}}
		>
			<Row>
				<InnerContainer>
					<OrganisationName
						frame={frame}
						NAME={VIDEOMETA.Club.Name}
						grouping_category={VIDEOMETA.grouping_category}
						FPS_MAIN={FPS_MAIN}
						THEME={THEME}
						{...props}
					/>
					<DisplayVideoTitleTop
						THEME={THEME}
						frame={frame}
						FPS_MAIN={FPS_MAIN}
						VALUE={VIDEOMETA.Video.TitleSplit[0]}
					/>
					{/* <DisplayVideoTitleBottom
						THEME={THEME}
						frame={frame}
						FPS_MAIN={FPS_MAIN}
						VALUE={VIDEOMETA.Video.TitleSplit[1]}
					/> */}
				</InnerContainer>
			</Row>
		</Positioning>
	);
};
