import axios from "axios";


const page =async ({params}:any) => {
    const postId=params.postid;
    const response=await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data=response.data;
  return (
    <>
    <div>Khan BLOG {postId} </div>
    <br />
    <div>
        title :{data.title}
    </div>
    </>
    
  )
}

export default page