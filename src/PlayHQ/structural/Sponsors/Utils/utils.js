// src/structural/Sponsors/Utils/utils.js

/**
 * Calculate image dimensions maintaining aspect ratio.
 * @param {Object} logo - Logo object containing width and height.
 * @param {Array} dimensions - Array with base width, base height, and max height.
 * @returns {Object} - Object containing calculated width and height.
 */
export const calculateImageDimensions = (logo, [baseWidth, baseHeight, maxHeight]) => {
  const aspectRatio = logo.width / logo.height;
  let width = baseWidth;
  let height = baseHeight;

  if (logo.height > maxHeight) {
    height = maxHeight;
    width = height * aspectRatio;
  }

  return { width, height };
};

/**
 * Get the primary sponsor from the sponsor list.
 * @param {Object} sponsorList - Sponsor list object.
 * @returns {Object|null} - Primary sponsor object or null if not found.
 */

export const getPrimarySponsor = (sponsorList) => {
  //console.log("sponsorList ", sponsorList.default.primary_sponsor)
  if (!sponsorList || !sponsorList.default || !sponsorList.default.primary_sponsor) {
    //console.error("Primary sponsor not found");
    return null;
  }
  return sponsorList.default.primary_sponsor;
};


export const getSponsorsForFixture = (sponsorList, fixture) => {
  console.log("sponsorList ", sponsorList, fixture)
  if (!sponsorList || !fixture) return [];
  const sponsors = [];

  // Add logic to get sponsors based on the fixture details (team, league, grade)
  if (fixture.gradeName) {
    sponsors.push(...sponsorList.grade.filter(s => s.level === fixture.gradeName));
  }
  if (fixture.teamHome || fixture.teamAway) {
    sponsors.push(...sponsorList.team.filter(s => s.level === fixture.teamHome || s.level === fixture.teamAway));
  }
  if (fixture.league) {
    sponsors.push(...sponsorList.league.filter(s => s.level === fixture.league));
  }

  return sponsors;
};


/**
 * Group sponsors into smaller arrays of a specified size.
 * @param {Array} sponsors - Array of sponsor objects.
 * @param {number} [groupSize=3] - Size of each group.
 * @returns {Array} - Array of grouped sponsor arrays.
 */
export const groupSponsors = (sponsors, groupSize = 3) => {
  const groupedSponsors = [];
  for (let i = 0; i < sponsors.length; i += groupSize) {
    groupedSponsors.push(sponsors.slice(i, i + groupSize));
  }
  return groupedSponsors;
};

/**
 * Calculate image size based on the number of sponsors.
 * @param {number} sponsorCount - Number of sponsors.
 * @returns {number} - Calculated image size.
 */
export const calculateImgSize = (sponsorCount) => {
  console.log("sponsorCount", sponsorCount)
  if (!sponsorCount || typeof sponsorCount !== 'number') {
    throw new Error('Invalid sponsor count. Expected a number.');
  }

  const baseSize = 200; // Base size for up to 3 sponsors
  if (sponsorCount <= 3) {
    return baseSize;
  } else if (sponsorCount <= 6) {
    return baseSize * 0.95; // Reduce size by 5% for 4-6 sponsors
  } else {
    return baseSize * 0.80; // Reduce size by 20% for 7-9 sponsors
  }
};
