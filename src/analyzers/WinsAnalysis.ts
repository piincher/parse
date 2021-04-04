import { MatchData } from '../MatchData';
import { MatchResults } from '../MatchResult';
import { Analyser } from '../Summary';

export class WinsAnalysis implements Analyser {
	constructor(public team: string) {}

	run(matches: MatchData[]): string {
		let wins = 0;

		for (let match of matches) {
			if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
				wins++;
			} else if (match[1] === 'Man United' && match[5] === MatchResults.AwayWin) {
				wins++;
			}
		}

		return `Team : ${this.team} won ${wins}`;
	}
}
