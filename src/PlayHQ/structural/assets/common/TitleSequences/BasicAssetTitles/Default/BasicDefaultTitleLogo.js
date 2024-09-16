import React from 'react';
import styled from 'styled-components';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {SpringToFrom} from '../../../../../../Animation/RemotionSpring';
import {EraseToMiddleFromTop} from '../../../../../../Animation/ClipWipe';
import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';
import PropTypes from 'prop-types'; // Optional: For prop type validation

// Utility function to determine image orientation
const getOrientation = (width, height) => {
	if (width > height) return 'landscape';
	if (height > width) return 'portrait';
	return 'square';
};

// BasicDefaultTitleLogo Component
export const BasicDefaultTitleLogo = () => {
	const {Club, TIMINGS} = useLayoutContext();

	// Validate Club.Logo
	if (
		!Club ||
		!Club.Logo ||
		!Club.Logo.url ||
		typeof Club.Logo.width !== 'number' ||
		typeof Club.Logo.height !== 'number'
	) {
		console.error(
			'BasicDefaultTitleLogo requires Club.Logo with url, width, and height to function properly.'
		);
		return null;
	}

	const {FPS_MAIN} = TIMINGS;
	const {width, height, url} = Club.Logo;

	const orientation = getOrientation(width, height);
	const aspectRatio = width / height;

	// Define base dimensions
	const BASE_HEIGHT = 150; // Base height in pixels for portrait and landscape

	// Determine container dimensions based on orientation
	let containerWidth;
	let containerHeight;

	if (orientation === 'portrait') {
		containerHeight = `${BASE_HEIGHT}px`;
		containerWidth = 'auto';
	} else if (orientation === 'landscape') {
		containerHeight = `${BASE_HEIGHT}px`;
		containerWidth = `${BASE_HEIGHT * aspectRatio}px`; // Width based on aspect ratio
	} else if (orientation === 'square') {
		containerHeight = '200px';
		containerWidth = '200px';
	}

	const logoStyles = {
		marginTop: '10px',
		transform: `translateY(${SpringToFrom(0, -100, 0, 'Springy100')}px)`,
		clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
		width: containerWidth,
		height: containerHeight,
	};

	return (
		<Logo orientation={orientation} style={logoStyles}>
			<ImageWrapper>
				<StyledImage
					src={Club.Logo}
					alt="Club Logo"
					orientation={orientation}
				/>
			</ImageWrapper>
		</Logo>
	);
};

// Styled Components

// Styled Logo container adjusts its size based on orientation
const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden; /* Prevents image overflow */
	width: ${({style}) => style.width || 'auto'};
	height: ${({style}) => style.height || 'auto'};
	transition: width 0.3s ease, height 0.3s ease; /* Smooth transition for dynamic sizing */
`;

// Wrapper to ensure the image scales correctly within the container
const ImageWrapper = styled.div`
	width: 100%;
	height: 100%;
`;

// StyledImage ensures the image fits within the container while maintaining aspect ratio
const StyledImage = styled(ImageWithFallback)`
	width: 100%;
	height: 100%;
	object-fit: contain; /* Maintains aspect ratio */
`;

// Optional: Define PropTypes if you plan to pass props to BasicDefaultTitleLogo
BasicDefaultTitleLogo.propTypes = {
	// No props currently, but can define if needed
};
