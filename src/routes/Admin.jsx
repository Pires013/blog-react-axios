import blogFetch from "../axios/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Admin.css"

const Admin = () => {
  const [posts, setPosts] = useState([]) // estado deve estar aqui

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts")
      setPosts(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const deletePost = async (id) => {

    await blogFetch.delete(`/posts/${id}`)

    const filteredPosts = posts.filter((post) => post.id !== id)

    setPosts(filteredPosts)

  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="admin">
      <h1>Gerenciar Posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <p>{post.title}</p> 
            <div className="actions">
              <Link className="btn edit-btn" to={`/posts/edit/${post.id}`}>Editar</Link>
              <button className="btn delete-btn" onClick={() => deletePost(id)}>Excluir</button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Admin
