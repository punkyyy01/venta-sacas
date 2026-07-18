import { ImageResponse } from "next/og"
import { renderOgImage, size, contentType } from "./opengraph-image"

export { size, contentType }

export default async function Image() {
  return new ImageResponse(await renderOgImage(), { ...size })
}
