import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b', {
        'border-neutral-800 bg-neutral-800 text-white': preview,
        'border-neutral-200 bg-neutral-50': !preview,
      })}
    >
      <Container>
        <div className='py-2 text-center text-sm'>
          The source code for this blog is available on{' '}
          <a href={EXAMPLE_PATH} target='_blank' className='inline-flex items-center underline transition-colors duration-200 hover:text-blue-600'>
            GitHub
            <span className=' h-6 w-6 bg-[url("/assets/img/github.svg")] bg-cover'></span>
          </a>
          .
        </div>
      </Container>
    </div>
  )
}

export default Alert
