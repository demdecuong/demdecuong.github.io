const getProfileData = (language = "en") => ({
  name: language === "en" ? "Nguyen Phuc Minh": "Nguyễn Phúc Minh",
  title: language === "en" ? "AI Engineer" : "Kỹ sư AI",
  bio:
    language === "en"
      ? `I love turning complex ideas into real-world AI products.
Think like a founder, build like an engineer, code small module with systems thinker.
`
      : `Tôi yêu thích việc biến những ý tưởng phức tạp thành các sản phẩm AI thực tế.
Suy nghĩ như chủ doanh nghiệp, tinh thần sản xuất như một kỹ sư, làm việc nhỏ với tư duy hệ thống.
`,
  contact: {
    email: "your@email.com",
    linkedin: "linkedin.com/in/yourprofile",
    github: "github.com/demdecuong",
    twitter: "twitter.com/yourhandle",
    googlescholar: "scholar.google.com/citations?user=CHTOv7sAAAAJ&hl",
  },
  stats: [
    { value: "5+", label: language === "en" ? "Years Experience" : "Năm Kinh nghiệm" },
    { value: "8", label: language === "en" ? "Projects" : "Dự án" },
    { value: "6", label: language === "en" ? "Research Papers" : "Bài báo khoa học" },
  ],
});

export default getProfileData;