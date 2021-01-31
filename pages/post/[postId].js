import {useRouter} from "next/router";
import {useEffect,useState} from 'react'
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const Post = () => {
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])

    useEffect(() =>{
        const fetch = async () => {
            const response = await axios.get(
                `${baseURL}/post/${postId}`,
                {
                headers:{
                    'app-id': '6014e7b324ffa7279b96ea54'
                }
            })
            console.log(response)
            setPost(response.data)    
        }
        fetch()
    })

    useEffect(() =>{
        const fetch = async () => {
            const response = await axios.get(
                `${baseURL}/post/${postId}/comment`,
                {
                headers:{
                    'app-id': '6014e7b324ffa7279b96ea54'
                }
            })
            console.log(response.data)
            setComment(response.data.data)    
        }
        fetch()
    })
    return (
        <>
            {/* <h1>display post data from api here</h1> */}
            {post !==null ? (
                <div style={{padding:20}}>
                    <p>tags : {post.tags}</p>
                    <img width='250'src={post.image}></img>
                    <p>{post.owner.firstName} {post.owner.lastName}</p>
                    <p>Likes: {post.likes}</p>
                    <p><b>Comment</b></p>
                    {comment.map(comment=>(
                        <p>
                            {comment.owner.firstName}{comment.owner.lastName}: {comment.message}
                        </p>
                    ))}
                    <Link href="/post">back</Link>
                </div>
            ):null}
        </>
    )
}

export  default  Post

