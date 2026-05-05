import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="container" style={{display:"flex", flexWrap:"wrap", alignItems:"center"}}>
      
      <div style={{flex:1}}>
        <h1>Saleem Raza Mari</h1>
        <h3>Frontend React Developer</h3>
        <p>Passionate IT graduate with skills in modern web technologies</p>
        
        <a href="#projects">
          <button>View Projects</button>
        </a>
      </div>

      <div style={{flex:1, textAlign:"center"}}>
        <img 
          src={profile} 
          alt="profile" 
          style={{width:"200px", borderRadius:"50%"}}
        />
      </div>

    </section>
  );
}

export default Hero;