const readDirP = require('readdirp');

const ignoredFilesRE = /(part-\d\d\d\.md$)|(^\d\d-certificates)/i;
const challengeDir = '../../../../curriculum/challenges/english';

readDirP(challengeDir, { fileFilter: ['*.md'], type: 'files' }).on(
  'data',
  file => {
    const match = file.path.match(ignoredFilesRE);
    if (!match) {
      console.log(file.path);
    }
  }
);
