import { loadFont } from "@remotion/google-fonts/Heebo";
import { AbsoluteFill } from "remotion";
import {NoiseComp} from '../Common/niose3D';
import {WebsiteHeaderSeries} from './expressionofinterest/index'

const { fontFamily } = loadFont();
export const WebsiteHeader = (props) => {
	const {DATA} = props;
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 100,
        fontFamily,
			}}
		>
			<WebsiteHeaderSeries DATA={DATA}/>
			<NoiseComp speed={0.005} circleRadius={30} maxOffset={60} />
		</AbsoluteFill>
	);
};
