import {AbsoluteFill, Audio} from 'remotion';

export const UseSoundEffect = (props) => {
	const {useSoundEffect, startFrom} = props;

	return (
		<AbsoluteFill>
			<Audio src={useSoundEffect} />
		</AbsoluteFill>
	);
};
