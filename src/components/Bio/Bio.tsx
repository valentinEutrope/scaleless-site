import { PrismicRichText, useFirstPrismicDocument } from "@prismicio/react";

const Bio = () => {
  const [document] = useFirstPrismicDocument();

  console.log(document);

  return (
    <div id="bio" className="bio container">
      {/* {document && <PrismicRichText field={document.data.example_rich_text} />} */}
    </div>
  );
};

export default Bio;
