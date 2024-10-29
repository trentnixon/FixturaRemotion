import React from 'react';
import styled from 'styled-components';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {ContainerHeaderHeight} from '../../../Containers/ContainerHeaderHeight';
import {AssetTitle, AssetTitleNoAnimation, AssetTitleSmall} from './AssetTitle';
import {FromLeftToRight} from '../../../../../../Animation/ClipWipe';
import {BundleTitle, BundleTitleNoAnimation} from './BundleTitle';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {SpringToFrom} from '../../../../../../Animation/RemotionSpring';
import {MutedTitleLogo} from './MutedTitleLogo';

const Row = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: row;
	width: auto;
	align-items: left;
	justify-content: flex-start;
	width: 96%;
	margin-top: 10px;
`;
const InnerContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: left;
	justify-content: flex-start;
	width: 100%;
	margin: 10px auto;
	height: 150px;
	padding: 10px 0;
	z-index: 1000;
`;

export const MutedLeagueDefaultTitle = () => {
	const {Heights, TIMINGS} = useLayoutContext();
	const {BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	const {FPS_MAIN} = TIMINGS;
	return (
		<ContainerHeaderHeight SectionHeights={Heights}>
			<Row>
				<MutedTitleLogo />
				<InnerContainer
					style={{
						clipPath: FromLeftToRight(10, 'Wobbly'),
						transform: `translateX(${SpringToFrom(35, -100, 0, 'Wobbly')}px)`,
					}}
				>
					<AssetTitle />
					<BundleTitle />
					<div
						style={{
							height: '5px',
							width: '400px',
							backgroundColor: TemplateVariation.useMutedColor,
							margin: ' 15px 0 0 0  ',
							clipPath: FromLeftToRight(7, 'Wobbly'),
							transform: `translateX(${SpringToFrom(
								FPS_MAIN - 25,
								0,
								-1000,
								'Wobbly'
							)}px)`,
						}}
					/>
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};

export const MutedLeagueRosterTitle = () => {
	const {Heights} = useLayoutContext();
	const {BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	return (
		<ContainerHeaderHeight SectionHeights={Heights}>
			<Row>
				<MutedTitleLogo start={0} />
				<InnerContainer
					style={{
						clipPath: FromLeftToRight(0, 'Wobbly'),
						transform: `translateX(${SpringToFrom(0, -100, 0, 'Wobbly')}px)`,
					}}
				>
					<AssetTitleNoAnimation start={0} />
					<BundleTitleNoAnimation />
					<div
						style={{
							height: '5px',
							width: '400px',
							backgroundColor: TemplateVariation.useMutedColor,
							margin: ' 15px 0 0 0  ',
							clipPath: FromLeftToRight(0, 'Wobbly'),
						}}
					/>
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};

export const MutedLeagueSingleFixtureTitle = () => {
	const {Heights, TIMINGS} = useLayoutContext();
	const {BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	const {FPS_MAIN} = TIMINGS;
	return (
		<ContainerHeaderHeight SectionHeights={Heights}>
			<Row>
				<InnerContainer
					style={{
						clipPath: FromLeftToRight(10, 'Wobbly'),
						transform: `translateX(${SpringToFrom(35, -100, 0, 'Wobbly')}px)`,
					}}
				>
					<AssetTitleSmall />
					<BundleTitle />
					<div
						style={{
							height: '5px',
							width: '400px',
							backgroundColor: TemplateVariation.useMutedColor,
							margin: ' 15px 0 0 0  ',
							clipPath: FromLeftToRight(7, 'Wobbly'),
							transform: `translateX(${SpringToFrom(
								FPS_MAIN - 25,
								0,
								-1000,
								'Wobbly'
							)}px)`,
						}}
					/>
				</InnerContainer>
				<MutedTitleLogo />
			</Row>
		</ContainerHeaderHeight>
	);
};
