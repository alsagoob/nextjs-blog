import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


// this function only runs in server side, so you can even query a db and sort it and it won't affect performance because it won't be sent to the browser.. user .query(SELECT * FROM ...)
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  const data = await res.json()

  return {
      props: {
        data
      } 
  }
}


export default function Home({ data }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! I'm Abdullah, and I'm trying to learn NextJS framework to be able to build e-commerce apps!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {data.map(({id, title, userId}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
              {title}
              </Link>
              <br/>
              <small className={utilStyles.lightText}>
              {id}
              </small>
              
            </li>
            ))}
          </ul>

        
      </section>
    </Layout>
  )
}

