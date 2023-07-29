import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return <h1 className='my-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-6xl md:leading-none lg:text-6xl'>{children}</h1>
}

export default PostTitle
