import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPage.css';

function BlogPage({ blogPosts }) {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <div className="blog-page not-found">Blog post not found.</div>;
  }

  return (
    <div className="blog-page">
      <div className="blog-content">
        <header>
          <Link to="/" className="back-link">← Back to Blog</Link>
          <h1 className="blog-title">{blog.title}</h1>
          <div className="blog-meta">
            <p className="blog-summary">{blog.description}</p>
            <p className="blog-date">{blog.date}</p>
          </div>
        </header>
        <hr class="separator"/> 
        <article>
          <div
            className="blog-body"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </article>
      </div>
    </div>
  );
}

export default BlogPage;