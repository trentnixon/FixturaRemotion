import {Audio, interpolate} from 'remotion';
import {CompositionLength} from '../../../../utils/helpers';

export const AssetFullAudioTrack = (props) => {
	const {useAudio, DATA} = props;
	if (useAudio === null) return false;
	return (
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
	);
};
