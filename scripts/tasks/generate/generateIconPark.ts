import { src, dest } from 'gulp';
import through from 'through2';
import File from 'vinyl';
import merge from 'merge-stream';
import rename from 'gulp-rename';
import { getIdentifier } from '../../build/helpers';
import { IconPark } from '../../build/constants';

export default function generateIconPark() {
  return merge(
    src(['icon-park/*.css'])
      .pipe(dest('lib/icon-park/icons')),
    src(['icon-park/*.tsx'])
      .pipe(clearStyle())
      .pipe(
        rename((file) => {
          file.basename = getIdentifier({
            name: file.basename!,
            themeSuffix: IconPark
          });
          file.extname = '.tsx';
        })
      )
      .pipe(dest('src/icon-park/icons'))
  );
}

function clearStyle() {
  return through.obj(function(file: File, encoding, done) {
    if (file.isBuffer()) {
      const before = file.contents.toString(encoding);
      let after = before.replace('import styles from', 'import')
      after = after.replace(/className=\{`/, function(matchStr) {
        return matchStr + 'svg-icon-park '
      })
      after = after.replace(/styles\.(\S+)/g, function(matchStr, $1) {
        return `'${$1}'`
      })
      file.contents = Buffer.from(after);
      done(null, file);
    } else {
      done(null, file);
    }
  });
}
