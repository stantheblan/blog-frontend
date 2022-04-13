import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPost, editPost, deletePost } from '../services/posts-api'

export function Edit() {
  const { id } = useParams()
  const nav = useNavigate();
  const [data, setData] = useState({})

  useEffect(() => {
    getPost(id).then(res => setData(res.data))
  }, [data])

  const editPosts = (e) => {
    e.preventDefault()
    let post = {
      title: e.target.title.value,
      body: e.target.body.value,
      comments: data.comments
    }
    editPost(id, post)
    nav(`/${id}`)
  }

  const deletePosts = () => {
    deletePost(id)
    nav('/')
  }

  return (
    <div className='main'>
      <h1>Edit Post</h1>
      <form onSubmit={editPosts}>
        <input type='text' name='title' defaultValue={data.title} /><br />
        <textarea defaultValue={data.body} name='body' cols='50' rows='10' ></textarea><br />
        <input type='submit' />
      </form>
      <button type='submit' onClick={deletePosts}>Delete</button>
    </div>
  )
}