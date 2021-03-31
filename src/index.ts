import { CsvFileReader } from './CsvFileReader';
const reader = new CsvFileReader('football.csv');
reader.read();

enum MatchResults {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D'
}
let manchestUnitedWin = 0;

for (let match of reader.data) {
	if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
		manchestUnitedWin++;
	} else if (match[1] === 'Man United' && match[5] === MatchResults.AwayWin) {
		manchestUnitedWin++;
	}
}

console.log(`man united ${manchestUnitedWin} win`);
