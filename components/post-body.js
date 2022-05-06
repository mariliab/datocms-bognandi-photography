import { StructuredText, Image } from "react-datocms";
import VideoPlayer from "../components/video-player";
import { useRef } from "react";

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto mb-8 lg:mb-24">
      <div className="prose prose-lg prose-blue post-body">
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case "ImageBlockRecord": {
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
              case "BehindTheScenesVideoRecord": {
                const playerRef = useRef(null);
                const videoJsOptions = {
                  autoplay: true,
                  controls: true,
                  responsive: true,
                  fluid: true,
                  sources: [
                    {
                      src: record.video.video.streamingUrl,
                    },
                  ],
                };
                const handlePlayerReady = (player) => {
                  playerRef.current = player;

                  // You can handle player events here, for example:
                  player.on("waiting", () => {
                    player.log("player is waiting");
                  });

                  player.on("dispose", () => {
                    player.log("player will dispose");
                  });
                };
                return (
                  <VideoPlayer
                    options={videoJsOptions}
                    onReady={handlePlayerReady}
                  />
                );
              }
              default:
                return (
                  <>
                    <p>Don't know how to render a block!</p>
                    <pre>{JSON.stringify(record, null, 2)}</pre>
                  </>
                );
            }
          }}
        />
      </div>
    </div>
  );
}
