import { MatchReader } from './MatchReader';
import { MatchResults } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manchestUnitedWin = 0;

for (let match of matchReader.matches) {
	if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
		manchestUnitedWin++;
	} else if (match[1] === 'Man United' && match[5] === MatchResults.AwayWin) {
		manchestUnitedWin++;
	}
}

console.log(`man united ${manchestUnitedWin} win`);
