import React from 'react';

import {BasicDefaultTitle} from '../../../templates/Basic/Components/Header/LogoClubTitleHeader';
import {CricketBasicTop5Map} from '../../sport/cricket/Top5/CricketBasicTop5Map';
import DynamicTop5Sponsors from '../../Sponsors/body/Top5/DynamicTop5Sponsors';

export const CricketBasicTop5Build = ({TYPE, groupedSponsors}) => {

	return (
		<>
			<BasicDefaultTitle />
			<CricketBasicTop5Map TYPE={TYPE} />
			<DynamicTop5Sponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
