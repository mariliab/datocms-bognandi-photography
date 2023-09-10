import { Image } from "react-datocms";
import BlockTitle from "../components/block-title";
import PostBody from "../components/post-body";

export default function TextAndImageBlock({ data }) {
  const { title, subtitle, image, cta, description } = data;

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className="flex-col-reverse flex flex-col lg:flex-row gap-4 items-stretch max-w-screen-xl px-4 md:px-0 mx-auto">
        <div className="w-full lg:w-1/2">
          <Image
            data={{
              ...image?.responsiveImage,
              alt: image?.responsiveImage.title,
            }}
          />
        </div>
        <div className="bg-white p-4 lg:p-12 flex flex-col justify-center w-full lg:w-1/2">
          <BlockTitle title={title} subtitle={subtitle} />
          <PostBody content={description} />
          {cta && (
            <div className="py-4 flex">
              <a
                href={cta}
                className="font-normal px-12 pt-4 pb-3 bg-green-olive text-white hover:bg-green-olive transition-all duration-200"
              >
                KONTAKTA MIG
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
