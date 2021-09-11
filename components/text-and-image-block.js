import { Image } from "react-datocms";
import BlockTitle from "../components/block-title";
import PostBody from "../components/post-body";

export default function TextAndImageBlock({ data }) {
  const { title, subtitle, image, cta, description } = data;

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full lg:w-2/3 xl:w-1/2 bg-white p-4 md:p-12 2xl:p-24">
        <BlockTitle title={title} subtitle={subtitle} />
        <PostBody content={description} />
        {cta && (
          <div className="py-4 flex">
            <a
              href={cta}
              className="py-4 text-xs tracking-widest font-bold text-center bg-beige-darkest hover:bg-beige-light text-white hover:text-beige-darkest flex-1 rounded-full"
            >
              KONTAKTA MIG
            </a>
          </div>
        )}
      </div>
      <div className="w-full lg:w-1/3 xl:w-1/2 relative flex justify-center shadow-lg">
        <Image data={image?.responsiveImage} />
      </div>
    </div>
  );
}
