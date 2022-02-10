
import React, { useState, useEffect } from 'react';


const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
function Api() {

  const [infos, setInfos] = useState([])
  

  const fetchInfos = async () => {
    const reponse = await fetch(url)
    const newInfo = await reponse.json()
    setInfos(newInfo)
  
  }
  useEffect(() => {
    fetchInfos()
  }, [])
 

  return (
    <section className="section" >
      <div className="title">
        <h2>Api</h2>
        <div className="title-underline"></div>
      </div>
      <div className="jobs-container">
        <div className="btn-container">
          {infos.map((item, index) => {
            return (
                <>
                <div key={index} className="container">
               <p> id: {item.id}</p>
               <p> Noms: {item.name}</p>
               <p> Email: {item.email}</p>
               </div>
               </>  
             
            )
          })}
        </div>
        
      </div>
     
    </section>
  )
}

export default Api