import {ResultsTextDefault} from '../../../../../../common/components/copy/commonAssetTypes';
import {
	capitalizeFirstLetterOfName,
	restrictName,
} from '../../../../../../utils/copy';

export const DisplayPlayerName = ({Color, NAME, StyleConfig}) => {
	const {Font} = StyleConfig;
	const restrictedNames = ['Total', 'Extras', 'Private Player'];

	const TextStyles = {
		...Font.Copy,
		fontSize: '2em',
		color: Color,
		width: '70%',
		marginRight: '2px',
		letterSpacing: '-1px',
	};

	if (NAME && !restrictedNames.includes(NAME)) {
		return (
			<ResultsTextDefault customStyles={{...TextStyles}}>
				{restrictName(capitalizeFirstLetterOfName(NAME), 20)}
			</ResultsTextDefault>
		);
	}
	return null;
};
