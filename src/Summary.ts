import { MatchData } from './MatchData';

export interface Analyser {
	run(matches: MatchData[]): string;
}
export interface OutputTarget {
	print(report: string): void;
}

export class Summary {
	constructor(analyser: Analyser, outputTarget: OutputTarget) {}
}
