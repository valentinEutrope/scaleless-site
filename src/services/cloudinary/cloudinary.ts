import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen'
import { auto } from '@cloudinary/url-gen/actions/resize'
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity'

const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME

if (!CLOUD_NAME) {
  throw new Error('VITE_CLOUD_NAME is not defined')
}

/**
 * Generate and return a CloudinaryImage
 * @param publicId image public id (ex : official_2)
 * @param options Cloudinary Options (width, format, etc.)
 */
export function getCloudinaryImage(
  publicId: string,
  options: { size?: { width: number; height: number }; quality?: number; format?: string } = {}
): CloudinaryImage {
  const { size, quality = 'auto', format = 'auto' } = options

  const cld = new Cloudinary({
    cloud: { cloudName: CLOUD_NAME },
  })

  const img = cld.image(publicId).format(format).quality(quality)

  if (size) {
    img.resize(auto().gravity(autoGravity()).width(size.width).height(size.height))
  }

  return img
}
