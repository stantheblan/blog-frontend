import { useNavigate } from 'react-router-dom'
import { createPost } from '../services/posts-api'

export function New() {
  let nav = useNavigate()
  const addNewPost = (e) => {
    e.preventDefault()
    let post = {
      title: e.target.title.value,
      body: e.target.body.value
    }
    createPost(post)
    nav('/')
  }
  return (
    <div className='post'>
      <h1>Log new location</h1>
      <form onSubmit={addNewPost}>
        Location Name <input type='text' name='title' /><br />
        Hints <br /><textarea name='body' cols='40' rows='10'></textarea><br />
        <input type='submit' /> 
      </form> <br/>
    </div>
  )
}