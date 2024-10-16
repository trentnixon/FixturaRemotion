import {hasSponsors as showSponsors} from '../structural/Sponsors/Utils/utils';

export const hasSponsors = (DATA) => {
	return showSponsors(DATA.VIDEOMETA.Club.Sponsors)
		? DATA.TIMINGS.FPS_OUTRO
		: 30;
};

export const CompositionLength = (DATA) => {
	return [
		DATA.TIMINGS.FPS_INTRO,
		hasSponsors(DATA),
		DATA.TIMINGS.FPS_MAIN,
	].reduce((a, b) => a + b, 0);
};
