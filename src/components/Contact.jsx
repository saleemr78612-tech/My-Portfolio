function Contact() {
  return (
    <section id="contact" className="container">
      <h2>Contact</h2>

      <form style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;