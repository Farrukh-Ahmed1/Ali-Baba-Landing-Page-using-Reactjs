import React from 'react'
import BottomCards from './BottomCards'
import "../../CssFiles/Navbar.css"

const BottomCard = () => {
   return (
      <>
         <h1 style={{ margin: "2rem auto", width: "85%" }}>JUST FOR YOU</h1>
         <div className="bottom_cards_main">
            <BottomCards
               img="https://s.alicdn.com/@sc04/kf/Hb7eae8469c00471e935ff7b3b51802d3x.jpg"
               text="Hip Hop Gold Plated Hip Hop Iced Out Micro  Diamond Wholesale Luxury Watch"
               price="Rs 4,987"
               des="10 sets minimum order"
            />
            <BottomCards
               img="https://s.alicdn.com/@sc04/kf/Hb7eae8469c00471e935ff7b3b51802d3x.jpg"
               text="Hip Hop Gold Plated Hip Hop Iced Out Micro  Diamond Wholesale Luxury Watch"
               price="Rs 4,987"
               des="10 sets minimum order"
            />
            <BottomCards
               img="https://s.alicdn.com/@sc04/kf/Hb7eae8469c00471e935ff7b3b51802d3x.jpg"
               text="Hip Hop Gold Plated Hip Hop Iced Out Micro  Diamond Wholesale Luxury Watch"
               price="Rs 4,987"
               des="10 sets minimum order"
            />
            <BottomCards
               img="https://s.alicdn.com/@sc04/kf/Hb7eae8469c00471e935ff7b3b51802d3x.jpg"
               text="Hip Hop Gold Plated Hip Hop Iced Out Micro  Diamond Wholesale Luxury Watch"
               price="Rs 4,987"
               des="10 sets minimum order"
            />
         </div>
      </>
   )
}
export default BottomCard
