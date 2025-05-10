const blog3 = (language = "en") => ({
  id: 3,
  title: "How I got 7.0 IELTS overall as an English hater",
  date: "March 2025",
  link: "/blog/3",
  description:
    "Creating inclusive interfaces for users with cognitive differences.",
  tags: ["Accessibility", "Inclusive Design", "UI"],
  popular: true,
  content: `
      <p>Creating a modern UI for your React application is easier than ever with the right tools and techniques. In this blog, we'll explore how to use CSS variables and modern design principles to build a stunning interface.</p>
      <img src="https://hs.sbcounty.gov/cn/Photo%20Gallery/_w/Sample%20Picture%20-%20Koala_jpg.jpg" alt="Modern UI Design" />
      <h2>Code Example</h2>
      <pre><code class="language-javascript">const App = () => {
  return (
    <div className="app">
      <h1>Hello, World!</h1>
    </div>
  );
};
export default App;</code></pre>
      <p>By using the above code, you can create a simple React component with a modern look. Don't forget to style it using CSS!</p>
    `,
});

export default blog3;