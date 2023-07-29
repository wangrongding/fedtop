import { BLOG_TITLE, BLOG_SUBTITLE, EXAMPLE_PATH } from '../lib/constants'

const Banner = () => {
  return (
    <section className='mb-6 flex h-[500px] flex-col items-center justify-center bg-[url("/assets/img/bg.jpg")] bg-cover bg-center sm:mb-12'>
      {/* <h1 className='text-3xl leading-tight tracking-tighter md:text-5xl'>
        {BLOG_TITLE} {BLOG_SUBTITLE}
      </h1> */}
      <p className='text-center text-2xl text-zinc-700'>Jumping across keycaps and characters, weaving in and out of codes and programmes.</p>
    </section>
  )
}

export default Banner
