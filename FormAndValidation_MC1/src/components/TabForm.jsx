import  Profile from "./Profile"
import Interest from "./Interest"
import  Setting  from "./Setting"
import { useState } from "react"

const TabForm = ()=>{
    const [activeTab ,setActiveTab] = useState(0);
    const [errors, setErr] =useState({})
    const [data , setData] = useState({
        name : "yashaswi",
        age : 21,
        email : "yashaswi9199@gmail.com",
        interest : ["chess" , "manga"],
        theme : "dark"
    })

    const tabs = [
        {
            name: "profile",
            component : Profile,
            validate : ()=>{
                const err={}
                if(!data.name || data.name.length<2){
                    err.name = "Name is not valid";
                }
                if(!data.age || data.age<18){
                    err.age = "Age is not valid";
                }
                if(!data.email || data.email.length<2){
                    err.email = "Email is not valid";
                }

                setErr(err);
                return err.name || err.age || err.email ? false : true;
            }

        },
        {
            name: "Interest",
            component : Interest
        },
        {
            name: "setting",
            component : Setting
        }
    ]
        const ActiveTabComponent =tabs[activeTab].component;

        const handlePrev = ( )=>{
            const isValid = tabs[activeTab].validate? tabs[activeTab].validate() : true;
            if(isValid){
            setActiveTab(prev => prev -1)
            }
        }
        const handleNext = ( )=>{
             const isValid = tabs[activeTab].validate? tabs[activeTab].validate() : true;
            if(isValid){
            setActiveTab(prev => prev +1)
            }
        }
        const handleSubmit = ( )=>{
            console.log("submit")
        }

    return (
        <>
        <div className="tabs">
            {
                tabs.map((t,idx)=><div key={idx} className="tab" onClick={()=>setActiveTab(idx)}> {t.name}</div>)
            }
        </div>
        <div className="tab-body">
            <ActiveTabComponent data={data} setData={setData} err={errors}/>
        </div>
        {activeTab>0 && <button onClick={handlePrev}>Prev</button>}
        {activeTab<tabs.length-1 && <button onClick={handleNext}>Next</button>}
        {activeTab === tabs.length-1 && <button onClick={handleSubmit}>Submit</button>}

        </>
    )
}

export default TabForm;