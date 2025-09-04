import blogFetch from "../axios/config";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate ()

  const[title, setTitle] = useState()
  const[body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault()

    const post = {title, body, userId: 1}

    await blogFetch.post("/posts", {
        body: post,
    })
  }


  return (
    <div className="new-post">
      <h2>Inserir novo post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="body">Titulo</label>
          <input type="text" name="body" id="title" placeholder="Digite o titulo" onChange={(e) => setTitle(e.target.value)} />
        </div>
         <div className="form-control">
          <label htmlFor="body">Conteudo</label>
          <textarea name="body" id="body" placeholder="Digite o conteudo"></textarea>
        </div>
        <input type="submit" value="Criar Post" className="btn" onChange={(e) => setBody(e.target.value)}/>
      </form>
    </div>
  )
}

export default NewPost
