import Alert from "../components/alert";
import Footer from "../components/footer";

export default function Layout({ preview, children, data }) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer logo={data?.favicon[3]?.attributes?.href} />
    </>
  );
}
