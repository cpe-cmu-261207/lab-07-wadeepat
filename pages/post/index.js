import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'

const Posts = () => {
    const [posts,setPosts] = useState([])
    useEffect(() =>{
        const fetch = async () => {
            const response = await axios.get(
                `${baseURL}/post`,
                {
                headers:{
                    'app-id': '6014e7b324ffa7279b96ea54'
                }
            })
            console.log(response.data)
            setPosts(response.data.data)    
        }
        fetch()
    })
    
    return (
        <>
            <h1>All Posts</h1>
            {
               posts.map(post =>(
                <div style={{padding:20}}>
                    <p>post: {post.text}</p>
                    <img width='250' src={post.image}/>
                    <p>Likes: {post.likes}</p>
                    <Link key={post.id} href={`/post/${post.id}`}>
                        <button>go to this post</button>
                    </Link>
                </div>
               ))
            }
        </>
    )
}

export default  Posts
