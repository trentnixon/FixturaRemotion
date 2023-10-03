/* export const hasSponsors = (DATA)=>{
	return DATA.VIDEOMETA.Club.Sponsors.length > 0 ? DATA.TIMINGS.FPS_OUTRO:0
} */

export const hasSponsors = (DATA) => {
	DATA.VIDEOMETA.Video.includeSponsors;
	if (DATA.VIDEOMETA.Club.Sponsors.length === 0) return 0;
	return DATA.VIDEOMETA.Video.includeSponsors ? DATA.TIMINGS.FPS_OUTRO : 0;
};

export const CompositionLength = (DATA) => {
	return [
		DATA.TIMINGS.FPS_INTRO,
		hasSponsors(DATA),
		DATA.TIMINGS.FPS_MAIN,
	].reduce((a, b) => a + b, 0);
};