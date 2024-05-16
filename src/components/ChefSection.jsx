import React from 'react'
import ChefCard from './ChefCard'

function ChefSection() {
    const chefs= [
        {
            name:"Juan Carlos",
            img:"/images/chefs/chef_01.jpg",
            recepiesCount:"10",
            cusine:"Mexican"
        },
        {
            name:"Peter Chang",
            img:"/images/chefs/chef_02.jpg",
            recepiesCount:"10",
            cusine:"Chinese"
        },
        {
            name:"Sanjeev Kapoor",
            img:"/images/chefs/chef_03.jpg",
            recepiesCount:"70",
            cusine:"Indian"
        },
        {
            name:"Venkatesh Bhat",
            img:"/images/chefs/chef_04.jpg",
            recepiesCount:"50",
            cusine:"Indian"
        },{
            name:"Dhamotharan",
            img:"/images/chefs/chef_05.jpeg",
            recepiesCount:"35",
            cusine:"Indian"
        },
        {
            name:"Gordan Ramsay",
            img:"/images/chefs/chef_06.jpeg",
            recepiesCount:"10",
            cusine:"Continental"
        }
    ]
  return<>
   <div className="section chefs">
      <h1 className="title"> Our Top Chefs</h1>
      <div className="top-chefs-container">
        {
            chefs.map (chef=> <ChefCard key={chef.name} chef={chef}/>)
        }
       </div>
   </div>
  </>
}

export default ChefSection