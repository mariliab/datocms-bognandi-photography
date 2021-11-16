import { StructuredText, Image } from "react-datocms";

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto mb-8 lg:mb-24">
      <div className="prose prose-lg prose-blue post-body">
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            if (record.__typename === "ImageBlockRecord") {
              return (
                <div className="mb-4">
                  {record.image.responsiveImage.title && (
                    <p className="text-xs italic">
                      {record.image.responsiveImage.title}
                    </p>
                  )}
                  <Image data={record.image.responsiveImage} />
                </div>
              );
            }

            return (
              <>
                <p>Don't know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />
      </div>
    </div>
  );
}
