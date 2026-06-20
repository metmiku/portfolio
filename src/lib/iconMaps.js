import {
	Analytics,
	AnalyticsIcon,
	ApiIcon,
	CloudIcon,
	Code,
	CodeIcon,
	CodeSquareIcon,
	ComputerTerminal01FreeIcons,
	CpuIcon,
	DatabaseIcon,
	File01Icon,
	FrameworksIcon,
	LanguageSquareIcon,
	LayersIcon,
	Rocket01Icon,
	ShieldIcon
} from '@hugeicons/core-free-icons';

export { Code as defaultLinkIcon, CpuIcon as defaultEnvIcon };

/** @type {Record<string, any>} */
export const iconByKey = {
	api: ApiIcon,
	cloud: CloudIcon,
	code: CodeIcon,
	code_blocks: CodeSquareIcon,
	data_object: CodeSquareIcon,
	database: DatabaseIcon,
	description: File01Icon,
	go: CodeSquareIcon,
	javascript: CodeIcon,
	language: LanguageSquareIcon,
	layers: LayersIcon,
	memory: CpuIcon,
	nextjs: FrameworksIcon,
	query_stats: AnalyticsIcon,
	rocket_launch: Rocket01Icon,
	shield: ShieldIcon,
	terminal: ComputerTerminal01FreeIcons
};

export const defaultProjectIcon = Analytics;
