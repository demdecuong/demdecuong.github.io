const blog2 = (language = "en") => ({
  id: 2,
  title: language === "en" ? "What should I prepare before a 200km cycling trip within 1 day": "Tôi nên chuẩn bị gì trước chuyến đi xe đạp 200km trong 1 ngày",
  date: "March 2025",
  link: "/blog/2",
  description: "Creating inclusive interfaces for users with cognitive differences.",
  tags: ["Accessibility", "Inclusive Design", "UI"],
  popular: true,
  content: `
    <p>This is the full content of the blog post about preparing for a 200km cycling trip...</p>
  `,
});

export default blog2;