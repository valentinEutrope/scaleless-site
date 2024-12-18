import { ReactElement } from 'react'
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
    <div className="section">
      <Title>{title}</Title>
      {children}
    </div>
  )
}

const Home = () => {
  // const [document] = useSinglePrismicDocument('homepage')

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
      <Introduction />
      {sections.map((section) => (
        <Section key={`section-${section.title}`} title={section.title}>
          {section.content}
        </Section>
      ))}
    </div>
  )
}

export default Home
