import { useState, useEffect } from 'react'
import { getPosts } from '../services/posts-api.js'

export function Posts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPosts()
      .then(res => setData(res.data))
  }, [data])

  return (
    <div>
      <h1>Where's Waldo</h1><br />
      <div>
        {
          data.map((e, i) => {
            return (
              <div key={i}>
                <h2><a href={`/${e._id}`}>{e.title}</a></h2>
                <h3>{e.body}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}