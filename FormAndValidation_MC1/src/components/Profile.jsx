
const Profile=({data, setData, err})=>{

    const handleValueChange = (e,item) =>{
        
        setData((prevState)=>({
            ...prevState,
            [item]:e.target.value
        }));
    }

    return(
        <>
        <div>
            <div>
                <label htmlFor="">
                    name : 
                </label>
                <input type="text" name="" id="" value={data.name} onChange={(e)=>handleValueChange(e,"name")}/>
                {err.name &&  <div>{err.name}</div>}
                
            </div>
            <div>
                <label htmlFor="">
                    age : 
                </label>
                <input type="number" name="" id="" value={data.age} onChange={(e)=>handleValueChange(e,"age")}/>
                {err.age &&  <div>{err.age}</div>}
            </div>
            <div>
                <label htmlFor="">
                    email : 
                </label>
                <input type="text" name="" id="" value={data.email} onChange={(e)=>handleValueChange(e,"email")}/>
               {err.email &&  <div>{err.email}</div>}
            </div>
        </div>
        </>
    )
}

export default Profile;