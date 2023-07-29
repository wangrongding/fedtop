import Container from './container'

const Footer = () => {
  return (
    <footer className='border-t border-neutral-200 bg-neutral-50'>
      <Container>
        <div className='mx-3 flex flex-col items-center justify-center gap-4 py-4 lg:flex-row'>
          <a href={'https://github.com/wangrongding'}>赣ICP备19003256号-2</a>
          <a href={'https://github.com/wangrongding'} className='underline'>
            ©荣顶 2018 - {new Date().getFullYear()}
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
