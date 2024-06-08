/* eslint-disable camelcase */
/* eslint-disable no-undef */
// DATASETS
// Cricket  
import DATA_RESULTS from './Cricket/Cricket_Results.json';
import DATA_FIXTURES from './Cricket/Cricket_upcoming.json';
import DATA_TOP5_RUNS from './Cricket/Cricket_Top5Batters.json';
import DATA_TOP5_WICKETS from './Cricket/Cricket_Top5Bowlers.json';
import DATA_LADDER_V2 from './Cricket/Cricket_Ladder.json';
import DATA_WEEKENDRESULTSV2 from './Cricket/Cricket_WeekendResultsSingle.json';
import DATA_ROSTERPOSTER from './Cricket/Cricket_Roster.json';
       
// Netball 
import DATA_NetballLadder from './Netball/Netball_Ladder.json';
import DATA_Netball_FIXTURES from './Netball/NetBall_UpComingFixtures.json';
import DATA_Netball_Results from './Netball/Netball_Results.json';
import DATA_Netball_WeekendSingleGameResultNetball from './Netball/Netball_WeekendSingleGameResultNetball.json';
// AFL 
import DATA_AFL_Ladder from './AFL/AFL_Ladder.json';
import DATA_AFL_FIXTURES from './AFL/AFL_UpComingFixtures.json';
import DATA_AFL_Results from './AFL/AFL_Results.json';
import AFL_WeekendSingleGameResultAFL from './AFL/AFL_WeekendSingleGameResultAFL.json';
import Top5AFLScorers from './AFL/Top5AFLScorers.json';
   
const DATASET = { 
    DATA_RESULTS,
    DATA_FIXTURES,
    DATA_TOP5_RUNS,
    DATA_TOP5_WICKETS,
    DATA_LADDER_V2,
    DATA_WEEKENDRESULTSV2,
    DATA_ROSTERPOSTER,
    DATA_NetballLadder,
    DATA_Netball_FIXTURES,
    DATA_Netball_Results,
    DATA_Netball_WeekendSingleGameResultNetball,
    DATA_AFL_Ladder,
    DATA_AFL_FIXTURES,
    DATA_AFL_Results,
    AFL_WeekendSingleGameResultAFL,
    Top5AFLScorers
};

export default DATASET;