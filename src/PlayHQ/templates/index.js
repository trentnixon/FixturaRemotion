import {Basic} from './Basic';
import {basicTypes, basicVariants} from './Basic/settings';

import {CNSW} from './CNSW';
import {cnswTypes, cnswVariants} from './CNSW/settings';

import {QLDC} from './QLDC';
import {CoastalCricketLeague} from './CoastalCricketLeague';
import {CaloundraCC} from './CaloundraCC';
import {CNSWREAL} from './CNSWreal';
import {Sixers} from './Sixers';
import {Thunder} from './Thunder';
import {qldcTypes, qldcVariants} from './QLDC/settings';
import {cccTypes, cccVariants} from './CaloundraCC/settings';
import {realcnswTypes, realcnswVariants} from './CNSWreal/settings';
import {sixersTypes, sixersVariants} from './Sixers/settings';
import { thunderTypes, thunderVariants } from './Thunder/settings';

// create the VariantData for the rest of the tempaltes

const TEMPLATES = [
	{
		Name: Basic,
		VariantData: basicVariants,
		Variants: basicTypes,
	},
	{
		Name: CNSW,
		VariantData: cnswVariants,
		Variants: cnswTypes,
	},
	{
		Name: QLDC,
		VariantData: qldcVariants,
		Variants: qldcTypes,
	},
	{
		Name: CoastalCricketLeague,
		VariantData: qldcVariants,
		Variants: qldcTypes,
	},
	{
		Name: CaloundraCC,
		VariantData: cccVariants,
		Variants: cccTypes,
	},
	{
		Name: CNSWREAL,
		VariantData: realcnswVariants,
		Variants: realcnswTypes,
	},
	{
		Name: Sixers,
		VariantData: sixersVariants,
		Variants: sixersTypes,
	},
	{
		Name: Thunder,
		VariantData: thunderVariants,
		Variants: thunderTypes,
	},
];

export default TEMPLATES;
