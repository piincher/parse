import { MatchData } from './MatchData';

export interface Analyser {
	run(matches: MatchData[]): string;
}
export interface OutputTarget {
	print(report: string): void;
}

export class Summary {
	constructor(public analyser: Analyser, outputTarget: OutputTarget) {}

	buildAndPrintReport(matches: MatchData[]) {
		const output = this.analyser.run(matches);
	}
}
