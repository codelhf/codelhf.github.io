import fs from 'fs'
import path from 'path'

/**
 * 获取导航
 * @param {String} lang 语言
 * @returns {Array} 导航
 */
export function getNav(lang) {
    const nav = []
    const files = fs.readdirSync(path.resolve(__dirname, `../src/${lang}`))
    files.forEach(file => {
        const name = file
        nav.push({
            text: name,
            link: `/${lang}/${name}/`
        })
    })
    nav.sort((a, b) => {
        return a.text.localeCompare(b.text)
    })
    return nav
}

/**
 * 获取侧边栏
 * @param {Array} langs 语言列表
 * @returns {Array} 侧边栏
 */
export function getSidebar(langs) {
    const sidebar = {}
    langs.forEach(lang => {
        const files = fs.readdirSync(path.resolve(__dirname, `../src/${lang}`), { withFileTypes: true, recursive: true })
        // console.log(files)
        function files2sidebar(files, parentPath, parentName) {
            const items = []
            files.forEach(file => {
                if (file.parentPath === parentPath && !file.path.includes('public')) {
                    if (file.isDirectory()) {
                        const name = file.name
                        items.push({
                            text: name,
                            collapsed: false,
                            items: files2sidebar(files, file.path + '\\' + name, parentName + '/' + name)
                        })
                    } else {
                        const name = file.name.replace(/\.md$/, '')
                        items.push({
                            text: name,
                            link: `/${parentName}/${name}`
                        })
                    }
                }
            })
            return items
        }
        const items = files2sidebar(files, path.resolve(__dirname, `../src/${lang}`), `${lang}`)
        items.sort((a, b) => {
            return a.text.localeCompare(b.text)
        })
        sidebar[`/${lang}/`] = items
    })
    console.log(sidebar)
    return sidebar
}
