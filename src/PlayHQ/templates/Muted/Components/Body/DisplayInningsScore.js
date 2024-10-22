import styled from 'styled-components';
import {useStylesContext} from '../../../../context/StyleContext';

const InningsScore = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const Runs = styled.h3`
	color: ${(props) => props.color};
	margin: 0;
	text-transform: uppercase;
`;

const Overs = styled.h3`
	margin: 0;
	text-transform: uppercase;
	color: ${(props) => props.color};
`;

export const DisplayInningsScore = (props) => {
	const {FirstInnings, Type, score, overs} = props;
	const {StyleConfig, TextStyles, BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	const {Font} = StyleConfig;
	return (
		<InningsScore>
			<Runs
				color={TemplateVariation.useMutedColor}
				style={{
					...Font.Copy,
					...TextStyles.assetSubtitleBold,
				}}
			>
				<FirstInningsScore Type={Type} FirstInnings={FirstInnings} /> {score}
			</Runs>

			{overs && (
				<Overs
					color={TemplateVariation.useMutedColor}
					style={{
						...Font.Copy,
						...TextStyles.copyMedium,
					}}
				>{`(${overs})`}</Overs>
			)}
		</InningsScore>
	);
};

const FirstInningsScore = (props) => {
	const {FirstInnings, Type} = props;
	if (Type !== 'Two Day+' || FirstInnings === '1') return false;
	return FirstInnings;
};
