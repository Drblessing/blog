import React from 'react'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'

export default function Article({ slug, date, title, summary, tags, images }) {
  const src = Array.isArray(images) ? images[0] : images
  console.log(src)
  return (
    <li className="py-12">
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-start xl:gap-8 xl:space-y-0">
          <dl className="xl:col-span-1">
            {src ? (
              <dt className="mb-4">
                <Link href={`/blog/${slug}`} title={title}>
                  <Image
                    alt={title}
                    className="mx-2 rounded-lg"
                    width={225}
                    height={150}
                    src={src}
                  />
                  <span className="sr-only">{title}</span>
                </Link>
              </dt>
            ) : null}
            <dd className="sr-only">Published on</dd>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </dl>
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                    {title}
                  </Link>
                </h2>
                <div className="mt-3 flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
            </div>
            <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </article>
    </li>
  )
}
