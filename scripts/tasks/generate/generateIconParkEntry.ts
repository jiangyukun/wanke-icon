import { src, dest } from 'gulp';
import merge from 'merge-stream';
import concat from 'gulp-concat';
import { resolve } from 'path';
import useTemplate from '../../plugins/use-template';
import { getIdentifier } from '../../build/helpers';
import { IconPark } from '../../build/constants';

export default function generateIconParkEntry() {
  return merge(
    src(['icon-park/*.tsx'])
      .pipe(
        useTemplate(getOptions({ themeSuffix: IconPark }))
      )
      .pipe(concat('index.ts'))
      .pipe(dest('src/icon-park'))
  )
}

function getOptions({
  themeSuffix
}) {
  return {
    tplSource: resolve(__dirname, '../../build/templates/exportIcon.ts.ejs'),
    mapFileToInterpolate: ({ name }) => {
      const identifier = getIdentifier({
        name,
        themeSuffix
      });
      return {
        identifier,
        path: `./${identifier}`
      };
    }
  };
}