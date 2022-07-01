import { promisify } from 'util';
import * as path from 'path';
import * as fs from 'fs';
import { template } from 'lodash';

const writeFile = promisify(fs.writeFile);

const allIconParks = fs.readdirSync(path.resolve(__dirname, '../src/icon-park/icons')).map(filename => filename.replace('.tsx', ''))

function walk<T>(
  fn: (iconDef: any) => Promise<T>,
) {
  return Promise.all(
    allIconParks
      .map(svgIdentifier => {
        return fn({ svgIdentifier });
      }),
  );
}

async function generateIcons() {
  const iconsDir = path.join(__dirname, '../src/icons');
  try {
    await promisify(fs.access)(iconsDir);
  } catch (err) {
    await promisify(fs.mkdir)(iconsDir);
  }

  const render = template(`
// GENERATE BY ./scripts/generateIconPark.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import <%= svgIdentifier %> from '../icon-park/icons/<%= svgIdentifier %>';

export default <%= svgIdentifier %>;
`.trim());

  await walk(async ({ svgIdentifier }) => {
    // generate icon file
    await writeFile(
      path.resolve(__dirname, `../src/icons/${svgIdentifier}.tsx`),
      render({ svgIdentifier }),
    );
  });

  // generate icon index
  const entryText = allIconParks
    .sort()
    .map(svgIdentifier => `export { default as ${svgIdentifier} } from './${svgIdentifier}';`)
    .join('\n');

  await promisify(fs.appendFile)(
    path.resolve(__dirname, '../src/icons/index.tsx'),
    `
// GENERATE BY ./scripts/generateIconPark.ts
// DON NOT EDIT IT MANUALLY

${entryText}`,
  );
}

generateIcons();
