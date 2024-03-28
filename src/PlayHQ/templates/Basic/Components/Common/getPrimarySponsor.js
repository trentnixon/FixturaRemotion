
export const getPrimarySponsor = (sponsorList) => {
    return sponsorList?.find((sponsor) => sponsor.isPrimary === true);
};