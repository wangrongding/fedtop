import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
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

const HeroPost = ({ title, coverImage, date, excerpt, author, slug }: Props) => {
  return (
    <section className='flex'>
      <div>最新文章：</div>
      <div className=''>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className=''>
        <div>
          <h3 className='mb-4 text-4xl leading-tight lg:text-5xl'>
            <Link as={`/posts/${slug}`} href='/posts/[slug]' className='hover:underline'>
              {title}
            </Link>
          </h3>
          <div className='mb-4 text-lg md:mb-0'>
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className='mb-4 text-lg leading-relaxed'>{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  )
}

export default HeroPost