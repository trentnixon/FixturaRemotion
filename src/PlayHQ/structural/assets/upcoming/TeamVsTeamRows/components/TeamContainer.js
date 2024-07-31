import {useCurrentFrame} from 'remotion';
import {
	FromLeftToRight,
	FromRightToLeft,
} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {
	StructureContentBlock,
	StructureMainBlock,
	StructureSidebarBlock,
	TeamScoreContainer,
} from './sharedStyles';
import {ImageWithFallback} from '../../../../../utils/global/ImageWithFallback';
import {SpringToFrom} from '../../../../../Animation/RemotionSpring';
import {restrictString} from '../../../../../utils/copy';
import {FixtureLabels} from '../../../../../common/components/copy/commonAssetTypes';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';

export const TeamContainer = (props) => {
	const {START, LOGO, STYLES, TEAM, justifyContent} = props;

	const {StyleConfig, BuildProps} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {TemplateVariation} = BuildProps;
	const {FPS_SCORECARD} = TIMINGS;

	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();
	const IMGRATIO = '80px';
	const fallbackSrc = 'https://fallback.url/image.png';
	const TeamNameStyles = {
		...Font.Copy,
		fontSize: '1.9em',
		width: '100%',
		margin: '0 10px',
		color: Color.Secondary.Contrast,
		clipPath: FromLeftToRight(30 + START, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
		letterSpacing: '-0.03em',
	};

	return (
		<StructureMainBlock>
			<StructureSidebarBlock>
				<ImageWithFallback
					src={LOGO}
					fallbackSrc={fallbackSrc}
					style={{
						...STYLES,
						borderRadius: '10%',
						objectFit: 'cover',
						height: IMGRATIO,
						width: IMGRATIO,
						marginRight: '5px',

						clipPath: FromRightToLeft(20, 'Wobbly'),
						opacity: interpolateOpacityByFrame(
							frame,
							FPS_SCORECARD - 30,
							FPS_SCORECARD,
							1,
							0
						),
					}}
				/>
			</StructureSidebarBlock>
			<StructureContentBlock justifyContent={justifyContent}>
				<TeamScoreContainer
					bgColor={Color.Secondary.Main}
					borderRadius={TemplateVariation.borderRadius}
					style={{
						maxHeight: '100px',
						width: `${SpringToFrom(START, 0, 100, 'Wobbly')}%`,
						opacity: interpolateOpacityByFrame(
							frame,
							FPS_SCORECARD - 30,
							FPS_SCORECARD,
							1,
							0
						),
					}}
				>
					<FixtureLabels customStyles={TeamNameStyles}>
						{restrictString(TEAM, 45)}
					</FixtureLabels>
				</TeamScoreContainer>
			</StructureContentBlock>
		</StructureMainBlock>
	);
};
