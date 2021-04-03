import { MatchReader } from './MatchReader';
import { MatchResults } from './MatchResult';
const reader = new MatchReader('football.csv');
reader.read();

let manchestUnitedWin = 0;

for (let match of reader.data) {
	if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
		manchestUnitedWin++;
	} else if (match[1] === 'Man United' && match[5] === MatchResults.AwayWin) {
		manchestUnitedWin++;
	}
}

console.log(`man united ${manchestUnitedWin} win`);
