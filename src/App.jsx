import { useEffect, useState  } from "react"
import Banner from "./components/Banner"
import axios from "axios"

function App() {

  const[users,setUsers]=useState([])



  useEffect(() => {
    const fetchData = async()=>{
      try{
        const {data} = await axios.get('https://dummyjson.com/users')
        setUsers(data.users)
        
      }catch(error){
        console.log(error);
      }
    }

    fetchData()
  }, [])

  return (
    <>
    <div className="bg-amber-100 h-screen flex justify-center items-center">
      <Banner users={users} />
    </div>
    </>
  )
}

export default App
