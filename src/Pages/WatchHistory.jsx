import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'



function WatchHistory() {


  const [history,setHistory] = useState([])

  useEffect(()=>{
      getHistory()
  },[])

  const getHistory=async()=>{
    const result = await getHistoryAPI()

    if(result.status==200){
      setHistory(result.data)
    }
    else{
      console.log("API failed");
      setHistory(result.message)
      
    }
  }

  console.log(history);


  const removeVideoHistory = async(id)=>{
    await deleteHistoryAPI(id)
    getHistory()

  }
  

  return (
    <>
      <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2 className='text-success'>Watch-History</h2>
        <Link style={{textDecoration:"none",color:"lightgreen",fontSize:"30px"}} to={"/home"}>Back to Home <i className="fa-solid fa-arrow-rotate-left fa-beat-fade"></i></Link>
      </div>


      <div className="container mt-5 mb-3 w-100" style={{height:"300px"}}>
        <table className='table shadow p-3 m-2 border border-1'>
          <tr className='border border-2 text-center'>
            <th className='border border-2 py-3'>#</th>
            <th className='border border-2 py-3'>Title</th>
            <th className='border border-2 py-3'>Video URL</th>
            <th className='border border-2 py-3'>Time stamp</th>
            <th className='border border-2 py-3'>Action</th>
          </tr>
          {
            history?.length>0?history.map((video,index)=>(
            
            <tr className='border border-2 text-center'>
            <td className='border border-2 px-2'>{index+1}</td>
            <td className='border border-2 px-2'>{video?.caption}</td>
            <td className='border border-2 px-2'><a href={video?.link} style={{textDecoration:"none"}} target='_blank'>{video?.link} </a></td>
            <td className='border border-2'>{video?.timeStamp}</td>
            <td className='border border-2'><button className='text-danger btn' onClick={()=>removeVideoHistory(video?.id)}><i class="fa-solid fa-trash"></i></button></td>
          </tr>
          )):<p className='text-danger fw-bolder'>Nothing to display</p>
          }
        </table>
      </div>


    </>
  )
}

export default WatchHistory
