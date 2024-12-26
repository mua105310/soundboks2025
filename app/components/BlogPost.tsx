import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

interface BlogPostProps {
  title: string
  content: string
  link: string
  linkText: string
}

export function BlogPost({ title, content, link, linkText }: BlogPostProps) {
  return (
    <article>
      <Card className="bg-zinc-900 border-none text-white mb-8">
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <div className="prose prose-invert max-w-none mb-6">
            {content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-gray-400 mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </div>
          <Link 
            href={link}
            className="text-blue-500 hover:underline font-semibold inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            title={`${linkText} - Moveboks.dk`}
          >
            {linkText} →
          </Link>
        </CardContent>
      </Card>
    </article>
  )
}

