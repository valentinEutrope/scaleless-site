import { getCloudinaryImage } from 'services/cloudinary/cloudinary'
import { AdvancedImage } from '@cloudinary/react'

const Introduction = () => {
  const cloudinaryImage = getCloudinaryImage('official_2', {
    size: {
      width: 4800,
      height: 2900,
    },
    quality: 90,
  })

  return (
    <section className="introduction">
      <AdvancedImage cldImg={cloudinaryImage} loading="lazy" alt="Scaleless official image band" />
    </section>
  )
}

export default Introduction
