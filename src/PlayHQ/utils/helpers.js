export const hasSponsors = (DATA)=>{
	return DATA.VIDEOMETA.Club.Sponsors.length > 0 ? DATA.TIMINGS.FPS_OUTRO:0
}