import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import Spinner from './Spinner';

function Blogs() {
  //Consume
  const {posts,loading} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-167.5 h-fit py-8 flex flex-col gap-y-7 mt-16.5 mb-17.5 justify-center items-center'>
      {
        loading ?
         (<Spinner />) : 
         (
          posts.length === 0 ? (<div>
            <p>No Post Found</p>
          </div>) : 
          (posts.map( (post) => (
            <div key={post.id}>
              <p className='font-bold text-lg'>{post.title}</p>
              <p className='text-sm mt-1'>
                By <span className='italic'>{post.author}</span> On <span className='underline font-bold'>{post.category}</span>
              </p>
              <p className='text-sm mt-1'>Posted on {post.date}</p>
              <p className='text-md mt-3.5'>{post.content}</p>
              <div className='flex gap-x-3'>
                {post.tags.map((tag, index) => {
                  return <span key={index} className='text-blue-700 underline font-bold text-xs mt-1.25'>{` #${tag}`}</span>
                })}
              </div>
            </div>
          )))
        )
      }
    </div>
  )
}

export default Blogs