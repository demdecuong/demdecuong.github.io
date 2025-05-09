const blog1 = (language = "en") => ({
  id: 1,
  title: language === "en" ? "What I learned from going to the gym for 2 years" : "Những gì tôi đã học được từ việc đi tập gym trong 2 năm",
  date: "May 2025",
  link: "/blog/1",
  description: language === "en" ? "Some unknown challenges PT wont let you know" : "Một số thử thách mà PT sẽ không cho bạn biết",
  tags: ["Animation", "WebGL", "UX"],
  featured: true,
  content: `
    <p>Going to the gym has taught me discipline, consistency, and the importance of health.</p>
    <img src="https://via.placeholder.com/800x400" alt="Gym Experience" />
    <p>Here are some key takeaways from my journey:</p>
    <ul>
      <li>Consistency is more important than intensity.</li>
      <li>Nutrition plays a huge role in fitness.</li>
      <li>Rest and recovery are just as important as workouts.</li>
    </ul>
  `,
});

export default blog1;