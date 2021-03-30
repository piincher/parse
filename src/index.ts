import fs from 'fs';

const matches = fs
	.readFileSync('football.csv', {
		encoding: 'utf-8'
	})
	.split('\n')
	.map((row: string): string[] => {
		return row.split(',');
	});

let manchestUnitedWin = 0;

for (let match of matches) {
	if (match[1] === 'Man United' && match[5] === 'H') {
		manchestUnitedWin++;
	} else if (match[1] === 'Man United' && match[5] === 'A') {
		manchestUnitedWin++;
	}
}

console.log(`man united ${manchestUnitedWin} win`);
