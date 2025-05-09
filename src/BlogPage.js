import React from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogPage({ blogPosts }) {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <div className="blog-page not-found">Blog post not found.</div>;
  }

  return (
    <div className="blog-page">
      <header className="blog-header">
        <Link to="/" className="back-link">← Back to Blog</Link>
        <h1 className="blog-title">{blog.title}</h1>
        <p className="blog-date">{blog.date}</p>
      </header>
      <article className="blog-content">
        {/* Render blog content with support for images */}
        <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </article>
    </div>
  );
}

export default BlogPage;