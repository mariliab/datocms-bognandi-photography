import React from "react";
import Container from "./container";
import BlockTitle from "../components/block-title";
import { Image } from "react-datocms";

export default function InstagramFeed({ posts = [] }) {
  const filteredList = posts.filter((post) => post.media_type !== "VIDEO");

  filteredList.length > 0 && (filteredList.length = 18);

  return (
    <section className="bg-white py-12 sm:py-24 text-beige-darkest">
      <Container>
        <BlockTitle
          title="Instagram"
          subtitle="Senaste inläggen från flödet"
          centered
        ></BlockTitle>
        <a
          href="https://www.instagram.com/bognandiphotography/"
          target="_blank"
        >
          <div className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-9">
            {filteredList.length > 0 ? (
              filteredList.map((post) => {
                return (
                  <div key={post?.id}>
                    <Image
                      data={{
                        src: post?.media_url,
                        alt: post?.caption,
                        width: "400",
                        height: "500",
                      }}
                    />
                  </div>
                );
              })
            ) : (
              <span>
                <small>kan inte ladda just nu..</small>
              </span>
            )}
          </div>
        </a>
      </Container>
    </section>
  );
}
