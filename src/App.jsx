import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// 🏠 HOME PAGE
function Home() {
  return (
    <div className="container py-5 fade-section">
      <div className="text-center">
        <h1 className="display-4 fw-bold text-accent mb-3">Hello! I'm Jonas Clarence M. Sambo</h1>
        <p className="lead text-light mb-4">
          Aspiring <strong>Web Developer</strong> & <strong>Network Specialist</strong> passionate
          about technology, creativity, and continuous learning.
        </p>

        <img
          src="j.jfif"
          alt="Profile"
          className="rounded-circle shadow-lg profile-img mb-4 border border-3 border-accent"
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />

        <h3 className="fw-semibold text-accent mb-4">My Skills & Hobbies</h3>

        <div className="row justify-content-center gy-4">
          <div className="col-md-4">
            <div className="card glass-card p-3 h-100">
              <div className="card-body">
                <h5 className="card-title text-accent">💻 Web Development</h5>
                <p className="card-text text-light">
                  I design and build modern, responsive web applications using HTML, CSS, JavaScript, and React.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card glass-card p-3 h-100">
              <div className="card-body">
                <h5 className="card-title text-accent">🌐 Networking</h5>
                <p className="card-text text-light">
                  I love learning about networks, communication systems, and how devices connect securely across the web.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card glass-card p-3 h-100">
              <div className="card-body">
                <h5 className="card-title text-accent">🎵 Hobbies</h5>
                <p className="card-text text-light">
                  I enjoy basketball, dancing, cooking, traveling, and listening to music. finding creativity in every hobby.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ℹ️ ABOUT PAGE
function About() {
  return (
    <div className="container py-5 fade-section">
      <h1 className="text-center text-accent fw-bold mb-5 display-5">About Me</h1>

      <div className="row align-items-center gy-5">
        <div className="col-md-4 text-center">
          <img
            src="f.jfif"
            alt="Jonas Profile"
            className="rounded-circle shadow-lg mb-3 border border-3 border-accent"
            style={{ width: "220px", height: "220px", objectFit: "cover" }}
          />
          <h4 className="text-accent fw-semibold mt-3">Jonas Clarence M. Sambo</h4>
          <p className="text-muted small">Aspiring Web Developer & Network Specialist</p>
        </div>

        <div className="col-md-8">
          <p className="lead text-light mb-4" style={{ lineHeight: "1.8" }}>
            Hello! I’m <strong className="text-accent">Jonas Clarence Manlapaz Sambo</strong> from{" "}
            <strong>Bahao, Libmanan, Camarines Sur</strong>. I’m passionate about merging creativity
            and technology to craft interactive digital experiences.
          </p>

          <p className="text-light mb-4" style={{ lineHeight: "1.8" }}>
            My journey began with curiosity for HTML and CSS. Today, I’m exploring deeper into{" "}
            <strong>React</strong>, <strong>Bootstrap</strong>, and networking fundamentals to
            strengthen both my front-end and IT skills.
          </p>

          <div className="card glass-card p-4 mb-4">
            <h5 className="text-accent fw-semibold mb-3">Quick Info</h5>
            <ul className="list-unstyled text-light mb-0" style={{ lineHeight: "1.8" }}>
              <li><strong>📍 Location:</strong> Bahao, Libmanan, Camarines Sur</li>
              <li><strong>🎯 Age:</strong> 19</li>
              <li><strong>📧 Email:</strong>{" "}
                <a href="mailto:jonassambo52@gmail.com" className="text-accent text-decoration-none">
                  jonassambo52@gmail.com
                </a>
              </li>
              <li><strong>💡 Interests:</strong> Coding, Sports, Music, Cooking, Traveling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✉️ CONTACT PAGE
function Contact() {
  return (
    <div className="container py-5 fade-section text-center">
      <h1 className="text-accent mb-4 fw-bold">Get in Touch</h1>
      <p className="lead text-light mb-4">
        I’d love to connect! Whether you want to collaborate or just say hello, feel free to reach out.
      </p>

      <div className="card glass-card mx-auto p-4" style={{ maxWidth: "500px" }}>
        <ul className="list-unstyled text-light mb-4" style={{ lineHeight: "1.8" }}>
          <li><strong>📧 Email:</strong> <a href="mailto:jonassambo52@gmail.com" className="text-accent">jonassambo52@gmail.com</a></li>
          <li><strong>📱 Phone:</strong> 0956 860 6554</li>
          <li><strong>📍 Location:</strong> Bahao, Libmanan, Camarines Sur</li>
        </ul>
        <div className="d-flex justify-content-center gap-3">
          <a href="https://www.facebook.com/jonas.sambo.5454" target="_blank" rel="noreferrer" className="btn glow-btn">Facebook</a>
          <a href="https://github.com/jonassambo2006" target="_blank" rel="noreferrer" className="btn glow-btn">GitHub</a>
          <a href="mailto:jonassambo52@gmail.com" className="btn glow-btn">Email</a>
        </div>
      </div>
    </div>
  );
}

// 🌐 MAIN APP
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [fade, setFade] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 400);
    return () => clearTimeout(timer);
  }, [currentPage]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .glow-btn {
        color: #00ff88;
        border: 2px solid #00ff88;
        border-radius: 25px;
        padding: 8px 20px;
        transition: all 0.3s ease;
        background-color: transparent;
      }
      .glow-btn:hover {
        background-color: #00ff88;
        color: #000;
        box-shadow: 0 0 15px #00ff88;
        transform: scale(1.05);
      }
      .project-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .project-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 0 20px #00ff88;
      }
      .loading-spinner {
        width: 60px;
        height: 60px;
        border: 5px solid #00ff88;
        border-top: 5px solid transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin { 100% { transform: rotate(360deg); } }
    `;
    document.head.appendChild(style);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="app-wrapper d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark glass-nav sticky-top">
        <div className="container">
          <span className="navbar-brand fw-bold text-accent">
            <i className="fas fa-code me-2"></i>My Portfolio
          </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              {["home", "about", "contact"].map((p) => (
                <li key={p} className="nav-item">
                  <button
                    className={`nav-link btn btn-link ${currentPage === p ? "active text-accent" : ""}`}
                    onClick={() => setCurrentPage(p)}
                  >
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className={`page-content page-transition ${fade ? "fade-in" : ""}`}>
        {renderPage()}
      </div>

      <footer className="text-center py-3 mt-auto glass-footer">
        <p className="mb-0 text-light small">
          © {new Date().getFullYear()} <span className="text-accent">Jonas Sambo</span> | Built with{" "}
          <i className="fab fa-react text-info"></i> React &{" "}
          <i className="fab fa-bootstrap text-primary"></i> Bootstrap
        </p>
      </footer>
    </div>
  );
}
