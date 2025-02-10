import React from "react";
import "./Blog.css";
import FeaturedPost from "../../components/FeaturedPost/FeaturedPost";
import Categories from "../../components/Categories/Categories";
import DidYouKnow from "../../components/DoYouKnow/DoYouKnow";


export default function Blog() {
  return (
    <section className="blog">
      <h2>🚀 Ed Learn Insights</h2>
      <p>Explore programming, software development, and more!</p>

      <FeaturedPost />
      <Categories />
      <DidYouKnow />
    </section>
  );
}
