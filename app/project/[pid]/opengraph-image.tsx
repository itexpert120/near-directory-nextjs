/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

const TITLE_MAX_CHARACTERS = 35;
const DESCRIPTION_MAX_CHARACTERS = 140;

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: { pid: string } }) {
  // Font
  const manropeSemiBold = fetch(
    new URL("./Manrope-SemiBold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  // project data
  const project = await fetch(
    `https://nearcatalog.xyz/wp-json/nearcatalog/v1/project?pid=${params.pid}`,
  )
    .then((res) => res.json())
    .catch((error) => {
      throw new Error("Error fetching project data", error);
    });

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          404 Project Not Found!
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: "Manrope",
            data: await manropeSemiBold,
            style: "normal",
            weight: 400,
          },
        ],
      },
    );
  }

  const { name: title, tagline: description } = project.profile;

  const truncatedTitle =
    title.length > TITLE_MAX_CHARACTERS
      ? `${Array.from(title).slice(0, TITLE_MAX_CHARACTERS).join("")}...`
      : title;

  const truncatedDescription =
    description.length > DESCRIPTION_MAX_CHARACTERS
      ? `${Array.from(description).slice(0, DESCRIPTION_MAX_CHARACTERS).join("")}...`
      : description;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: "linear-gradient(to right, #4b6cb7, #182848)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          gap: "2rem",
        }}
      >
        <img
          src={project.profile.image.url}
          alt={project.profile.name}
          style={{
            width: 192,
            height: 192,
            borderRadius: 9999,
            objectFit: "cover",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            maxWidth: 800,
          }}
        >
          <span>{truncatedTitle}</span>
          <span style={{ fontSize: "2rem", wordBreak: "break-all" }}>
            {truncatedDescription}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Manrope",
          data: await manropeSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}