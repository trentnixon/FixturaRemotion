// AssetList.js
// Cricket
import {CRICKET_TEMPLATES_COMPONENTS} from './Compositions/cricket/index';
import {NETBALL_TEMPLATES_COMPONENTS} from './Compositions/netball/index';
import {AFL_TEMPLATES_COMPONENTS} from './Compositions/afl/index';
export const TEMPLATES_COMPONENTS = {
	...CRICKET_TEMPLATES_COMPONENTS,
	...NETBALL_TEMPLATES_COMPONENTS,
	...AFL_TEMPLATES_COMPONENTS,
};
    