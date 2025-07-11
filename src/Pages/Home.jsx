import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'



function Home() {

  const [uploadVideoResponse,setUploadVideoResponse] = useState({})
  const [dropVideoResponse,setDropVideoResponse] = useState({})


  return (
    <>
      <div className="container mt-5 d-flex justify-content-between mb-3">
        <div className="add-videos">
          <Add setUploadVideoResponse={setUploadVideoResponse}/>
        </div>

        <Link to={'/watch-history'} style={{textDecoration:'none',fontSize:"26px"}} className='<i class="fa-solid fa-right-to-bracket"></i> text-success'>Watch History</Link>
      </div>


      <div className="container-fluid mt-5 w-100 row">
        <div className="col-lg-9 all-videos ps-5">
          <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
        </div>
        <div className="col-lg-3 all-category">
          <Category dropVideoResponse={dropVideoResponse}/>
        </div>
      </div>
    </>
  )
}

export default Home
