import '../CSS/Videos.css'

import React, { useEffect, useState } from 'react';


const Videos = ({data}) => {


 

  return (
   
          <div className="card">
            <img className='thumbnail' src={data.thubnailImg} alt="" />
            <div className="vid_info">

              <img className='channel_avatar' src={data.avatar} alt="" />
            <div className="vid_detail">
              <div className="vid_title">{data.title}</div>
              <div className="vid_channelname">{data.channelName}</div>
              <div className="vid_last">

              <div className="vid_stats">{data.views} . </div>
              <div className="vid_time">{data.time}</div>
              </div>



            </div>
            </div>
          </div>
    
       
    
    
  )
}

export default Videos