import noImage from "src/assets/no-image-placeholder.webp";

export default (url: string): string => {
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
