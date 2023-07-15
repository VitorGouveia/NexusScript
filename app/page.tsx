import Image from "next/image"

import { Section } from "@/components/Section"
import { Form } from "@/components/Form"

import Rocket from "@/assets/rocket.svg"
import brush from "@/assets/brush.svg"
import work from "@/assets/work.svg"

const features = [
  {
    icon: Rocket,
    name: "Rápido e Descomplicado",
    description: "Crie seu site dos sonhos em segundos, sem complicações!",
  },
  {
    icon: brush,
    name: "Personalização Ilimitada",
    description: "Crie seu site dos sonhos em segundos, sem complicações!",
  },
  {
    icon: work,
    name: "Resultados Profissionais",
    description: "Um site profissional em segundos, sem esforço!",
  },
]

export default async function Home() {
  return (
    <>
      <Section className="flex flex-col items-center justify-center gap-16">
        <h1 className="text-center">
          Construa seu site dos sonhos em segundos!
        </h1>
        <p className="text-center text-zinc-400">
          Com Flash, preencha o formulário, escolha seu estilo e template, e
          veja seu site ganhar vida em 5 segundos. Acelere sua presença online
          com o poder do Flash!
        </p>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href="#criar-site"
              className="flex items-center justify-center rounded-full bg-amber-300 p-3 px-6 font-bold text-zinc-900 transition hover:bg-amber-200"
            >
              Começar já
            </a>

            <a
              href="criar-site"
              className="text-zinc-400 transition hover:text-zinc-300"
            >
              Criar conta
            </a>
          </div>

          <p className="text-base text-zinc-500">Sem cartão de crédito.</p>
        </div>

        <div className="aspect-video w-full rounded bg-zinc-900"></div>
      </Section>

      <Section className="flex flex-col items-center justify-center gap-16 px-6 py-32">
        <div className="w-max rounded border border-zinc-700 bg-zinc-900 px-4 py-2 font-bold uppercase text-amber-300">
          <p
            style={{
              lineHeight: "130%",
              letterSpacing: "0.1rem",
            }}
            className="text-base font-semibold"
          >
            RECURSOS
          </p>
        </div>

        <ul className="flex w-full items-center gap-8">
          {features.map((feature) => (
            <li
              key={feature.name}
              className="group flex w-full flex-col gap-4 rounded border border-white/10 p-5 transition hover:border-white/20"
            >
              <div className="w-max rounded border border-zinc-700 bg-zinc-900 p-4 transition group-hover:border-zinc-600">
                <Image
                  width={feature.icon.width}
                  height={feature.icon.height}
                  src={feature.icon.src}
                  alt="hello world"
                />
              </div>

              <h2 className="text-2xl font-medium">{feature.name}</h2>

              <p className="text-base font-normal text-zinc-400">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>

        <a
          href="#criar-site"
          className="flex items-center justify-center rounded-full bg-amber-300 p-3 px-6 font-bold text-zinc-900 transition hover:bg-amber-200"
        >
          Começar já
        </a>
      </Section>

      <Section className="flex flex-col items-center justify-center gap-8 px-6 py-32">
        <h2 className="text-5xl font-bold text-zinc-50">
          Não perca mais tempo com criadores de sites tradicionais
        </h2>

        <p className="text-2xl text-zinc-400">
          Esqueça os sites lentos e feios gerados por criadores de sites
          tradicionais, venha para o Flash e crie páginas rápidas otimizadas
          para mecânismos de buscas.
        </p>

        <a
          href="#criar-site"
          className="flex items-center justify-center rounded-full bg-amber-300 p-3 px-6 font-bold text-zinc-900 transition hover:bg-amber-200"
        >
          Começar já
        </a>
      </Section>

      <Section className="flex flex-col items-center justify-center gap-16 px-6 py-32">
        <h2 className="text-5xl font-bold text-zinc-50">
          Está na hora criar seu site dos sonhos.
        </h2>

        <p className="text-2xl text-zinc-400">
          Utilize o Flash Form™ para criar o seu site de forma instantânea.
          Basta apenas preencher o formulário e no final te entregaremos o site
          pronto.
        </p>

        <Form />
      </Section>
    </>
  )
}
