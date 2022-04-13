import { useState, useEffect } from 'react'
import { editPost, getPost } from '../services/posts-api'
import { useNavigate, useParams } from 'react-router-dom'

export function Show() {
  const { id } = useParams()
  const nav = useNavigate();

  const [data, setData] = useState({})
  const [comments, setComments] = useState([])

  useEffect(() => {
    getPost(id).then(res => {
      setData(res.data)
      setComments(res.data.comments)
    })
  }, [data])

  const addAComment = (e) => {
    e.preventDefault()
    const commentArray = comments
    commentArray.push(
      {
        name: e.target.name.value,
        message: e.target.message.value
      })
    const post =
    {
      title: data.title,
      body: data.body,
      comments: commentArray
    }

    editPost(id, post)

    e.target.name.value = null
    e.target.message.value = null
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <h3>{data.body}</h3>
      <button onClick={() => nav(`/${id}/edit`)}>Edit Post</button>
      <div>
        {
          comments.map((comment, i) => {
            return (
              <div key={i}>
                <h2>Name: {comment.name}</h2>
                <p>Comment: {comment.message}</p>
              </div>
            )
          })
        }
        <form onSubmit={addAComment}>
          <label> Name: </label>
          <input type='text' name='name' /> <br />
          <label> Comments: </label><br />
          <textarea cols='40' rows='10' name='message'></textarea><br />
          <input type='submit' value={'Submit'} />
        </form>
      </div>
    </div>
  )
}