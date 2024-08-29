import {useStylesContext} from '../../../../../context/StyleContext';
import {TopBarWithGradient} from '../../../../assets/common/Containers/CaloundraCC/TopBarWithGradient';

export const CaloundraCCFixtureGround = ({matchData}) => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Color} = StyleConfig;

	return (
		<TopBarWithGradient
			Gradient={Color.Background.Gradients.TriTone.Horizontal.SecondaryWhite}
			style={{
				...TextStyles.copySmallBold,
			}}
		>
			{matchData.ground}
		</TopBarWithGradient>
	);
};
