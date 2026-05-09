import React, { useEffect } from 'react'

const Interest = ({data , setData}) => {
  const {interest} =data;

  const handleInterestChange = (e)=>{
    setData( prev =>({
      ...prev,
      interest : e.target.checked?
                  [...prev.interest,e.target.name] :
                  prev.interest.filter( (i) =>(i!==e.target.name))
    }))

   
  }

  return (
    <div>Interest

        <div>
          <label htmlFor="">
            <input type="checkbox" name="gaming" id="" onChange={handleInterestChange} checked ={interest.includes("gaming")}/>
            gaming
          </label>
        </div>
        <div>
          <label htmlFor="">
            <input type="checkbox" name="chess" id="" onChange={handleInterestChange} checked ={interest.includes("chess")}/>
            chess
          </label>
        </div>
        <div>
          <label htmlFor="">
            <input type="checkbox" name="manga" id="" onChange={handleInterestChange} checked ={interest.includes("manga")}/>
            manga
          </label>
        </div>
        <div>
          <label htmlFor="">
            <input type="checkbox" name="sleep" id="" onChange={handleInterestChange} checked ={interest.includes("sleep")} />
            sleep
          </label>
        </div>
    </div>
  )
}

export default Interest;