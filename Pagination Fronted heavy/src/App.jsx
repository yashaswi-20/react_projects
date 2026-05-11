
import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [apiRes ,setApiRes] = useState({});
  const [limit , setLimit] = useState(5);
  const [page, setPage] = useState(1);


  
  const handleApiRes =() =>{
    console.log(limit)
    const data = fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(page-1)* limit}`)
    .then((d)=>d.json())
    .then((d)=> {
      setApiRes(d);
    })
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    handleApiRes()
  },[page,limit])
  


  const handleNextClick = () =>{
  
       
        setPage(prev=>prev+1)
      
  }

  return (
   <>
   
   <h1>Pagination</h1>
   <div>
   {apiRes?.products?.map((d, idx)=>{
    return (
      <div key={idx} > 
        <h3>{d.id+ " "+ d.title}</h3>
        <ul>
          <li>{d.category}</li>
          <li>{d.description}</li>
          <li>{d.rating}</li>
        </ul>
      </div>
    )
   })}

   </div>

   <div>
      <input type="number" name="" id="" onChange={(e)=>{setLimit(Number(e.target.value));
        setPage(1)
      } } />
    

   </div>
   <div>
  {page>=2 && <button onClick={()=>setPage((prev)=>prev-1)}>Prev</button>}
    <button onClick={handleNextClick}>Next</button>
   </div>

   </>
  )
}

export default App
