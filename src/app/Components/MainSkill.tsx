import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",

  "react",

  "html5",
  "css3",
  "nodedotjs",
  "express",

  "firebase",

  "vercel",

  "git",

  "github",

  "visualstudiocode",

  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative  flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
