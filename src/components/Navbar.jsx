function Navbar() {
  return (
    <nav style={{padding: "15px", background: "#020617"}}>
      <div className="container" style={{display:"flex", justifyContent:"space-between"}}>
        <h3>Saleem</h3>
        <div>
          <a href="#about">About </a>
          <a href="#skills"> Skills </a>
          <a href="#projects"> Projects </a>
          <a href="#contact"> Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;