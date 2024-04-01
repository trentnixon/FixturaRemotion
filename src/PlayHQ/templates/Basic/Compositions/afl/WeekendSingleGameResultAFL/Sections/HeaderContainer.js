import styled from 'styled-components';
import {restrictString} from '../../../../../../utils/copy';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
	padding: 0px 10px; 
`;

const HeaderCopy = styled.p`
	font-family: ${(props) => props.fontFamily};
	font-style: normal;
	font-weight: 400;
	display: block;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	width: 100%;
	font-size: 1.5em;
	line-height: 1.2em;
	margin: 0;
`;

const HeaderItem = ({
	label,
	width,
	color,

	textAlign,
	StyleConfig,
}) => {
	const {Font} = StyleConfig;

	const commonStyles = {
		...Font.Copy,
		color,
		textAlign,
	};

	return (
		<HeaderCopy style={{...commonStyles, width}}>
			{restrictString(label, 50)}
		</HeaderCopy>
	);
};

export const HeaderContainer = (props) => {
	const {matchData, THEME, fontFamily, StyleConfig} = props;
	const {Color} = StyleConfig;
	const {ground, round, grade} = matchData;

	return (
		<>
			<HeaderContainerStyles THEME={THEME}>
				{[ground, round].map((value, ii) => {
					return (
						<HeaderItem
							key={ii}
							StyleConfig={StyleConfig}
							label={value}
							width="100%"
							fontFamily={fontFamily}
							color={Color.Primary.BackgroundContractColor}
							textAlign="center"
						/>
					);
				})}
			</HeaderContainerStyles>
		</>
	);
};
