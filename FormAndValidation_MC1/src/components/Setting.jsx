import React from 'react'

const Setting = ({data , setData}) => {

  const handleThemeChange = (e) => {
    setData(prev => ({
      ...prev ,
      theme : e.target.name
    }))
  }

  return (
    <div>Setting

      <div>
        <label htmlFor="dark">
        <input type="radio" name="dark" id="" checked={data.theme === 'dark'} onChange={handleThemeChange}/>
          Dark 
        </label>
      </div>
      <div>
        <label htmlFor="light">
        <input type="radio" name="light" id="" checked={data.theme === 'light'} onChange={handleThemeChange}/>
          Light 
        </label>
      </div>

    </div>
  )
}

export default Setting