import { useState, useEffect } from 'react'
import { editPost, getPost } from '../services/posts-api'
import { useNavigate, useParams } from 'react-router-dom'

export function Show() {
  const { id } = useParams()
  const nav = useNavigate();

  const [data, setData] = useState({})

  useEffect(() => {
    getPost(id).then(res => {
      setData(res.data)
    })
  }, [data])

  return (
    <div>
      <h1>{data.title}</h1>
      <h3>{data.body}</h3>
      <button onClick={() => nav(`/${id}/edit`)}>Edit Post</button>
    </div>
  )
}