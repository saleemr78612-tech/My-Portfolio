function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript",
    "Bootstrap", "React JS",
    "MS Office", "Networking", "Data Analysis"
  ];

  return (
    <section id="skills" className="container">
      <h2>Skills</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))", gap:"15px"}}>
        {skills.map((skill, index) => (
          <div key={index} style={{padding:"20px", background:"#1e293b", borderRadius:"10px"}}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;