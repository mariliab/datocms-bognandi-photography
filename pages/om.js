import Layout from "../components/layout";
import Container from "../components/container";
import Navbar from "../components/navbar";
import PageTitle from "../components/page-title";
function About() {
  return (
    <Layout>
      <Navbar />
      <Container>
        <PageTitle title="Om oss" />
      </Container>
    </Layout>
  );
}

export default About;
