import React from 'react'
import Feeds from '../../Components/feeds/feeds'
import Rightbar from '../../Components/rightbar.jsx/rightbar'
import Sidebar from '../../Components/sidebar/sidebar'
import Topbar from '../../Components/topbar/topbar'
import "./home.css"


export default function Home() {
  return (
    <div>
      <Topbar/>
      <div className="homesec">
      <Sidebar/>
      <Feeds/>
      <Rightbar/>
      </div>
    </div>
  )
}