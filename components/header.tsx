import { BLOG_TITLE, BLOG_SUBTITLE, EXAMPLE_PATH } from '../lib/constants'
import Avatar from './avatar'

type Props = {
  isHome: boolean
}

const Header = ({ isHome }) => {
  return (
    <section className={`my-2 flex flex-col items-center justify-between md:flex-row ${isHome ? 'mx-4' : ''}`}>
      <div className='flex cursor-pointer items-center' onClick={() => (window.location.href = '/')}>
        <Avatar picture='/assets/img/avatar.png' />
        <h1 className='text-2xl font-bold leading-tight md:pr-2'>{BLOG_TITLE} - 个人博客</h1>
      </div>

      <div className='flex items-center gap-4'>
        <a className='underline transition-colors duration-200 hover:text-blue-600' href='https://nextjs.org/'>
          技术
        </a>
        <a className='underline transition-colors duration-200 hover:text-blue-600' href='https://nextjs.org/'>
          生活
        </a>
        <a className='underline transition-colors duration-200 hover:text-blue-600' href='https://nextjs.org/'>
          关于我
        </a>
        <a className='underline transition-colors duration-200 hover:text-blue-600' href={EXAMPLE_PATH} target='_blank'>
          Github
        </a>
      </div>
    </section>
  )
}

export default Header
