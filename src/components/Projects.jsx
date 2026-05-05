function Projects() {
  return (
    <section id="projects" className="container">
      <h2>Projects</h2>

      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))", gap:"20px"}}>

        {[1,2,3,4].map((item) => (
          <div key={item} style={{background:"#1e293b", padding:"20px", borderRadius:"10px"}}>
            <h3>Project {item}</h3>
            <p>Short description of project.</p>
            <button>View</button>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;