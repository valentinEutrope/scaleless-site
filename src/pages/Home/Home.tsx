

import Introduction from "components/Introduction";
import Gallery from "components/Gallery";
import Listen from "components/Listen";
import Bio from "components/Bio";
import Title from "components/Title";
import images from "config/images.json";

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <Title>{title}</Title>
      {children}
    </div>
  );
};

const Home = () => {
  const sections = [
    {
      title: "biographie",
      content: <Bio />,
    },
    {
      title: "galeries",
      content: <Gallery images={images.mistrust} />,
    },
    {
      title: "écoute",
      content: <Listen />,
    },
    {
      title: "évènements",
      content: <></>,
    },
  ];

  return (
    <div className="home">
      <Introduction />
      {sections.map((section) => (
        <Section key={`section-${section.title}`} title={section.title}>
          {section.content}
        </Section>
      ))}
    </div>
  );
};

export default Home;
