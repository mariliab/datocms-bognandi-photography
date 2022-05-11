import TextAndImageBlock from "../components/text-and-image-block";

export default function About({ data }) {
  return (
    <section className="bg-beige-lightest py-12 lg:py-24 relative text-beige-darkest">
      <TextAndImageBlock data={data?.content[0]} />
    </section>
  );
}
