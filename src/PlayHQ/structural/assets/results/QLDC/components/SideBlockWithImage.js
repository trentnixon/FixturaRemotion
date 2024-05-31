import {useCurrentFrame} from 'remotion';
import { FromRightToLeft } from "../../../../../Animation/ClipWipe";
import { interpolateOpacityByFrame } from "../../../../../Animation/interpolate";
import { ImageWithFallback } from "../../../../../utils/global/ImageWithFallback"
import { calculateImageDimensions } from "../../../../../utils/global/calculateImageDimensions";
import { ContainerStructureSidebarBlock } from "../../../common/Containers/QLDC/StructureSidebarBlock"

export const SideBlockWithImage = (props)=>{

	const {LOGO,} = props.OBJ;
    const frame = useCurrentFrame();
    const fallbackSrc = 'https://fallback.url/image.png';
    const IMGSIZING = [80, 80, 80];
    const calculateImage = calculateImageDimensions(LOGO, IMGSIZING);
    return(
        <ContainerStructureSidebarBlock>
				<ImageWithFallback
					src={LOGO}
					fallbackSrc={fallbackSrc}
					style={{
						...calculateImage,
						height: 'auto',
						width: '100%',
						marginRight: '10px',
						objectFit: 'cover',
						clipPath: FromRightToLeft(20, 'Wobbly'),
						opacity: interpolateOpacityByFrame(
							frame,
							props.FPS_SCORECARD - 30,
							props.FPS_SCORECARD,
							1,
							0
						),
					}}
				/>
			</ContainerStructureSidebarBlock>
    )
}