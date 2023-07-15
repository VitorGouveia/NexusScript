import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import { cache } from "react"

type Section = {
  name: string
  content: string
}

type Page = {
  id: string
  created_at: string
  sections: Section[]
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function generateStaticParams() {
  const { data: websites, error } = await supabase
    .from("websites")
    .select("slug")

  if (error) {
    console.log(error)
  }

  return (
    websites?.map(({ slug }) => ({
      slug,
    })) || []
  )
}

const getPageBySlug = cache(async (slug: string): Promise<Page | null> => {
  const { data, error } = await supabase
    .from("websites")
    .select("*")
    .eq("slug", slug)
    .single()

  if (error) {
    throw new Error("Failed inside supbase")
  }

  return {
    sections: data.sections,
    id: data.id,
    created_at: data.created_at,
  }
})

export const revalidate = 60

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPageBySlug(params.slug)

  if (!page) {
    notFound()
  }

  return (
    <div>
      <p>hello {params.slug}</p>

      {page?.sections.map((section) => (
        <li key={section.name}>
          section {section.name}, content {section.content}
        </li>
      ))}
    </div>
  )
}
