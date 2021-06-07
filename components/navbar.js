import Container from "./container";

export default function Navbar() {
  return (
    <nav>
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex flex-col">
            <h6 className="font-bold leading-tight text-2xl">BOGNANDI</h6>{" "}
            <h6 className="leading-tight text-2xl">PHOTOGRAPHY</h6>
          </div>
          <div>
            <ul className="flex">
              <li>link</li>
              <li>link</li>
              <li>link</li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}
