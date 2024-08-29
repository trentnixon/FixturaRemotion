import {useStylesContext} from '../../../../../../context/StyleContext';
import {PresentationalAssetType} from '../../../../../../common/components/presentational/AssetType';

export const ThunderDefaultAssetTitle = () => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Font} = StyleConfig;
	const styleObj = {
		...Font?.Title,
		...TextStyles.introTitle,
		color: 'black',
		height: 'auto',
		textAlign: 'left',
		textTransform: 'uppercase',
	};

	const animationObj = {};

	return (
		<PresentationalAssetType styleObj={styleObj} animationObj={animationObj} />
	);
};
