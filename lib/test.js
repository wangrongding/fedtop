const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

// const __dirname = path.resolve('./_posts')
const postsDirectory = path.join(process.cwd(), '_posts')

console.log('🚀🚀🚀 / postsDirectory', postsDirectory)

// 读取文件夹下的所有文件
const files = fs.readdirSync(postsDirectory).sort()

// 根据 md 文件中的 frontmatter.date 排序
const allPostsData = files.map((filename) => {
  const id = filename.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, filename)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterContent = matter(fileContents, { excerpt_separator: '<!-- more -->' })
  const { data, content, isEmpty, excerpt } = matterContent

  console.log('🚀🚀🚀 / matterContent', matterContent)
  return {
    id,
    fullPath,
    data,
    content,
    isEmpty,
    excerpt,
  }
})
// console.log('🚀🚀🚀 / allPostsData', allPostsData)

// const str = '---\nfoo: bar\n---\nThis is an excerpt.\n---\nThis is content'
// const file = matter(str, { excerpt: true })
// console.log('🚀🚀🚀 / file', file)

// const text = fs.readFileSync('/Users/wangrongding/Coding/fedtop/_posts/test.md', 'utf8')
// // console.log('🚀🚀🚀 / text', text)

// const file2 = matter(text, { excerpt_separator: '<!-- more -->' })
// console.log('🚀🚀🚀 / file2', file2)
// // 读取所有 md 文件的内容，并通过
// // function
