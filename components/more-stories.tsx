import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className='mb-8 text-3xl font-bold leading-tight tracking-tighter'>过往文章</h2>
      <ul className='timeline mb-32 grid grid-cols-1 gap-y-6'>
        {posts.map((post, index) => (
          <li key={index}>
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MoreStories
