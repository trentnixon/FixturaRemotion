import styled from 'styled-components';
import {restrictString} from '../../../../utils/copy';
import {useStylesContext} from '../../../../context/StyleContext';

const TeamName = styled.h3`
	margin: 0;
	text-transform: uppercase;
	text-align: left;
	color: ${(props) => props.color};
`;

export const TeamNameDisplay = ({name}) => {
	const {StyleConfig, TextStyles, BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	const {Font} = StyleConfig;
	return (
		<TeamName
			color={TemplateVariation.useMutedColor}
			style={{
				...Font.Copy,
				...TextStyles.assetSubtitleMedium,
			}}
		>
			{restrictString(name, 32)}
		</TeamName>
	);
};
