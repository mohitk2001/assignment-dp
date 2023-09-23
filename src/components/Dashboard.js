import React,{useState,useEffect} from 'react'
import DashboardCard from './Card'
import "./Dashboard.css"
import axiosIns from '../api/axiosInstance'
const Dashboard = () => {
    const [petService, setpetService] = useState([])
    useEffect(() => {
      axiosIns.get("/services").then((res)=>{
        
        setpetService(res.data)
      })
      .catch((err)=>{
        
      })
    }, [])
    
  return (
    <div className='dashboard'>
        {
            petService?.map((service,index)=>(
                <DashboardCard key={index} petservice={service}/>
            ))
        }
        {/* <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/> */}
    </div>
  )
}

export default Dashboard