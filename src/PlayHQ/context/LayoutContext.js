import React, {createContext, useContext} from 'react';
import {
	getPrimarySponsor,
	hasSponsors,
} from '../structural/Sponsors/Utils/utils';

const LayoutContext = createContext();

export const LayoutProvider = ({children, TIMINGS, Club, settings}) => {
	const Heights = settings.heights;
	const hasPrimarySponsor = getPrimarySponsor(Club.Sponsors);
	const doesAccountHaveSponsors = hasSponsors(Club.Sponsors);
	// console.log('[Club.Sponsors]', hasPrimarySponsor, doesAccountHaveSponsors);

	const contextValue = {
		TIMINGS,
		Club,
		Heights,
		hasPrimarySponsor,
		doesAccountHaveSponsors,
		SponsorPositionAndAnimations: settings.SponsorPositionAndAnimations,
	};

	return (
		<LayoutContext.Provider value={contextValue}>
			{children}
		</LayoutContext.Provider>
	);
};

export const useLayoutContext = () => {
	return useContext(LayoutContext);
};
