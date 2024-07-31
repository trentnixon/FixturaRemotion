import styled from 'styled-components';
import {useStylesContext} from '../../../../../context/StyleContext';
import {TopBarWithGradient} from '../../../../assets/common/Containers/CaloundraCC/TopBarWithGradient';

export const CaloundraCCFixtureGround = ({matchData}) => {
	const {StyleConfig} = useStylesContext();
	const {Color} = StyleConfig;

	return (
		<TopBarWithGradient
			Gradient={Color.Background.Gradients.TriTone.Horizontal.SecondaryWhite}
		>
			{matchData.ground}
		</TopBarWithGradient>
	);
};
