
import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "How I Built My Portfolio",
    date: "2025-07-15",
    summary: "A behind-the-scenes look at the process and tools I used to create this portfolio website.",
  },
  {
    id: 2,
    title: "Top 5 React Tips for Beginners",
    date: "2025-06-30",
    summary: "Essential tips and tricks to help you get started with React and build better apps.",
  },
  {
    id: 3,
    title: "Why I Love Frontend Development",
    date: "2025-06-10",
    summary: "Sharing my passion for frontend development and what keeps me motivated.",
  },
];

export default function Blog() {
  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: 24 }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24 }}>Blog</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {blogPosts.map((post) => (
          <div
            key={post.id}
            style={{
              background: "var(--card-bg, #fff)",
              borderRadius: 12,
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              padding: 24,
              transition: "box-shadow 0.2s",
            }}
          >
            <h2 style={{ margin: 0, fontSize: 24, color: "#222" }}>{post.title}</h2>
            <div style={{ color: "#444", fontSize: 14, margin: "8px 0 12px" }}>{post.date}</div>
            <p style={{ margin: 0, color: "#222" }}>{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
