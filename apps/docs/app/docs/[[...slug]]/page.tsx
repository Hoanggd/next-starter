import { TocPortal } from '@/app/docs/[[...slug]]/_components/TocPortal'
import { Mdx } from '@/components/Mdx'
import { DashboardTableOfContents } from '@/components/Toc'
import { getTableOfContents } from '@/lib/toc'
import { ScrollArea } from '@workspace/ui/components/scroll-area'
import { allDocs } from 'contentlayer/generated'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface DocPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams(): Promise<DocPageProps['params'][]> {
  return allDocs.map((doc) => ({
    slug: doc._raw.flattenedPath.split('/'),
  }))
}

async function getDocFromParams({ params }: DocPageProps) {
  const { slug: slugArray } = await params
  const slug = slugArray?.join('/') || ''
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    return null
  }

  return doc
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
  }
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params })

  if (!doc) notFound()

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <>
      <article className="prose prose-gray prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mt-10 mb-6 max-w-full min-w-0 w-full py-10 prose-p:text-gray-800">
        <div className="mb-10 px-10 border-b">
          <h1 className="mb-0">{doc.title}</h1>
          <p className="text-gray-500 not-prose mt-2 mb-4">{doc.description}</p>
        </div>
        <Mdx code={doc.body.code} />
      </article>
      <TocPortal>
        <ScrollArea className="-ml-px h-[90%]">
          <div className="h-10"></div>
          <DashboardTableOfContents toc={toc} />
          <div className="h-10"></div>
        </ScrollArea>
      </TocPortal>
    </>
  )
}
