import { ReactElement, Suspense } from 'react'
import Introduction from 'components/Introduction'
import Gallery from 'components/Gallery'
import Listen from 'components/Listen'
import Bio from 'components/Bio'
import Title from 'components/Title'
import images from 'config/images.json'

interface SectionInterface {
  title: string
  children: ReactElement
}

const Section = ({ title, children }: SectionInterface) => {
  return (
    <section className="section">
      <Title>{title}</Title>
      {children}
    </section>
  )
}

const Home = () => {
  const sections = [
    {
      title: 'biographie',
      content: <Bio />,
    },
    {
      title: 'galeries',
      content: <Gallery images={images.official} />,
    },
    {
      title: 'écoute',
      content: <Listen />,
    },
    {
      title: 'évènements',
      content: <></>,
    },
  ]

  return (
    <div className="home">
      <Suspense fallback={<div>Chargement...</div>}>
        <Introduction />
      </Suspense>
      {sections.map((section) => (
        <Section key={`section-${section.title}`} title={section.title}>
          {section.content}
        </Section>
      ))}
    </div>
  )
}

export default Home
