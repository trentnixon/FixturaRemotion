import {useCurrentFrame, Series} from 'remotion';

import {Sequence1} from './Sequence1';
import {Sequence2} from './Sequence2';
import {Sequence3} from './Sequence3';
import {Sequence4} from './Sequence4';

export const WebsiteHeaderSeries = () => {

	return (
		<Series>
			<Series.Sequence durationInFrames={90}>
				<Sequence1  />
			</Series.Sequence>
			<Series.Sequence durationInFrames={90}>
				<Sequence2 />
			</Series.Sequence>
			<Series.Sequence durationInFrames={90}>
				<Sequence3 />
			</Series.Sequence>
			<Series.Sequence durationInFrames={90}>
				<Sequence4 />
			</Series.Sequence>
		</Series>
	);
};
