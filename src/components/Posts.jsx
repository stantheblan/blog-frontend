import { useState, useEffect } from 'react'
import { getPosts } from '../services/posts-api.js'

export function Posts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPosts()
      .then(res => setData(res.data))
  }, [data])

  return (
    <div className='blog'>
      <h1>Where's Waldo</h1><br />
      <div className='postContainer'>
        {
          data.map((e, i) => {
            return (
              <div key={i} className='homePost'>
                <h2><a href={`/${e._id}`}>{e.title}</a></h2>
                <p>{e.body}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}