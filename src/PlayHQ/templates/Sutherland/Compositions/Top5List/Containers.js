import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {darkenColor, setOpacity} from '../../../../utils/colors';

const PlayerROW = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	margin: 6% 1% 1.8%;

	border-radius: 5px;
	border: 2px solid rgba(255, 255, 255, 0.1);
	background: rgba(255, 255, 255, 0.09);
	backdrop-filter: blur(20px);

	padding: 5px 5px 20px;
`;

const LogoBox = styled.div`
	position: absolute;
	top: -30px;
	left: -10px;
`;

export const PlayerPerformance = (props) => {
	const {THEME, i, FPS_MAIN} = props;
	const frame = useCurrentFrame();
	return (
		<PlayerROW
			style={{
				borderRight: `15px solid ${THEME.secondary}`,
				width: i === 0 ? '60%' : '46%',
				backgroundColor:
					i === 0
						? setOpacity(THEME.primary, 0.9)
						: setOpacity(THEME.primary, 0.4),
				opacity: interpolateOpacityByFrame(
					frame,
					15 * (5 - i + 1),
					40 * (5 - i + 1),
					0,
					1
				),
				transform: `translateY(${SpringToFrom(
					15 * (5 - i + 1),
					i === 0 ? -1440 : 1440,
					0,
					'Wobbly'
				)}px) translateY(${SpringToFrom(
					FPS_MAIN - 30 + i,
					0,
					i === 0 ? -1440 : 1440,
					'Wobbly'
				)}px)`,
			}}
		>
			{props.children}
		</PlayerROW>
	);
};

export const TeamLogoBox = (props) => {
	const {THEME, i} = props;
	return <LogoBox style={{}}>{props.children}</LogoBox>;
};
