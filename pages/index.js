import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import GreetingChanger from '@/components/GreetingChanger'
import NewsletterForm from '@/components/NewsletterForm'
import Article from '@/components/Article'

const MAX_DISPLAY = 5
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-lime-500 dark:text-lime-500 sm:leading-10 md:leading-14">
            <div className="flex flex-wrap">
              <GreetingChanger /> 😎
            </div>
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Welcome to my corner of the internet, where I share my thoughts, experiences, and
            questionable humor with the world. You can read articles from my blog, Blockchain
            Mindset, or explore the rest of it. <br />
            Enjoy!
          </p>
        </div>
        <h1 className="text-2xl text-gray-400">
          <br />
          Lateset
        </h1>
        <br />
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug } = frontMatter
            return <Article {...frontMatter} key={slug} />
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
