import React, { useContext, useEffect } from 'react'
import Header from '../component/contexthook/Header'
import Blogs from '../component/contexthook/Blogs'
import Pagination from '../component/contexthook/Pagination'
import { AppContext } from '../context/AppContext'

function ContextHooks() {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },[]);
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
        <Header />
        <Blogs />
        <Pagination />
    </div>
  )
}

export default ContextHooks