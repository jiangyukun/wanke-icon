import { series, parallel } from 'gulp';
import cleanDirectories from './scripts/tasks/preProcess/cleanDirectories';
import copyTemplates from './scripts/tasks/generate/copyTemplates';
import generateLibraryEntry from './scripts/tasks/generate/generateLibraryEntry';
import generateFilledIcons from './scripts/tasks/generate/generateFilledIcons';
import generateOutlinedIcons from './scripts/tasks/generate/generateOutlinedIcons';
import generateTwoToneIcons from './scripts/tasks/generate/generateTwoToneIcons';
import generateIconPark from './scripts/tasks/generate/generateIconPark';
import generateIconParkEntry from './scripts/tasks/generate/generateIconParkEntry';

export default series(
  // cleanDirectories,
  parallel(
    copyTemplates,
    generateFilledIcons,
    generateOutlinedIcons,
    generateTwoToneIcons,
    generateLibraryEntry,
    generateIconPark,
    generateIconParkEntry
  ),
);
