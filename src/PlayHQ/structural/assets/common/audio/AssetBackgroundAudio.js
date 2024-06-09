import {Audio, AbsoluteFill, interpolate} from 'remotion';
import {CompositionLength} from '../../../../utils/helpers';

export const AssetFullAudioTrack = (props) => {
	const {useAudio, DATA} = props;

	if(!useAudio) return false
	return (
		<AbsoluteFill>
			<Audio
				volume={(f) =>
					interpolate(
						f,
						[CompositionLength(DATA) - 30, CompositionLength(DATA)],
						[0.7, 0],
						{extrapolateLeft: 'clamp'}
					)
				}
				src={useAudio}
			/>
		</AbsoluteFill>
	);
};
