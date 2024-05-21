// src/structural/Sponsors/Utils/SponsorMatcherLadders.js

class SponsorMatcherLadders {
    constructor(ladders, sponsors) {
      this.ladders = ladders;
      this.sponsors = sponsors || {};
    }
  
    getSponsorsForLadder(ladder) {
      const sponsors = [];
  
      // Check for league sponsors
      if (ladder.assignSponsors && ladder.assignSponsors.competition && this.sponsors.league) {
        const leagueSponsors = this.sponsors.league.filter(
          (s) => s.id === ladder.assignSponsors.competition.id
        );
        if (leagueSponsors.length > 0) {
          sponsors.push(...leagueSponsors);
        }
      }
  
      // Check for grade sponsors
      if (ladder.assignSponsors && ladder.assignSponsors.grade && this.sponsors.grade) {
        const gradeSponsors = this.sponsors.grade.filter(
          (s) => s.id === ladder.assignSponsors.grade.id
        );
        if (gradeSponsors.length > 0) {
          sponsors.push(...gradeSponsors);
        }
      }
  
      // Check for team sponsors
      if (ladder.assignSponsors && ladder.assignSponsors.Team && this.sponsors.team) {
        const teamSponsors = this.sponsors.team.filter(
          (s) => s.level === ladder.assignSponsors.Team.name
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
      const groupedSponsors = this.ladders.map((ladder) => {
        let sponsors = this.getSponsorsForLadder(ladder);
  
        // Add the primary sponsor as the first item
        if (this.sponsors.default && this.sponsors.default.primary_sponsor) {
          sponsors.unshift(this.sponsors.default.primary_sponsor);
        }
  
        // Remove duplicates
        sponsors = this.removeDuplicateSponsors(sponsors);
  
        return sponsors;
      });
  
      return groupedSponsors;
    }
  }
  
  export default SponsorMatcherLadders;
  