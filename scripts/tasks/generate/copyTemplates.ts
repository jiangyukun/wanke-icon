import { src, dest } from 'gulp';

export default function copyTemplates() {
  return src(['scripts/build/templates/*.ts']).pipe(dest('src/base'));
}
