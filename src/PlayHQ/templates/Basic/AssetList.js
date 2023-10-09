// components.js

import { Ladder } from "./Compositions/Ladder";
import { Top5List } from "./Compositions/Top5List";
import { Fixtures } from "./Compositions/UpcomingFixtures";
import { WeekendResults } from "./Compositions/WeekendResults";
import { WeekendSingleGameResult } from "./Compositions/WeekendSingleGameResult";

export const TEMPLATES_COMPONENTS = {
  Top5BattingList: Top5List,
  Top5BowlingList: Top5List,
  WeekendResults:WeekendResults,
  WeekendSingleGameResult:WeekendSingleGameResult, 
  UpComingFixtures:Fixtures,
  Ladder:Ladder
};
