import styled from 'styled-components';

// Define a function to determine font size based on text length
const getDynamicFontSize = (textLength) => {
	if (textLength <= 10) return '3em'; // Normal size
	if (textLength <= 20) return '2.4em'; // Large size
	return '1.8em'; // Extra-large size for longer texts
};

const AssetCategory = styled.h1`
	font-size: ${(props) => props.dynamicFontSize};
	line-height: 1.1em;
	margin: 0;
	font-style: normal;
	width:100%
`;

export const AssetCategoryLabel = (props) => {
	const {grouping_category, titleStyles} = props;
	const dynamicFontSize = getDynamicFontSize(grouping_category.length);

	return (
		<AssetCategory style={titleStyles} dynamicFontSize={dynamicFontSize}>
			{grouping_category}
		</AssetCategory>
	);
};



const VideoTitle = styled.h1`
	height: auto;
	text-transform: uppercase;
`;

export const DisplayVideoTitleTop = ({VALUE, AssetTitleStyles}) => {
	return <VideoTitle style={{...AssetTitleStyles}}>{VALUE}</VideoTitle>;
};
