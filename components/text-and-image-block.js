import { Image } from "react-datocms";
import BlockTitle from "../components/block-title";
import { createMarkup } from "../utils/help";

export default function TextAndImageBlock({ data }) {
  const { title, subtitle, text, image, cta } = data;

  console.log("text, ", text);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full lg:w-2/3 xl:w-1/2 bg-white p-4 md:p-12 2xl:p-24">
        <BlockTitle title={title} subtitle={subtitle} />
        <div
          className="mb-8 font-light text-beige-darkest"
          dangerouslySetInnerHTML={createMarkup(text)}
        />
      </div>
      <div className="w-full lg:w-1/3 xl:w-1/2 relative flex justify-center shadow-lg">
        <Image data={image?.responsiveImage} />
      </div>
    </div>
  );
}
