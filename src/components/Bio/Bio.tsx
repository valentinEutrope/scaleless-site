import { PrismicRichText, useFirstPrismicDocument } from '@prismicio/react'

const Bio = () => {
  // const [document] = useFirstPrismicDocument();

  // const test = fetch(
  //   "/prismic-api?search?pageSize=1&ref=ZQ8QGRAAACoARTUQ&routes=%5B%7B%22type%22%3A%22home_bio%22%2C%22path%22%3A%22%2F%22%7D%5D&access_token=MC5aUThLYUJBQUFDc0FSU3lh.77-9L2dfGzcjL--_vU3vv70VbO-_ve-_ve-_ve-_vRIPFE3vv70l77-977-9Yzjvv73vv73vv73vv70_",
  //   { method: "GET" }
  // );

  return (
    <div id="bio" className="bio container">
      {/* {document && <PrismicRichText field={document.data.example_rich_text} />} */}
      Issu de la scène Toulousaine, Scaleless forge diverses compositions originales directement
      influencées par le Metal/rock alternatif des années 90’/2000’ et inspirées par une approche
      mélodique et prog. La troupe évolue dans un univers de dark fantasy et mêle une voix féminine
      rock et lyrique, des riffs lourds, des builds puissants, des grooves énergiques et des
      atmosphères captivantes dans divers horizons.
    </div>
  )
}

export default Bio
