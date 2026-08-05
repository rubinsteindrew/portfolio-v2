const NotFound = () => (
  <div className="wrap" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
    <div>
      <p className="label">404</p>
      <h2 className="big">
        That page doesn't exist — but <em>the rest of it does.</em>
      </h2>
      <p className="lede" style={{ marginBottom: 28 }}>
        You've found a link to nowhere. Everything worth seeing is on the home page.
      </p>
      <a className="visit r" href="/">
        back to the work ↗
      </a>
    </div>
  </div>
);

export default NotFound;
