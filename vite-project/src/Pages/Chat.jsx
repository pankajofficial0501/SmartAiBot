import React, { useContext } from 'react'
import { dataContext, prevUser } from '../Context/UserContext'

function Chat() {
    
    let {showResult,prevFeature,genImgUrl}=useContext(dataContext)
  return (
    <div className='chat-page'>
      <div className="user">

        {prevFeature=="upimg"?<><img src={prevUser.imgUrl} alt="" />
        <span>{prevUser.prompt}</span></>:<span>{prevUser.prompt}</span>}

      </div>
      <div className="ai">

       {prevFeature=="genimg"
       ?
       <>
       {!genImgUrl?<span>Generating Image...</span>:<img src={genImgUrl} alt="" />}
       </>
       :
       !showResult
       ?
       <span>Loading...</span>
       :
       <span>{showResult}</span>}
      </div>
    </div>
  )
}

export default Chat
