import {Basic} from './Basic';
import {basicTypes, basicVariants} from './Basic/settings';
import {CNSW} from './CNSW';
import {cnswTypes, cnswVariants} from './CNSW/settings';
import {QLDC} from './QLDC';
import {qldcTypes, qldcVariants} from './QLDC/settings';
import {CoastalCricketLeague} from './CoastalCricketLeague';
import {CaloundraCC} from './CaloundraCC';
import {cccTypes, cccVariants} from './CaloundraCC/settings';
import {CNSWREAL} from './CNSWreal';
import {realcnswTypes, realcnswVariants} from './CNSWreal/settings';
import {Sixers} from './Sixers';
import {sixersTypes, sixersVariants} from './Sixers/settings';
import {Thunder} from './Thunder';
import {thunderTypes, thunderVariants} from './Thunder/settings';
import {Muted} from './Muted';
import {mutedTypes, mutedVariants} from './Muted/settings';
import {Kayo} from './kayo';
import {kayoTypes, kayoVariants} from './kayo/settings';

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
	{
		Name: Muted,
		VariantData: mutedVariants,
		Variants: mutedTypes,
	},
	{
		Name: Kayo,
		VariantData: kayoVariants,
		Variants: kayoTypes,
	},
];

export default TEMPLATES;
