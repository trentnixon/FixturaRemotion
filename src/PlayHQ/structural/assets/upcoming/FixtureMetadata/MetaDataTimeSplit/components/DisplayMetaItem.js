import { FromTopToBottom } from "../../../../../../Animation/ClipWipe";
import { interpolateOpacityByFrame } from "../../../../../../Animation/interpolate";
import { ResultsMetaData } from "../../../../../../common/components/copy/commonAssetTypes";
import { restrictString } from "../../../../../../utils/copy";

const isFrameInRange = (frame, {Start, End}) => frame >= Start && frame < End;

export const DisplayMetaItem = ({
	label,
	width,
	color,
	ComponentFPS,
	frame,
	textAlign,
	StyleConfig,
}) => {
	const {Font} = StyleConfig;
	const hide = !isFrameInRange(frame, ComponentFPS); // Determine visibility

	const AnimationStyles = {
		clipPath: FromTopToBottom(ComponentFPS.Start, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			ComponentFPS.End - 15,
			ComponentFPS.End,
			1,
			0
		),
	};
	const commonStyles = {
		...Font.Copy,
		color,
		textAlign,
		width,
		fontWeight: 400,
		letterSpacing: '-0.015em',
		textTransform: 'uppercase',
		fontSize: '1.5em',
		lineHeight: '1.2em',
		display: hide ? 'none' : 'block',
	};

	return (
		<ResultsMetaData customStyles={{...commonStyles, ...AnimationStyles}}>
			{restrictString(label, 50)}
		</ResultsMetaData>
	);
};