import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className='border-t border-neutral-200 bg-neutral-50'>
      <Container>
        <div className='flex flex-col items-center justify-center py-4 lg:flex-row'>
          <a href={'https://github.com/wangrongding'} className='mx-3 font-bold hover:underline'>
            赣ICP备19003256号-2
          </a>
          <a href={'https://github.com/wangrongding'} className='mx-3 font-bold hover:underline'>
            ©荣顶 2018 - {new Date().getFullYear()}
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
