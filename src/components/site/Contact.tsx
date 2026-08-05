const Contact = () => (
  <section className="contact">
    <div className="wrap">
      <h2>
        Building something?
        <br />
        <a href="mailto:drewbinstein1703@gmail.com">drewbinstein1703@gmail.com</a>
      </h2>
      <p>
        Open to full-time roles, consulting work, and conversations about anything on this page. I
        answer fast. Studio work lives at{' '}
        <a href="https://rubiventures.com" target="_blank" rel="noopener noreferrer">
          rubiventures.com
        </a>
        .
      </p>
      <div className="foot">
        <span>
          © {new Date().getFullYear()} Drew Rubinstein · North Potomac, MD ·{' '}
          <span className="gem">◆</span>
        </span>
        <span>built and shipped by hand</span>
      </div>
    </div>
  </section>
);

export default Contact;
