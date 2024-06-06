import styled from 'styled-components';
import { getPrimarySponsor } from '../Utils/utils';
import { calculateImageDimensions } from '../Utils/utils';
import { ImageWithFallback } from '../../../utils/global/ImageWithFallback';
import { SpringToFrom } from '../../../Animation/RemotionSpring';
import { EraseToMiddleFromTop } from '../../../Animation/ClipWipe';

// Styled Components
const IntroPrimarySponsorContainer = styled.div`
	position: absolute;
	height: 150px;
	width: 100%;
	left: 0px;
	bottom: 3px;
	z-index: 2000;
	flex-direction: row;
	justify-content: left;
	display: flex;
	align-items: center;
`;

const IntroPrimarySponsorImg = styled.div`
	flex-direction: column;
	justify-content: start;
	display: flex;
	align-items: start;
	width: auto;
	padding-left:10px;
`;

// Component
const IntroPrimarySponsorOnly = ({ FPS_INTRO, VIDEOMETA }) => {
	// Get primary sponsor details
	const primarySponsor = getPrimarySponsor(VIDEOMETA?.Club?.Sponsors);
	console.log("IntroPrimarySponsorOnly primarySponsor ", primarySponsor?.logo)
	// Return null if no primary sponsor is found
	if (!primarySponsor) return null;
 
	// Calculate image dimensions
	const IMGSIZING = [140, 180, 140];
	const PrimarySponsorStyles = calculateImageDimensions(primarySponsor.logo, IMGSIZING);

	// Check for null logo
	if (!primarySponsor.logo) {
		console.error("Primary sponsor logo is missing");
		return null;
	}

	return (
		<IntroPrimarySponsorContainer
			style={{
				transform: `translateY(${SpringToFrom(0, 300, 0, 'Wobbly')}px)`,
				clipPath: EraseToMiddleFromTop(FPS_INTRO - 40, 'Wobbly'),
			}}
		>
			<IntroPrimarySponsorImg>
				<ImageWithFallback
					src={primarySponsor.logo}
					style={PrimarySponsorStyles}
				/>
			</IntroPrimarySponsorImg>
		</IntroPrimarySponsorContainer>
	);
};

export default IntroPrimarySponsorOnly;
