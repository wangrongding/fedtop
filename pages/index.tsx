import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Banner from '../components/banner'
import Header from '../components/header'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Alert from '../components/alert'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  // 最新文章
  const heroPost = allPosts[0]
  // 文章列表
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Header isHome={true} />
        <Banner />
        <Container>
          {heroPost && <HeroPost title={heroPost.title} coverImage={heroPost.coverImage} date={heroPost.date} author={heroPost.author} slug={heroPost.slug} excerpt={heroPost.excerpt} />}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
        {/* <Alert /> */}
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { allPosts },
  }
}
