// Refactored version with error handling, optimization, and adherence to SOLID principles.

import styled from 'styled-components';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {Img} from 'remotion';
import PropTypes from 'prop-types'; // For prop type validation

// Logo Component - A reusable component for rendering logos with specific animations
const LogoComponent = ({FPS_MAIN, LOGO, isCircle = false}) => {
	// Validate inputs
	if (!FPS_MAIN || !LOGO) {
		console.error(
			'LogoComponent requires FPS_MAIN and LOGO to function properly.'
		);
		return null;
	}

	// Dynamic styles based on props
	const logoStyles = {
		marginTop: '0px',
		transform: `translateY(${SpringToFrom(0, -100, 0, 'Springy100')}px)`,
		clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
		borderRadius: isCircle ? '100%' : '0%',
	};

	return (
		<StyledLogo isCircle={isCircle} style={logoStyles}>
			<Img
				src={LOGO}
				width="100%"
				style={{
					borderRadius: '10%',
				}}
			/>
		</StyledLogo>
	);
};

// PropTypes for LogoComponent for better type checking
LogoComponent.propTypes = {
	FPS_MAIN: PropTypes.number.isRequired,
	LOGO: PropTypes.string.isRequired,
	isCircle: PropTypes.bool,
};

// Styled components
const StyledLogo = styled.div`
	width: ${({isCircle}) => (isCircle ? '150px' : '150px')};
	height: ${({isCircle}) => (isCircle ? '150px' : '150px')};
	border-radius: ${({isCircle}) => (isCircle ? '100%' : '0')};
	display: flex;
	align-items: center;
	justify-content: center;
`;

// Exported specific components utilizing the LogoComponent for specific use cases
export const HeaderLogo = ({FPS_MAIN, LOGO}) => {
	return <LogoComponent FPS_MAIN={FPS_MAIN} LOGO={LOGO} isCircle={false} />;
};

export const SingleResultHeaderLogo = ({FPS_MAIN, LOGO}) => {
	return <LogoComponent isCircle FPS_MAIN={FPS_MAIN} LOGO={LOGO} />;
};

// Dev notes:
// - Introduced PropTypes for prop type validation to improve code robustness.
// - Centralized the logo rendering logic into a single component (LogoComponent) to adhere to the DRY principle.
// - Added basic error handling by checking if essential props are provided.
// - Utilized a styled component for dynamic styling based on props, enhancing readability and maintainability.

// Recommendations for future improvements:
// - Consider enhancing the error handling mechanism to cover more edge cases.
// - If the animation logic becomes more complex, consider extracting it into a separate hook or component for better separation of concerns.

// Notes for an LLM:
// This file defines components for displaying animated logos in a web application, using styled-components for styling and remotion for animations. The components are part of the UI layer and are located in a project's component directory, specifically under `/components/UI/Logos`.
