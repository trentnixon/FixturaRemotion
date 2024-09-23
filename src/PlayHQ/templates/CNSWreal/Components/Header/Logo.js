import React from 'react';
import styled from 'styled-components';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {Img} from 'remotion';
import PropTypes from 'prop-types';

// Utility function to determine image orientation
const getOrientation = (width, height) => {
	if (width > height) return 'landscape';
	if (height > width) return 'portrait';
	return 'square';
};

// Logo Component - A reusable component for rendering logos with specific animations
const LogoComponent = ({FPS_MAIN, LOGO, isCircle = false}) => {
	// Validate inputs
	if (!FPS_MAIN || !LOGO || !LOGO.url || !LOGO.width || !LOGO.height) {
		console.error(
			'LogoComponent requires FPS_MAIN and LOGO with url, width, and height to function properly.'
		);
		return null;
	}

	const orientation = getOrientation(LOGO.width, LOGO.height);

	// Determine styles based on orientation
	let maxWidth;
	let maxHeight;
	if (orientation === 'portrait') {
		maxHeight = 150;
	} else if (orientation === 'landscape') {
		maxHeight = 150;
	} else if (orientation === 'square') {
		maxWidth = 150;
		maxHeight = 150;
	}

	const logoStyles = {
		marginTop: '0px',
		transform: `translateY(${SpringToFrom(0, -100, 0, 'Springy100')}px)`,
		clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
		borderRadius: isCircle ? '100%' : '0%',
	};

	return (
		<StyledLogo isCircle={isCircle} style={logoStyles}>
			<StyledImg
				src={LOGO.url}
				alt="Logo"
				orientation={orientation}
				maxWidth={maxWidth}
				maxHeight={maxHeight}
			/>
		</StyledLogo>
	);
};

// PropTypes for LogoComponent for better type checking
LogoComponent.propTypes = {
	FPS_MAIN: PropTypes.number.isRequired,
	LOGO: PropTypes.shape({
		url: PropTypes.string.isRequired,
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
	}).isRequired,
	isCircle: PropTypes.bool,
};

// Styled components
const StyledLogo = styled.div`
	width: ${({isCircle}) => (isCircle ? '150px' : 'auto')};
	height: ${({isCircle}) => (isCircle ? '150px' : 'auto')};
	border-radius: ${({isCircle}) => (isCircle ? '100%' : '0')};
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden; /* Ensures the image doesn't overflow the container */
`;

const StyledImg = styled(Img)`
	max-width: ${({maxWidth}) => (maxWidth ? `${maxWidth}px` : '100%')};
	max-height: ${({maxHeight}) => (maxHeight ? `${maxHeight}px` : '100%')};
	width: auto;
	height: auto;
	border-radius: ${({orientation}) =>
		orientation === 'square' ? '0%' : '10%'};
`;

// Exported specific components utilizing the LogoComponent for specific use cases
export const HeaderLogo = ({FPS_MAIN, LOGO}) => {
	return <LogoComponent FPS_MAIN={FPS_MAIN} LOGO={LOGO} isCircle={false} />;
};

export const SingleResultHeaderLogo = ({FPS_MAIN, LOGO}) => {
	return <LogoComponent isCircle FPS_MAIN={FPS_MAIN} LOGO={LOGO} />;
};

// Dev notes:
// - Corrected PropTypes to accurately represent the LOGO object structure.
// - Added a utility function to determine image orientation.
// - Applied dynamic maxWidth and maxHeight based on orientation while preserving aspect ratio.
// - Ensured the container (`StyledLogo`) adapts its size based on whether it's circular.
// - Used `overflow: hidden` in `StyledLogo` to prevent image overflow.
// - Set `border-radius` conditionally in `StyledImg` for square images.
