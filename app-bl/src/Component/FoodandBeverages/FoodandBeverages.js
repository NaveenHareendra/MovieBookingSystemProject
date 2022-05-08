import React from 'react'
import "./FoodandBeverages.css";
import { useSelector,useDispatch } from 'react-redux';
import Foodscreen from './screen/Foodscreen';


export default function FoodandBeverages() {
    const cartstate = useSelector(state=>state.cartReducer)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="#">FoodandBeverages</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                        {/* <a className="nav-link" href="#">
                                Home
                            </a> */}
                        </li>  
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                Cart{cartstate.cartItems.length}
                            </a>
                        </li>
                       
                    </ul>
                    
                </div>
            </nav>

            <Foodscreen/>
        </div>


    )
}
