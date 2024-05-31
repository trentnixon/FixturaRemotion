class SponsorMatcherUpcomingFixtures {
    constructor(fixtures, sponsors, groupSize = 2) {
      this.fixtures = fixtures;
      this.sponsors = sponsors || {};
      this.groupSize = groupSize;
    }
  
    splitIntoGroups() {
      return this.fixtures.reduce((acc, curr, i) => {
        if (i % this.groupSize === 0) {
          acc.push([curr]);
        } else {
          acc[acc.length - 1].push(curr);
        }
        return acc;
      }, []);
    }
  
    getSponsorsForFixture(fixture) {
      const sponsors = [];
  
      // Check for league sponsors
      if (fixture.assignSponsors && fixture.assignSponsors.competition && this.sponsors.league) {
        const leagueSponsors = this.sponsors.league.filter(
          (s) => s.id === fixture.assignSponsors.competition.id
        );
        if (leagueSponsors.length > 0) {
          sponsors.push(...leagueSponsors);
        }
      }
  
      // Check for team sponsors
      if (fixture.assignSponsors && fixture.assignSponsors.Team && this.sponsors.team) {
        const teamSponsors = this.sponsors.team.filter(
          (s) =>
            s.allocationName === fixture.assignSponsors.Team.teamHome ||
            s.allocationName === fixture.assignSponsors.Team.teamAway
        );
        if (teamSponsors.length > 0) {
          sponsors.push(...teamSponsors);
        }
      }
  
      // Check for grade sponsors
      if (fixture.assignSponsors && fixture.assignSponsors.grade && this.sponsors.grade) {
        const gradeSponsors = this.sponsors.grade.filter(
          (s) => s.id === fixture.assignSponsors.grade.id
        );
        if (gradeSponsors.length > 0) {
          sponsors.push(...gradeSponsors);
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
      const groupedFixtures = this.splitIntoGroups();
      const groupedSponsors = groupedFixtures.map((group) => {
        const sponsors = group
          .map((fixture) => this.getSponsorsForFixture(fixture))
          .flat();
  
        // Add the primary sponsor as the first item
        if (this.sponsors.default && this.sponsors.default.primary_sponsor) {
          sponsors.unshift(this.sponsors.default.primary_sponsor);
        }
  
        // Remove duplicates
        return this.removeDuplicateSponsors(sponsors);
      });
  
      return {
        groupedFixtures,
        groupedSponsors,
      };
    }
  }
  
  export default SponsorMatcherUpcomingFixtures;
  