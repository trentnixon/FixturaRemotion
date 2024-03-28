// Cricket
import {Ladder} from './Ladder';
import {RosterPoster} from './RosterPoster';
import {Top5List} from './Top5List';
import {Fixtures} from './UpcomingFixtures';
import {WeekendResults} from './WeekendResults';
import {WeekendSingleGameResult} from './WeekendSingleGameResult';
 
export  const CRICKET_TEMPLATES_COMPONENTS = {
	Top5BattingList: Top5List,
	Top5BowlingList: Top5List,
	WeekendResults,
	WeekendSingleGameResult,
	UpComingFixtures: Fixtures,
	Ladder,
	RosterPoster,
}; 