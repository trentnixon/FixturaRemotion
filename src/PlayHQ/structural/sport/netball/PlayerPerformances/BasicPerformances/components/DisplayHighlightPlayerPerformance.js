import {ResultsTextDefault} from '../../../../../../common/components/copy/commonAssetTypes';

export const HighlightPlayerPerformance = ({
	Color,
	Name,
	Goals,
	StyleConfig,
}) => {
	const restrictedValues = ['Total', 'Extras', 'Private Player', ''];
	const {Font} = StyleConfig;

	const TextStyles = {
		...Font.Copy,
		fontSize: '1.8em',
		color: Color,
		textAlign: 'right',
		width: '30%',
		marginLeft: '10px',
		letterSpacing: '-2px',
		fontWeight: 800,
	};

	if (!restrictedValues.includes(Name) && !restrictedValues.includes(Goals)) {
		return (
			<ResultsTextDefault customStyles={{...TextStyles}}>
				{Goals}
			</ResultsTextDefault>
		);
	}
	return null;
};
