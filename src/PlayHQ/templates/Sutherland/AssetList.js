// components.js

import {Ladder} from './Compositions/Ladder';
import { RosterPoster } from './Compositions/RosterPoster';
import {Top5List} from './Compositions/Top5List';
import {Fixtures} from './Compositions/UpcomingFixtures';
import {WeekendResults} from './Compositions/WeekendResults';
import {WeekendSingleGameResult} from './Compositions/WeekendSingleGameResult';

export const TEMPLATES_COMPONENTS = {
	WeekendResults: WeekendResults,
	UpComingFixtures: Fixtures, 
	Top5BattingList: Top5List,
	Top5BowlingList: Top5List,  
	Ladder: Ladder,
	WeekendSingleGameResult: WeekendSingleGameResult,
	RosterPoster:RosterPoster 
};