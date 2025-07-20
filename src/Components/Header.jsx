import Nav from "./Nav";

export default function Header() {
  return (
    <header
      className="
        fixed top-5 left-1/2 -translate-x-1/2
        z-[999] pointer-events-auto
      "
    >
      <Nav />
    </header>
  );
}
