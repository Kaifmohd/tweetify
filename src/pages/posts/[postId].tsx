import Form from "@/src/components/Form";
import Header from "@/src/components/Header";
import CommentFeed from "@/src/components/posts/CommentFeed";
import PostItem from "@/src/components/posts/PostItem";
import usePost from "@/src/hooks/usePost";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const PostView = () => {
    const router = useRouter();

    const {postId} = router.query;
    const {data: fetchedPost ,isLoading}= usePost(postId as string);


    if(isLoading || !fetchedPost){
        return (
            <div className="flex justify-center items-center h-full">
                <ClipLoader color="lightblue" size={80}/>
            </div>
        )
    }
    return (
        <>
            <Header label="Tweet" showBackArrow/>
            <PostItem  data={fetchedPost}/>
            <Form
                postId={postId as string}
                isComment
                placeholder="Tweet your reply"
            />
            <CommentFeed comments={fetchedPost?.comments}/>
        </>
        )
}

export default PostView;