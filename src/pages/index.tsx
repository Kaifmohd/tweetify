import Form from "@/src/components/Form";
import Header from "@/src/components/Header";
import PostFeed from "@/src/components/posts/PostFeed";

export default function Home() {
  return (
    <>
      <Header  label="Home" />
      <Form placeholder="What's happening?"/>
      <PostFeed />
    </>
  );
}