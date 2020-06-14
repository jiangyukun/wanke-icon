import del from 'del';

export default function cleanDirectories() {
    return del([
        '../src/base',
        '../es',
        '../lib',
        '../inline-svg',
    ], {force: true});
}
