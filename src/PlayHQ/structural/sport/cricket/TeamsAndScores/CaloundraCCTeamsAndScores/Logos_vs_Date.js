import styled from 'styled-components';
import {CCLvs} from '../../../../../common/svg/CCL_vs';
import {ImageWithFallback} from '../../../../../utils/global/ImageWithFallback';
import {generateLogoStyle} from './utils';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {P} from '../../../../../common/type/primitives';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Inner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LogoHolder = styled.div`
	margin: 0 2em;
`;
const VSContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const CaloundraCCLogoVsDate = ({matchData, logos, imgStyles}) => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;
	const {Font} = StyleConfig;

	const StyleOBJ = {
		...Font.Copy,
		...TextStyles.copySmall,
		textTransform: 'uppercase',
	};

	return (
		<Container>
			<Inner>
				<LogoHolder style={generateLogoStyle(FPS_SCORECARD)}>
					<ImageWithFallback
						src={logos[0]}
						style={{
							...imgStyles[0],
							borderRadius: '100%',
							height: '80px',
							width: '80px',
							objectFit: 'cover',
						}}
					/>
				</LogoHolder>
				<VSContainer>
					<CCLvs />
				</VSContainer>
				<LogoHolder style={generateLogoStyle(FPS_SCORECARD)}>
					<ImageWithFallback
						src={logos[1]}
						style={{
							...imgStyles[1],
							borderRadius: '100%',
							height: '80px',
							width: '80px',
							objectFit: 'cover',
						}}
					/>
				</LogoHolder>
			</Inner>
			<P {...StyleOBJ}>{matchData.date}</P>
		</Container>
	);
};
