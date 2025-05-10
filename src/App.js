import React, { useState, useEffect } from "react";
import "./App.css";
import profilePhoto from "./asset/profile.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogPage from "./BlogPage"; // Import the BlogPage component
import blog1 from "./blogPosts/blog1";
import blog2 from "./blogPosts/blog2";
import blog3 from "./blogPosts/blog3";
import blog4 from "./blogPosts/blog4";
import blog5 from "./blogPosts/blog5";
import getProfileData from "./profileData";
import vietnam_flag from "./flags/vietnam.png";
import uk_flag from "./flags/uk.png";
// Smooth scroll for navigation
const smoothScroll = (id) => {
  const element = document.getElementById(id);
  const offset = -120; // Adjust this value to scroll up by 50px

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition + offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

function App() {
  const [activeSection, setActiveSection] = useState("blog");
  const [language, setLanguage] = useState("en"); // State for language
  const [showAllExperience, setShowAllExperience] = useState(false); // State to toggle "Show More"
  const toggleShowMore = () => {
    setShowAllExperience((prev) => !prev);
  };

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId); // Clear the previous timeout
      timeoutId = setTimeout(() => {
        const sections = document.querySelectorAll(".content-section");
        let currentSection = "blog"; // Default section

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section.id; // Update to the section currently in view
          }
        });

        setActiveSection(currentSection);
      }, 50); // Debounce delay (100ms)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId); // Cleanup timeout
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "vi" : "en"));
  };
  const profileData = getProfileData(language); // Get profile data based on language

  const workExperience = [
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "HCLTech x ANZ",
      duration: "2025 - Present",
      description:
        "Orchestrating the development of cutting-edge web applications with React, Next.js, and WebGL.",
      tags: ["React", "TypeScript", "WebGL"],
      highlight: "Led team that increased performance by 300%",
    },
    {
      id: 2,
      role: "Senior Data Scientist",
      company: "Orient Commercial Bank (OCB)",
      duration: "2024 - 2025",
      description:
        "- Developed novel machine learning models for computer vision applications.",
      tags: ["Python", "TensorFlow", "Computer Vision"],
      highlight: "Published in NeurIPS 2020",
    },
    {
      id: 3,
      role: "AI/Data Scientist",
      company: "FPT Software AI Center x AIA Vietnam",
      duration: "2022 - 2024",
      description:
        "Developed novel machine learning models for computer vision applications.",
      tags: ["Python", "TensorFlow", "Computer Vision"],
      highlight: "Published in NeurIPS 2020",
    },
    {
      id: 4,
      role: "Applied Scientist",
      company: "VinBrain (acquired by NVIDIA)",
      duration: "2021 - 2022",
      description:
        "Developed novel machine learning models for computer vision applications.",
      tags: ["Python", "TensorFlow", "Computer Vision"],
      highlight: "Published in NeurIPS 2020",
    },
  ];

  const researchPapers = [
    {
      id: 1,
      title:
        "ViHealthBERT: Pre-trained Language Models for Vietnamese in Health Text Mining",
      conference: "LREC",
      year: 2022,
      link: "#",
      pdfLink: "https://aclanthology.org/2022.lrec-1.35/", // Add PDF link
      githubLink: "https://github.com/demdecuong/vihealthbert", // Add GitHub link
      description:
        "Pioneered ViHealthBERT, the first domain-specific pre-trained language model for Vietnamese healthcare, setting new benchmarks in biomedical and clinical NLP tasks.",
      tags: ["BERT", "Low-resource", "NER"],
      citation: "Cited 10+ times",
      image: "images/vihealthbert.png", // Add image path
    },
    {
      id: 2,
      title:
        "Improving abstractive summarization with segment-augmented and position-awareness",
      conference: "ACLING",
      year: 2021,
      link: "#",
      pdfLink:
        "https://www.sciencedirect.com/science/article/pii/S1877050921011960", // Add PDF link
      githubLink: "https://github.com/demdecuong/SEGMENT", // Add GitHub link
      description:
        "Enhanced abstractive summarization by integrating segment-level context and position-aware attention to improve coherence and relevance.",
      tags: ["Abstractive Summarization", "End-to-end module"],
      award: "First time publishing",
      image: "images/segment.png", // Add image path
    },
    {
      id: 3,
      title:
        "ViMQ: A Vietnamese medical question dataset for healthcare dialogue system development",
      conference: "ICONIP",
      year: 2022,
      link: "#",
      pdfLink: "https://link.springer.com/chapter/10.1007/978-3-030-92310-5_76", // Add PDF link
      githubLink: "https://github.com/tadeephuy/ViMQ", // Add GitHub link
      description:
        "The first Vietnamese medical question dataset to advance healthcare dialogue systems and medical question answering in low-resource settings.",
      tags: ["Dataset", "healthcare", "NER"],
      image: "images/vimq.png", // Add image path
    },
  ];

  const blogPosts = [
    blog1(language),
    blog2(language),
    blog3(language),
    blog4(language),
    blog5(language),
  ];

  const visibleExperience = showAllExperience
    ? workExperience // Show all items if "Show More" is clicked
    : workExperience.slice(0, 2); // Show only the first 2 items by default

  return (
    <Router>
      <div className="app-container">
        {/* Language Toggle Button */}
        {/* Language Toggle Button */}
        <button className="language-toggle" onClick={toggleLanguage}>
          <img
            src={language === "en" ? vietnam_flag : uk_flag}
            alt={language === "en" ? "Vietnamese Flag" : "USA Flag"}
            className="flag-icon"
          />
          {language === "en" ? "Tiếng Việt" : "English"}
        </button>
        <Routes>
          {/* Landing Page */}
          <Route
            path="/"
            element={
              <div className="wow-container">
                {/* Animated Background Elements */}
                <div className="bg-blobs">
                  <div className="blob-1"></div>
                  <div className="blob-2"></div>
                </div>

                {/* Floating Navigation */}
                <nav className="floating-nav">
                  <button
                    className={`nav-btn ${
                      activeSection === "blog" ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveSection("blog"); // Update the active section
                      smoothScroll("blog"); // Smooth scroll to the blog section
                    }}
                  >
                    <span className="nav-icon">✍️</span>
                    <span className="nav-text">Blog</span>
                  </button>
                  <button
                    className={`nav-btn ${
                      activeSection === "experience" ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveSection("experience"); // Update the active section
                      smoothScroll("experience"); // Smooth scroll to the experience section
                    }}
                  >
                    <span className="nav-icon">💼</span>
                    <span className="nav-text">Experience</span>
                  </button>
                  <button
                    className={`nav-btn ${
                      activeSection === "research" ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveSection("research"); // Update the active section
                      smoothScroll("research"); // Smooth scroll to the research section
                    }}
                  >
                    <span className="nav-icon">🔬</span>
                    <span className="nav-text">Research</span>
                  </button>
                </nav>

                {/* Main Content */}
                <main className="wow-layout">
                  {/* Profile Section */}
                  <section className="profile-glass">
                    <div className="profile-image-container">
                      <img
                        src={profilePhoto}
                        alt="Profile"
                        className="profile-image"
                      />
                      <div className="image-border"></div>
                      <div className="image-highlight"></div>
                    </div>

                    <div className="profile-content">
                      <h1 className="profile-name">
                        <span className="name-gradient">
                          {profileData.name}
                        </span>
                        <span className="title-sparkle">
                          {profileData.title}
                        </span>
                      </h1>

                      {profileData.bio.split("\n").map((line, idx) => (
                        <p className="profile-bio" key={idx}>
                          {line}
                        </p>
                      ))}
                      <div className="profile-stats">
                        {profileData.stats.map((stat, index) => (
                          <div key={index} className="stat-card">
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="profile-links">
                        <a
                          href={`mailto:${profileData.contact.email}`}
                          className="social-link email"
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                        <a
                          href={`https://${profileData.contact.linkedin}`}
                          className="social-link linkedin"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          href={`https://${profileData.contact.github}`}
                          className="social-link github"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                        <a
                          href={`https://${profileData.contact.twitter}`}
                          className="social-link twitter"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          href={`https://${profileData.contact.googlescholar}`}
                          className="social-link googlescholar"
                        >
                          <i className="fab fa-google"></i>
                        </a>
                      </div>
                    </div>
                  </section>

                  {/* Blog Section */}
                  <section id="blog" className="content-section">
                    <h2 className="section-title">
                      <span className="title-decoration"></span>
                      Featured Writings
                    </h2>
                    <div className="blog-carousel">
                      {blogPosts.map((post) => (
                        <Link
                          key={post.id}
                          to={post.link}
                          className={`blog-card ${
                            post.featured ? "featured" : ""
                          } ${post.popular ? "popular" : ""}`}
                        >
                          <div className="card-glow"></div>
                          <h3 className="card-title">{post.title}</h3>
                          <p className="post-date">{post.date}</p>
                          <p className="post-excerpt">{post.description}</p>
                          <div className="post-tags">
                            {post.tags.map((tag, index) => (
                              <span key={index} className="tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                          {post.featured && (
                            <div className="featured-label">Editor's Pick</div>
                          )}
                          {post.popular && (
                            <div className="popular-label">Top Read</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </section>

                  {/* Professional Journey Section */}
                  <section id="experience" className="content-section">
                    <h2 className="section-title">
                      <span className="title-decoration"></span>
                      Professional Journey
                    </h2>

                    <div className="timeline">
                      {visibleExperience.map((job) => (
                        <div key={job.id} className="timeline-card">
                          <div className="timeline-dot"></div>
                          <div className="timeline-content">
                            <div className="job-header">
                              <h3>{job.role}</h3>
                              <div className="job-meta">
                                <span className="company">{job.company}</span>
                                <span className="duration">{job.duration}</span>
                              </div>
                            </div>
                            <p className="job-description">{job.description}</p>
                            {job.highlight && (
                              <div className="job-highlight">
                                <span className="highlight-star">★</span>
                                {job.highlight}
                              </div>
                            )}
                            <div className="job-tags">
                              {job.tags.map((tag, index) => (
                                <span key={index} className="tag">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Show More Button */}
                    <button className="show-more-btn" onClick={toggleShowMore}>
                      {showAllExperience ? "Show Less" : "Show More"}
                    </button>
                  </section>

                  {/* Research Section */}
                  <section id="research" className="content-section">
                    <h2 className="section-title">
                      <span className="title-decoration"></span>
                      Academic Contributions
                    </h2>

                    <div className="research-grid">
                      {researchPapers.map((paper) => (
                        <a
                          key={paper.id}
                          href={paper.pdfLink}
                          className="research-card"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="card-corner"></div>
                          <img
                            src={paper.image}
                            // alt={paper.title}
                            className="research-image"
                          />
                          <h3 className="card-title">{paper.title}</h3>
                          <div className="paper-meta">
                            <span className="conference">
                              {paper.conference}
                            </span>
                            <span className="year">{paper.year}</span>
                          </div>
                          <div className="paper-footer">
                            <div className="paper-tags">
                              {paper.tags.map((tag, index) => (
                                <span key={index} className="tag">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="paper-links">
                              <a
                                href={paper.pdfLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="paper-icon pdf-icon"
                              >
                                <i className="fas fa-file-pdf"></i>
                              </a>
                              <a
                                href={paper.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="paper-icon github-icon"
                              >
                                <i className="fab fa-github"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </section>
                </main>
              </div>
            }
          />

          {/* Blog Page */}
          <Route
            path="/blog/:id"
            element={<BlogPage blogPosts={blogPosts} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
