import DateFormatter from './date-formatter'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }: Props) => {
  return (
    <div className='before::content-["*"] border-l-red before:absolute before:block before:border-l'>
      <div className='mb-3 flex items-center justify-between'>
        <h3 className='text-2xl leading-snug'>
          <Link as={`/posts/${slug}`} href='/posts/[slug]' className='underline'>
            {title}
          </Link>
          {/* <Link as={`/posts/dynamic-routing`} href='/posts/[slug]' className='underline'>
            {title}
          </Link> */}
        </h3>
        <div className='text-lg'>
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className='mb-4 text-lg leading-relaxed'> {excerpt} </div>
    </div>
  )
}

export default PostPreview
