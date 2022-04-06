import React from 'react'
import foods from '../../../foodData'
import Food from '../Food'

export default function Foodscreen() {
  return (
    <div>
        <div className="row">
              {foods.map(food=>{


                  return <div className="col-md-4">
                      <div>
                          <Food food={food}/>
                      </div>
                  </div>
              })}
        </div>
         
        </div>
  )
}
