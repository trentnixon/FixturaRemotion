import styled from 'styled-components';

const VideoText = styled.div`
	font-family: ${(props) => props.fontFamily || 'Arial'};
	font-size: ${(props) => props.fontSize || '16px'};
	color: ${(props) => props.color || '#000000'};
	line-height: ${(props) => props.lineHeight || '1.5em'};
`;

export const VideoTitle = styled(VideoText).attrs({as: 'h1'})`
	position: absolute;
	width: ${(props) => props.width || '100%'};
	height:  ${(props) => props.height || 'auto'};;
	left:  ${(props) => props.left || '110px'};
	top:  ${(props) => props.top || '0px'};
	margin: 0;
	font-weight: 900;
	text-align: ${(props) => props.align || 'center'};
	text-transform: uppercase;
	line-height: ${(props) => props.lineHeight || '1em'};

`;

export const VideoSubtitle = styled(VideoText).attrs({as: 'h2'})`
	font-weight: 700;
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const VideoParagraph = styled(VideoText).attrs({as: 'p'})`
	font-weight: ${(props) => props.fontWeight || 'normal'};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const VideoList = styled(VideoText).attrs({as: 'ul'})`
	font-weight: ${(props) => props.fontWeight || 'normal'};
	list-style: ${(props) => props.listStyle || 'disc'};
`;

export const VideoListItem = styled(VideoText).attrs({as: 'li'})`
	font-weight: ${(props) => props.fontWeight || 'normal'};
`;

export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
`;

export const FlexContainer = styled(Container)`
	display: flex;

	flex-direction: ${({flexDirection}) => flexDirection || 'row'};
	align-items: ${({alignItems}) => alignItems || 'stretch'};
	justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
	flex-wrap: ${({flexWrap}) => flexWrap || 'nowrap'};
	background: ${({background}) => background || 'transparent'};
`;

export const GridContainer = styled(Container)`
	display: grid;
	grid-template-columns: ${({columns}) => columns || 'repeat(4, 1fr)'};
	grid-template-rows: ${({rows}) => rows || 'auto'};
	grid-gap: ${({gap}) => gap || '15px'};
`;
