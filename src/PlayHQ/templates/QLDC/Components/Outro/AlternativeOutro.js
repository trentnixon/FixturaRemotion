import {Sequence, Series} from 'remotion';

export const AlternativeOutro = () => {
	return (
		<Sequence>
			<Series>
				<Series.Sequence durationInFrames={30} layout="none">
					{' '}
				</Series.Sequence>
			</Series>
		</Sequence>
	);
};