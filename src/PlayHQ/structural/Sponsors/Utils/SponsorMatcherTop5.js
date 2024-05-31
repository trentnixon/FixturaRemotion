class SponsorMatcherTop5 {
  constructor(top5Data, sponsors) {
    this.top5Data = top5Data;
    this.sponsors = sponsors || {};
  }

  getSponsorsForTop5Item(item) {
    const sponsors = [];

    // Check for league sponsors
    if (item.assignSponsors && item.assignSponsors.competition && this.sponsors.league) {
      const leagueSponsors = this.sponsors.league.filter(
        (s) => s.id === item.assignSponsors.competition.id
      );
      if (leagueSponsors.length > 0) {
        sponsors.push(...leagueSponsors);
      }
    }

    // Check for grade sponsors
    if (item.assignSponsors && item.assignSponsors.grade && this.sponsors.grade) {
      const gradeSponsors = this.sponsors.grade.filter(
        (s) => s.id === item.assignSponsors.grade.id
      );
      if (gradeSponsors.length > 0) {
        sponsors.push(...gradeSponsors);
      }
    }

    // Check for team sponsors
    if (item.assignSponsors && item.assignSponsors.Team && this.sponsors.team) {
      const teamSponsors = this.sponsors.team.filter(
        (s) =>
          s.allocationName === item.assignSponsors.Team.name
      );
      if (teamSponsors.length > 0) {
        sponsors.push(...teamSponsors);
      }
    }

    return sponsors;
  }

  removeDuplicateSponsors(sponsors) {
    const uniqueSponsors = [];
    const sponsorIds = new Set();

    sponsors.forEach((sponsor) => {
      if (!sponsorIds.has(sponsor.sponsorId)) {
        sponsorIds.add(sponsor.sponsorId);
        uniqueSponsors.push(sponsor);
      }
    });

    return uniqueSponsors;
  }

  matchSponsors() {
    const allSponsors = this.top5Data.flatMap((item) => this.getSponsorsForTop5Item(item));

    // Add the primary sponsor as the first item
    if (this.sponsors.default && this.sponsors.default.primary_sponsor) {
      allSponsors.unshift(this.sponsors.default.primary_sponsor);
    }

    // Remove duplicates
    const uniqueSponsors = this.removeDuplicateSponsors(allSponsors);

    return uniqueSponsors;
  }
}

export default SponsorMatcherTop5;
