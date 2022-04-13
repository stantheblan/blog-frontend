import axios from 'axios'

const URL = 'http://localhost:3001/posts/'

// Get all posts
export const getPosts = () => {
  return axios.get(URL)
}

// Get one post
export const getPost = (id) => {
  return axios.get(`${URL}${id}`)
}

// Create post
export const createPost = (createdPost) => {
  return axios.post(`${URL}`, createdPost)
}

// Delete post
export const deletePost = (id) => {
  return axios.delete(`${URL}${id}`)
}

// Update post
export const editPost = (id, updatedPost) => {
  return axios.put(`${URL}${id}`, updatedPost)
}