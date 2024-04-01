import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';

import {HeaderLogo, SingleResultHeaderLogo} from './Logo';
import {OrganisationName, SingleResultOrganisationName} from './ClubLabel';
import {DisplayVideoTitleBottom, DisplayVideoTitleTop} from './VideoTitle';

const Positioning = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	position: absolute;
	height: auto;
	top: 70px;
`;
const ROW = styled.div`
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

const Container = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: flex-start;
	position: absolute;
	height: auto;
`;

export const LogoClubTitleHeader = (props) => {
	console.log("props ", props)
	const {THEME, VIDEOMETA, FPS_MAIN} = props;
	const frame = useCurrentFrame();

	return (
		<Positioning>
			<ROW>
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
					{/* <DisplayVideoTitleBottom
						THEME={THEME}
						frame={frame}
						FPS_MAIN={FPS_MAIN}
						VALUE={VIDEOMETA.Video.TitleSplit[1]}
					/> */}
				</InnerContainer>
			</ROW>
		</Positioning>
	);
};

export const LogoClubTitleHeaderLimited = (props) => {
	const {THEME, VIDEOMETA, FPS_MAIN} = props
	const frame = useCurrentFrame();

	return (
		<ROW>
			<InnerContainer>
				<OrganisationName
					frame={frame}
					NAME={VIDEOMETA.Club.Name}
					grouping_category={VIDEOMETA.Club.Name}
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
			</InnerContainer>
		</ROW>
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
			<ROW>
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
			</ROW>
		</Positioning>
	);
};
