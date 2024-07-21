import {Audio, AbsoluteFill, interpolate} from 'remotion';
import {CompositionLength} from '../../../../utils/helpers';
import {useVideoDataContext} from '../../../../context/VideoDataContext';

export const AssetFullAudioTrack = () => {
	const {DATA, Video} = useVideoDataContext();
	const useAudio = Video.audio_option;

	if (!useAudio) return null;

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
