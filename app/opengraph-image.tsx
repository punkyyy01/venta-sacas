import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export async function renderOgImage() {
  const imageData = await readFile(join(process.cwd(), "public/images/sacas-apiladas.jpg"))
  const imageSrc = `data:image/jpeg;base64,${imageData.toString("base64")}`

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#1e40af" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt=""
        width={480}
        height={630}
        style={{ width: 480, height: "100%", objectFit: "cover", objectPosition: "top" }}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 64px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, marginBottom: 16 }}>Sacas Chile</div>
        <div style={{ fontSize: 32, opacity: 0.9 }}>Sacas industriales 1.90m — Santiago, Chile</div>
      </div>
    </div>
  )
}

export default async function Image() {
  return new ImageResponse(await renderOgImage(), { ...size })
}
