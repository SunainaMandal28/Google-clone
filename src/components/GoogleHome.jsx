

const GoogleHome = () => {

  return (
    <div className="app">
      <div className="top-bar">
        <a href="#">Gmail</a>
        <a href="#">Images</a>

        <span className="material-icons-outlined icon">science</span>
        <span className="material-icons-outlined icon">apps</span>

        <div className="profile"></div>
      </div>

      <div className="main">
        <div className="google">
          <span>G</span>
          <span>o</span>
          <span>o</span>
          <span>g</span>
          <span>l</span>
          <span>e</span>
        </div>

        <div className="search-wrapper">
          <span className="material-icons-outlined">add</span>

          <input type="text" placeholder="Search Google or type a URL" />

          <div className="search-icon">
            <span className="material-icons-outlined">mic</span>
            <span className="material-icons-outlined">photo_camera</span>
            <span className="material-icons-outlined">search</span>
          </div>
        </div>

        <div className="buttons">
          <button>Google Search</button>
          <button>I&apos;m Feeling Lucky</button>
        </div>

        <div className="language">
          Google offers in: <a href="#">नेपाली</a>
        </div>
      </div>

      <footer className="google-footer">
        <div className="footer-row top-row">
          <span>Nepal</span>
        </div>

        <div className="footer-row bottom-row">
          <div className="footer-section">
            <a href="#">About</a>
            <a href="#">Advertising</a>
            <a href="#">Business</a>
            <a href="#">How Search works</a>
          </div>

          <div className="footer-section">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GoogleHome;
