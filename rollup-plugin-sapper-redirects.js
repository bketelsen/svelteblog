
import fs from 'fs'
import path from 'path'
import { createFilter } from 'rollup-pluginutils'
import mkdirp from 'mkdirp';
import matter from 'gray-matter';


const importExtensions = ['.md', '.markdown']

export default (options = {}) => {
    const extensions = options.extensions || importExtensions
    const filter = createFilter(options.include || ['**/*.md', '**/*.markdown'], options.exclude)
    const extractDir = options.extractDir || null

    let urlExtract = ''

    return {
        name: 'sapper-redirects',
        transform(code, id) {
            if (!filter(id)) { return null }
            if (extensions.indexOf(path.extname(id)) === -1) { return null }

            const { data } = matter(code)
            const { url } = data
            if (url) {
                urlExtract += url + "\t" + "/blog" + url + "\n"
            }
            return null
        },

        onwrite(opts) {
            if (urlExtract) {
                const destPath =
                    path.join(path.dirname(extractDir), "_redirects")
                return new Promise((resolveDir, rejectDir) => {
                    mkdirp(path.dirname(destPath), err => {
                        if (err) { rejectDir(err) }
                        else resolveDir()
                    });
                }).then(() => {
                    return new Promise((resolveExtract, rejectExtract) => {

                        fs.writeFile(destPath, urlExtract, err => {
                            if (err) { rejectExtract(err) }
                            resolveExtract()
                        })
                    })
                })
            }

            return null
        },
    }
}