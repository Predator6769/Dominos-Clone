import './App.css';
import NavBar from './components/NavBar';
import ProductMenu from './components/ProductMenu';
import margarita from './components/margarita.jpg'
import farmhouse from './components/farmhouse.jpg'
import peppypanner from './components/peppypanner.jpg'
import veg_extravaganza from './components/vegextravagenza.JPG'
import veggie_paradise from './components/veggieparadise.JPG'
import pepper_barbecue_chicken from './components/pepperbarbecuechicken.JPG'
import chicken_saussage from './components/chickensaussage.JPG'
import cheese_corn from './components/cheeseandcorn.JPG'
import chicken_golden_delight from './components/chickengoldendelight.JPG'
import chicken_fiesta from './components/chickenfiesta.JPG'
import chicken_peperoni from './components/chickenpeproni.JPG'
import keema_do_pyasa from './components/keemadopyasa.JPG'
import pepper_barbeque_and_onion from './components/pepperbarbecueandonion.JPG'
import CustomiseMenu from './components/CustomiseMenu';
import React, { useLayoutEffect, useRef, useState,useEffect } from 'react';
import AddToCart from './components/AddToCart';
import LoginPage from './components/LoginPage';
import Address from './components/Address';
import ProfileEditMenu from './components/ProfileEditMenu';
import useRazorpay from "react-razorpay";
// import Popup from 'reactjs-popup'; 




function App() {
  const Razorpay=useRazorpay();
  const allcategory = [{ cat_title: "BESTSELLERS", cat_products: [{ title: "Margherita", description: "A classic delight with 100% Real mozzarella cheese", pizza_image: margarita, topping: ["none"], veg: true, dets1: { regular: { newhandtossed: [true, 99], wheatthincrust: [true, 129], cheeseburst: [true, 174], freshpanpizza: [true, 129], classichandtossed: [true, 99] }, medium: { newhandtossed: [true, 199], wheatthincrust: [true, 249], cheeseburst: [true, 298], freshpanpizza: [true, 239], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 99], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 99], medium: [true, 199], large: [true, 399] }, wheatthincrust: { regular: [true, 129], medium: [true, 249], large: [false, 399] }, cheeseburst: { regular: [true, 174], medium: [true, 298], large: [false, 399] }, freshpanpizza: { regular: [true, 129], medium: [true, 239], large: [false, 399] }, classichandtossed: { regular: [true, 99], medium: [false, 199], large: [false, 399] } } }, { title: "Farmhouse", description: "Delightful combination of onion, capsicum, tomato & grilled mushroom", pizza_image: farmhouse, veg: true, topping: ["Grilled Mushroom", "Onion", "Crisp Capsicum", "Fresh Tomato"], dets1: { regular: { newhandtossed: [true, 229], wheatthincrust: [true, 259], cheeseburst: [true, 304], freshpanpizza: [true, 259], classichandtossed: [true, 229] }, medium: { newhandtossed: [true, 399], wheatthincrust: [true, 449], cheeseburst: [true, 498], freshpanpizza: [true, 439], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 599], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 229], medium: [true, 399], large: [true, 599] }, wheatthincrust: { regular: [true, 259], medium: [true, 449], large: [false, 399] }, cheeseburst: { regular: [true, 304], medium: [true, 498], large: [false, 399] }, freshpanpizza: { regular: [true, 259], medium: [true, 439], large: [false, 399] }, classichandtossed: { regular: [true, 229], medium: [false, 199], large: [false, 399] } } }, { title: "Peppy Paneer", description: "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika", pizza_image: peppypanner, veg: true, topping: ["Crisp Capsicum", "Panner", "Red Pepper"], dets1: { regular: { newhandtossed: [true, 229], wheatthincrust: [true, 259], cheeseburst: [true, 304], freshpanpizza: [true, 259], classichandtossed: [true, 229] }, medium: { newhandtossed: [true, 399], wheatthincrust: [true, 449], cheeseburst: [true, 498], freshpanpizza: [true, 439], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 599], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 229], medium: [true, 399], large: [true, 599] }, wheatthincrust: { regular: [true, 259], medium: [true, 449], large: [false, 399] }, cheeseburst: { regular: [true, 304], medium: [true, 498], large: [false, 399] }, freshpanpizza: { regular: [true, 259], medium: [true, 439], large: [false, 399] }, classichandtossed: { regular: [true, 229], medium: [false, 199], large: [false, 399] } } }, { title: "Veggie Paradise", description: "The awesome foursome! Golden corn, black olives, capsicum, red paprika", pizza_image: veggie_paradise, veg: true, topping: ["Crisp Capsicum", "Red Pepper", "Golden Corn", "Black Olive"], dets1: { regular: { newhandtossed: [true, 229], wheatthincrust: [true, 259], cheeseburst: [true, 304], freshpanpizza: [true, 259], classichandtossed: [true, 204] }, medium: { newhandtossed: [true, 399], wheatthincrust: [true, 449], cheeseburst: [true, 498], freshpanpizza: [true, 439], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 599], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 229], medium: [true, 399], large: [true, 599] }, wheatthincrust: { regular: [true, 259], medium: [true, 449], large: [false, 399] }, cheeseburst: { regular: [true, 304], medium: [true, 498], large: [false, 399] }, freshpanpizza: { regular: [true, 259], medium: [true, 439], large: [false, 399] }, classichandtossed: { regular: [true, 229], medium: [false, 199], large: [false, 399] } } }, { title: "Veg Extravaganza", description: "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese", pizza_image: veg_extravaganza, veg: true, topping: ["Extra Cheese", "Grilled Mushroom", "Onion", "Crisp Capsicum", "Fresh Tomato", "Golden Corn", "Black Olive"], dets1: { regular: { newhandtossed: [true, 249], wheatthincrust: [true, 279], cheeseburst: [true, 324], freshpanpizza: [true, 279], classichandtossed: [true, 349] }, medium: { newhandtossed: [true, 459], wheatthincrust: [true, 509], cheeseburst: [true, 558], freshpanpizza: [true, 499], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 699], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 249], medium: [true, 459], large: [true, 699] }, wheatthincrust: { regular: [true, 279], medium: [true, 509], large: [false, 399] }, cheeseburst: { regular: [true, 324], medium: [true, 558], large: [false, 399] }, freshpanpizza: { regular: [true, 279], medium: [true, 499], large: [false, 399] }, classichandtossed: { regular: [true, 249], medium: [false, 199], large: [false, 399] } } }, { title: "Cheese n Corn", description: "Sweet & Juicy Golden corn and 100% real mozzarella cheese in a delectable combination !", pizza_image: cheese_corn, veg: true, topping: ["none"], dets1: { regular: { newhandtossed: [true, 169], wheatthincrust: [true, 199], cheeseburst: [true, 244], freshpanpizza: [true, 199], classichandtossed: [true, 169] }, medium: { newhandtossed: [true, 309], wheatthincrust: [true, 359], cheeseburst: [true, 408], freshpanpizza: [true, 349], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 499], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 249], medium: [true, 459], large: [true, 699] }, wheatthincrust: { regular: [true, 279], medium: [true, 509], large: [false, 399] }, cheeseburst: { regular: [true, 324], medium: [true, 558], large: [false, 399] }, freshpanpizza: { regular: [true, 279], medium: [true, 499], large: [false, 399] }, classichandtossed: { regular: [true, 249], medium: [false, 199], large: [false, 399] } } }, { title: "Pepper Barbecue Chicken", description: "Pepper barbecue chicken for that extra zing", pizza_image: pepper_barbecue_chicken, veg: false, topping: ["none"], dets1: { regular: { newhandtossed: [true, 229], wheatthincrust: [true, 259], cheeseburst: [true, 304], freshpanpizza: [true, 259], classichandtossed: [true, 229] }, medium: { newhandtossed: [true, 399], wheatthincrust: [true, 449], cheeseburst: [true, 498], freshpanpizza: [true, 439], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 599], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 229], medium: [true, 399], large: [true, 599] }, wheatthincrust: { regular: [true, 259], medium: [true, 449], large: [false, 399] }, cheeseburst: { regular: [true, 304], medium: [true, 498], large: [false, 399] }, freshpanpizza: { regular: [true, 259], medium: [true, 439], large: [false, 399] }, classichandtossed: { regular: [true, 229], medium: [false, 199], large: [false, 399] } } }, { title: "Chicken Sausage", description: "American classic! Spicy, herbed chicken sausage on pizza", pizza_image: chicken_saussage, veg: false, topping: ["none"], dets1: { regular: { newhandtossed: [true, 189], wheatthincrust: [true, 219], cheeseburst: [true, 264], freshpanpizza: [true, 219], classichandtossed: [true, 189] }, medium: { newhandtossed: [true, 339], wheatthincrust: [true, 389], cheeseburst: [true, 438], freshpanpizza: [true, 379], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 539], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 189], medium: [true, 339], large: [true, 539] }, wheatthincrust: { regular: [true, 219], medium: [true, 389], large: [false, 399] }, cheeseburst: { regular: [true, 264], medium: [true, 438], large: [false, 399] }, freshpanpizza: { regular: [true, 219], medium: [true, 379], large: [false, 399] }, classichandtossed: { regular: [true, 189], medium: [false, 199], large: [false, 399] } } }] }, { cat_title: "VEG PIZZAS", cat_products: [{ title: "Margherita", description: "A classic delight with 100% Real mozzarella cheese", pizza_image: margarita, veg: true, topping: ["none"], dets1: { regular: { newhandtossed: [true, 99], wheatthincrust: [true, 129], cheeseburst: [true, 174], freshpanpizza: [true, 129], classichandtossed: [true, 99] }, medium: { newhandtossed: [true, 199], wheatthincrust: [true, 249], cheeseburst: [true, 298], freshpanpizza: [true, 239], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 99], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 99], medium: [true, 199], large: [true, 399] }, wheatthincrust: { regular: [true, 129], medium: [true, 249], large: [false, 399] }, cheeseburst: { regular: [true, 174], medium: [true, 298], large: [false, 399] }, freshpanpizza: { regular: [true, 129], medium: [true, 239], large: [false, 399] }, classichandtossed: { regular: [true, 99], medium: [false, 199], large: [false, 399] } } }, { title: "Farmhouse", description: "Delightful combination of onion, capsicum, tomato & grilled mushroom", pizza_image: farmhouse, veg: true, topping: ["Grilled Mushroom", "Onion", "Crisp Capsicum", "Fresh Tomato"], dets1: { regular: { newhandtossed: [true, 229], wheatthincrust: [true, 259], cheeseburst: [true, 304], freshpanpizza: [true, 259], classichandtossed: [true, 229] }, medium: { newhandtossed: [true, 399], wheatthincrust: [true, 449], cheeseburst: [true, 498], freshpanpizza: [true, 439], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 599], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 229], medium: [true, 399], large: [true, 599] }, wheatthincrust: { regular: [true, 259], medium: [true, 449], large: [false, 399] }, cheeseburst: { regular: [true, 304], medium: [true, 498], large: [false, 399] }, freshpanpizza: { regular: [true, 259], medium: [true, 439], large: [false, 399] }, classichandtossed: { regular: [true, 229], medium: [false, 199], large: [false, 399] } } }, { title: "Peppy Paneer", description: "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika", pizza_image: peppypanner, veg: true, topping: ["Crisp Capsicum", "Panner", "Red Pepper"], dets1: { regular: { newhandtossed: [true, 229], wheatthincrust: [true, 259], cheeseburst: [true, 304], freshpanpizza: [true, 259], classichandtossed: [true, 229] }, medium: { newhandtossed: [true, 399], wheatthincrust: [true, 449], cheeseburst: [true, 498], freshpanpizza: [true, 439], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 599], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 229], medium: [true, 399], large: [true, 599] }, wheatthincrust: { regular: [true, 259], medium: [true, 449], large: [false, 399] }, cheeseburst: { regular: [true, 304], medium: [true, 498], large: [false, 399] }, freshpanpizza: { regular: [true, 259], medium: [true, 439], large: [false, 399] }, classichandtossed: { regular: [true, 229], medium: [false, 199], large: [false, 399] } } }, { title: "Veggie Paradise", description: "The awesome foursome! Golden corn, black olives, capsicum, red paprika", pizza_image: veggie_paradise, veg: true, topping: ["Crisp Capsicum", "Red Pepper", "Golden Corn", "Black Olive"], dets1: { regular: { newhandtossed: [true, 229], wheatthincrust: [true, 259], cheeseburst: [true, 304], freshpanpizza: [true, 259], classichandtossed: [true, 204] }, medium: { newhandtossed: [true, 399], wheatthincrust: [true, 449], cheeseburst: [true, 498], freshpanpizza: [true, 439], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 599], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 229], medium: [true, 399], large: [true, 599] }, wheatthincrust: { regular: [true, 259], medium: [true, 449], large: [false, 399] }, cheeseburst: { regular: [true, 304], medium: [true, 498], large: [false, 399] }, freshpanpizza: { regular: [true, 259], medium: [true, 439], large: [false, 399] }, classichandtossed: { regular: [true, 229], medium: [false, 199], large: [false, 399] } } }, { title: "Veg Extravaganza", description: "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese", pizza_image: veg_extravaganza, veg: true, topping: ["Extra Cheese", "Grilled Mushroom", "Onion", "Crisp Capsicum", "Fresh Tomato", "Golden Corn", "Black Olive"], dets1: { regular: { newhandtossed: [true, 249], wheatthincrust: [true, 279], cheeseburst: [true, 324], freshpanpizza: [true, 279], classichandtossed: [true, 349] }, medium: { newhandtossed: [true, 459], wheatthincrust: [true, 509], cheeseburst: [true, 558], freshpanpizza: [true, 499], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 699], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 249], medium: [true, 459], large: [true, 699] }, wheatthincrust: { regular: [true, 279], medium: [true, 509], large: [false, 399] }, cheeseburst: { regular: [true, 324], medium: [true, 558], large: [false, 399] }, freshpanpizza: { regular: [true, 279], medium: [true, 499], large: [false, 399] }, classichandtossed: { regular: [true, 249], medium: [false, 199], large: [false, 399] } } }, { title: "Cheese n Corn", description: "Sweet & Juicy Golden corn and 100% real mozzarella cheese in a delectable combination !", pizza_image: cheese_corn, topping: ["none"], veg: true, dets1: { regular: { newhandtossed: [true, 169], wheatthincrust: [true, 199], cheeseburst: [true, 244], freshpanpizza: [true, 199], classichandtossed: [true, 169] }, medium: { newhandtossed: [true, 309], wheatthincrust: [true, 359], cheeseburst: [true, 408], freshpanpizza: [true, 349], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 499], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 249], medium: [true, 459], large: [true, 699] }, wheatthincrust: { regular: [true, 279], medium: [true, 509], large: [false, 399] }, cheeseburst: { regular: [true, 324], medium: [true, 558], large: [false, 399] }, freshpanpizza: { regular: [true, 279], medium: [true, 499], large: [false, 399] }, classichandtossed: { regular: [true, 249], medium: [false, 199], large: [false, 399] } } }] }, {
    cat_title: "NONVEG PIZZAS", cat_products: [{ title: "Pepper Barbecue Chicken", description: "Pepper barbecue chicken for that extra zing", pizza_image: pepper_barbecue_chicken, veg: false, topping: ["none"], dets1: { regular: { newhandtossed: [true, 229], wheatthincrust: [true, 259], cheeseburst: [true, 304], freshpanpizza: [true, 259], classichandtossed: [true, 229] }, medium: { newhandtossed: [true, 399], wheatthincrust: [true, 449], cheeseburst: [true, 498], freshpanpizza: [true, 439], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 599], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 229], medium: [true, 399], large: [true, 599] }, wheatthincrust: { regular: [true, 259], medium: [true, 449], large: [false, 399] }, cheeseburst: { regular: [true, 304], medium: [true, 498], large: [false, 399] }, freshpanpizza: { regular: [true, 259], medium: [true, 439], large: [false, 399] }, classichandtossed: { regular: [true, 229], medium: [false, 199], large: [false, 399] } } }, { title: "Chicken Sausage", description: "American classic! Spicy, herbed chicken sausage on pizza", pizza_image: chicken_saussage, veg: false, topping: ["none"], dets1: { regular: { newhandtossed: [true, 189], wheatthincrust: [true, 219], cheeseburst: [true, 264], freshpanpizza: [true, 219], classichandtossed: [true, 189] }, medium: { newhandtossed: [true, 339], wheatthincrust: [true, 389], cheeseburst: [true, 438], freshpanpizza: [true, 379], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 539], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 189], medium: [true, 339], large: [true, 539] }, wheatthincrust: { regular: [true, 219], medium: [true, 389], large: [false, 399] }, cheeseburst: { regular: [true, 264], medium: [true, 438], large: [false, 399] }, freshpanpizza: { regular: [true, 219], medium: [true, 379], large: [false, 399] }, classichandtossed: { regular: [true, 189], medium: [false, 199], large: [false, 399] } } }, { title: "Chicken Pepperoni", description: "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese", pizza_image: chicken_peperoni, veg: false, topping: ["none"], dets1: { regular: { newhandtossed: [true, 189], wheatthincrust: [true, 219], cheeseburst: [true, 264], freshpanpizza: [true, 219], classichandtossed: [true, 189] }, medium: { newhandtossed: [true, 339], wheatthincrust: [true, 389], cheeseburst: [true, 438], freshpanpizza: [true, 379], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 539], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 189], medium: [true, 339], large: [true, 539] }, wheatthincrust: { regular: [true, 219], medium: [true, 389], large: [false, 399] }, cheeseburst: { regular: [true, 264], medium: [true, 438], large: [false, 399] }, freshpanpizza: { regular: [true, 219], medium: [true, 379], large: [false, 399] }, classichandtossed: { regular: [true, 189], medium: [false, 199], large: [false, 399] } } }, { title: "Chicken Fiesta", description: "Grilled chicken rashers, peri-peri chicken, onion & capsicum, a complete fiesta", pizza_image: chicken_fiesta, veg: false, topping: ["none"], dets1: { regular: { newhandtossed: [true, 249], wheatthincrust: [true, 279], cheeseburst: [true, 324], freshpanpizza: [true, 279], classichandtossed: [true, 249] }, medium: { newhandtossed: [true, 459], wheatthincrust: [true, 509], cheeseburst: [true, 558], freshpanpizza: [true, 499], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 699], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 249], medium: [true, 459], large: [true, 699] }, wheatthincrust: { regular: [true, 279], medium: [true, 509], large: [false, 399] }, cheeseburst: { regular: [true, 324], medium: [true, 558], large: [false, 399] }, freshpanpizza: { regular: [true, 279], medium: [true, 499], large: [false, 399] }, classichandtossed: { regular: [true, 249], medium: [false, 199], large: [false, 399] } } }, { title: "Chicken Golden Delight", description: "Double pepper barbecue chicken, golden corn and extra cheese, true delight", pizza_image: chicken_golden_delight, veg: false, topping: ["none"], dets1: { regular: { newhandtossed: [true, 249], wheatthincrust: [true, 279], cheeseburst: [true, 324], freshpanpizza: [true, 279], classichandtossed: [true, 249] }, medium: { newhandtossed: [true, 459], wheatthincrust: [true, 509], cheeseburst: [true, 558], freshpanpizza: [true, 499], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 699], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 249], medium: [true, 459], large: [true, 699] }, wheatthincrust: { regular: [true, 279], medium: [true, 509], large: [false, 399] }, cheeseburst: { regular: [true, 324], medium: [true, 558], large: [false, 399] }, freshpanpizza: { regular: [true, 279], medium: [true, 499], large: [false, 399] }, classichandtossed: { regular: [true, 249], medium: [false, 199], large: [false, 399] } } }, {
      title: "Keema Do Pyaza", description: "Delicious minced chicken keema topped with crunchy onions on your favourite cheesy pizza", pizza_image:
        keema_do_pyasa, veg: false, topping: ["none"], dets1: { regular: { newhandtossed: [true, 189], wheatthincrust: [true, 219], cheeseburst: [true, 264], freshpanpizza: [true, 219], classichandtossed: [true, 189] }, medium: { newhandtossed: [true, 339], wheatthincrust: [true, 389], cheeseburst: [true, 438], freshpanpizza: [true, 379], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 539], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 189], medium: [true, 339], large: [true, 539] }, wheatthincrust: { regular: [true, 219], medium: [true, 389], large: [false, 399] }, cheeseburst: { regular: [true, 264], medium: [true, 438], large: [false, 399] }, freshpanpizza: { regular: [true, 219], medium: [true, 379], large: [false, 399] }, classichandtossed: { regular: [true, 189], medium: [false, 199], large: [false, 399] } }
    }, { title: "Pepper Barbecue & Onion", description: "A classic favourite with pepper barbeque chicken & onion", pizza_image: pepper_barbeque_and_onion, veg: false, topping: ["none"], dets1: { regular: { newhandtossed: [true, 229], wheatthincrust: [true, 259], cheeseburst: [true, 304], freshpanpizza: [true, 259], classichandtossed: [true, 229] }, medium: { newhandtossed: [true, 399], wheatthincrust: [true, 449], cheeseburst: [true, 498], freshpanpizza: [true, 439], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 599], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 229], medium: [true, 399], large: [true, 599] }, wheatthincrust: { regular: [true, 259], medium: [true, 449], large: [false, 304] }, cheeseburst: { regular: [true, 304], medium: [true, 498], large: [false, 399] }, freshpanpizza: { regular: [true, 259], medium: [true, 439], large: [false, 399] }, classichandtossed: { regular: [true, 229], medium: [false, 199], large: [false, 399] } } }]
  }];

  var cat_sc = [];
  var sf = 45;
  const ssc_scale = 400;
  var hjk;
  for (let i = 0; i < allcategory.length; i++) {
    var pl = allcategory[i].cat_products.length;
    let j = pl % 3;
    let k = Math.trunc(pl / 3);
    if (j !== 0) {
      k = k + 1;
    }
    if (sf === 45) {
      hjk = [0, sf + (k * ssc_scale)];
      sf = sf + (k * ssc_scale);
    }
    else {
      hjk = [sf, sf + (k * ssc_scale)];
      sf = sf + (k * ssc_scale);
    }
    cat_sc.push(hjk);
  }
  // const [custdets, setcustdets] = useState({ title: "Margherita", description: "A classic delight with 100% Real mozzarella cheese", pizza_image: margarita, veg: true, dets1: { regular: { newhandtossed: [true, 99], wheatthincrust: [true, 129], cheeseburst: [true, 174], freshpanpizza: [true, 129], classichandtossed: [true, 99] }, medium: { newhandtossed: [true, 199], wheatthincrust: [true, 249], cheeseburst: [true, 298], freshpanpizza: [true, 239], classichandtossed: [false, 99] }, large: { newhandtossed: [true, 99], wheatthincrust: [false, 129], cheeseburst: [false, 174], freshpanpizza: [false, 129], classichandtossed: [false, 99] } }, dets2: { newhandtossed: { regular: [true, 99], medium: [true, 199], large: [true, 399] }, wheatthincrust: { regular: [true, 129], medium: [true, 249], large: [false, 399] }, cheeseburst: { regular: [true, 174], medium: [true, 298], large: [false, 399] }, freshpanpizza: { regular: [true, 129], medium: [true, 239], large: [false, 399] }, classichandtossed: { regular: [true, 99], medium: [false, 199], large: [false, 399] } } });
  const [custdets, setcustdets] = useState(null);
  const [selesize, setselesize] = useState(0);
  const [selecrust, setselecrust] = useState(0);
  const [close, setclose] = useState(0);
  const [price, setprice] = useState(0);
  const [atcdets, setatcdets] = useState([0]);
  const [dispebox, setdispebox] = useState(false);
  const [hbd,sethbd]=useState(0);
  const [logani,setlogani]=useState("mlg");
  var thj = [];
  var hjf = [];
  for (let i = 0; i < allcategory.length; i++) {
    for (let j = 0; j < allcategory[i].cat_products.length; j++) {
      hjf.push(0);
    }
    thj.push(hjf);
    hjf = [];
  }
  const [pitemsq, setpitemsq] = useState(thj);
  const [ghy, setghy] = useState(0);

  const [g5,setg5]=useState([[],[0,0]]);
  function custmenu(e, t, selsize, selcrust, fp,cs) {
    setclose(e);
    let k = 0;
    for (let i = 0; i < allcategory.length; i++) {
      for (let j = 0; j < allcategory[i].cat_products.length; j++) {
        if (t === allcategory[i].cat_products[j].title) {
          setcustdets(allcategory[i].cat_products[j]);
          setghy(pitemsq[i][j]);
          k = 1;
          break;
        }
        if (k === 1)
          break;
      }
    }
    if (selsize === "Regular")
      setselesize(0);
    else if (selsize === "Medium")
      setselesize(1);
    else
      setselesize(2);

    if (selcrust === "New Hand Tossed")
      setselecrust(0)

    else if (selcrust === "100% wheat thin crust")
      setselecrust(1)
    else if (selcrust === "Cheese Burst")
      setselecrust(2);
    else if (selcrust === "Fresh Pan Pizza")
      setselecrust(3);
    else
      setselecrust(4);

    setprice(fp);
    setg5(cs);




  }
  //   function multidcompare(arr1,arr2){
  //     var g=0;
  //     if(arr1.length!==arr2.length)
  //     return false;
  //     for(let i=0;i<arr1.length;i++){
  //     for(let j=0;j<arr1[i].length;j++){
  //         if(arr1[i][j]===arr2[i][j])
  //         g=1;
  //         else
  //         {g=0;
  //         break;
  //         }
  //     }
  //         if(g===0)
  //         break;
  //     }
  //     if(g===1)
  //     return true;
  //     return false;
  // }
  function multidcompare(arr1, arr2) {
    var g = 0, h = 0;
    if ((arr1 === arr2) || (arr1[0].length === 0 && arr2[0].length === 0 && arr2[1][0] === 0 && arr2[1][0] === 0))
      return true;
    if ((arr1[0].length !== arr2[0].length) || (arr1[0].length === 0) || (arr2[0].length === 0))
      return false;
    if ((arr1[0].length !== 0 && arr2[0].length !== 0))
      for (let i = 0; i < arr1[0].length; i++) {
        // for (let j = 0; j < arr1[i].length; j++) 
        if (arr2[0].includes(arr1[0][i]))
          g = 1;
        else {
          g = 0;
          break;
        }
      }
    else
      g = 1;
    if ((arr1[1][0] === arr2[1][0] && arr1[1][1] === arr2[1][1]))
      h = 1;
    if (g === 1 && h === 1)
      return true;
    return false;

  }
  function checkforclose(e) {
    setclose(e);
    setTimeout(function () {
      setcustdets(null);
    }, 500);

  }
  const inr=useRef([]);
  function atcpresseddets(e, titl, desc, img, veg, selsize, selcrust, fp, quantity, customs = 0, e1,mb=0) {
    var g = { title: titl, description: desc, pizzaimg: img, veg: veg, selectedsize: selsize, selectedcrust: selcrust, finalprice: fp, quantity: quantity, customisations: customs };
      
    if (e === 1) {
      if (atcdets[0] === 0 || atcdets.length === 0) {
        var hjk1 = Object.assign([], atcdets);
        hjk1[0] = g;

        setatcdets(hjk1);

      }
      else {

        var hjk2 = Object.assign([], atcdets);
        hjk2.push(g);
        setatcdets(hjk2);
        // setatcdets((state)=>{
        //   console.log(state);                                                                                           
        //   return state; 
        // })
      }
      var gfd=Object.assign([],inr.current);
      for(let k=0;k<inr.current.length;k++)
      if(g.title===inr.current[k][0])
      gfd[k][1]=-1;
      inr.current=gfd;
      proitemsquanupdate(titl, 1, e1);
    }
    else if (e === 0) {
      var h1 = Object.assign([], atcdets);
      var tbg=1,ng=0;
      var ghc=Object.assign([],inr.current);
      for (let i = 0; i < atcdets.length; i++) {
        if (((atcdets[i].title === g.title && multidcompare(atcdets[i].customisations, g.customisations)) || (atcdets[i].title === g.title && atcdets[i].customisations === g.customisations)) && (atcdets[i].selectedsize===g.selectedsize && atcdets[i].selectedcrust===g.selectedcrust)) {
          h1[i] = g;
          if(mb===0)
          {for(let n=0;n<ghc.length;n++)
          if(ghc[n][0]===g.title)
          {ghc[n][1]=i;ng=1;}
          if(ng===0)
          ghc.push([g.title,i]);
          inr.current=ghc;
          }
          setatcdets(h1);
          tbg=0;
          break;
        }
        // else
        //   {atcpresseddets(1, titl, desc, img, veg, selsize, selcrust, fp, 1, customs, e1);
        //     break;}
      }
      if(tbg===1)
      atcpresseddets(1, titl, desc, img, veg, selsize, selcrust, fp, 1, customs, e1);
      proitemsquanupdate(titl, quantity, e1);
    }
    else if (e === 2) {
      var h2 = Object.assign([], atcdets);

      for (let i = 0; i < atcdets.length; i++) {
        if (atcdets[i].title === g.title && multidcompare(atcdets[i].customisations,g.customisations) && atcdets[i].selectedsize===g.selectedsize && atcdets[i].selectedcrust===g.selectedcrust ) {
          h2.splice(i, 1);
          var gfd1=Object.assign([],inr.current);
          for(let bv=0;bv<gfd1.length;bv++)
          if(gfd1[bv][1]!==-1 && gfd1[bv][1]>i)
          gfd1[bv][1]=gfd1[bv][1]-1;
          else if(gfd1[bv][1]!==-1 && gfd1[bv][1]===i)
          gfd1[bv][1]=-2;
          inr.current=gfd1;
          setatcdets(h2);
          break;
        }
      }
      proitemsquanupdate(titl, 0, e1);
    }

  }
  function proitemsquanupdate(titl, quan1, e1) {
    var kmn;
    var cv = 0;
    var nx;
    var tx;
    for (let i = 0; i < allcategory.length; i++) {
      for (let j = 0; j < allcategory[i].cat_products.length; j++) {
        if (allcategory[i].cat_products[j].title === titl) {
          kmn = Object.assign([], pitemsq);
          kmn[i][j] = quan1;
          nx = i;
          tx = j;
          cv = 1;
          break;
        }
      }
      if (cv === 1) {
        break;
      }
    }
    // console.log(atcdets);
    var b = 0;
    for (let k = 0; k < atcdets.length; k++) {
      if (atcdets[k].title === titl)
        b = b + (atcdets[k].quantity);
    }
    if (e1 === 1)
      b = b - 1;
    else if (e1 === 2)
      b = b + 1;
    kmn[nx][tx] = b;
    setpitemsq(kmn);

  }

  // useEffect(()=>{
  //   var unb;
  //   setatcdets(state=>{
  //     unb=state;
  //     return state;
  //   })
  // })
  const [uname,setuname]=useState(0);
  const [pno,setpno]=useState(0);
  const [email,setemail]=useState(0);
  const [useraddress,setuseraddress]=useState([]);
  function disperrorbox(e) {
    setdispebox(e);
  }
  useEffect(()=>{
    var ter=0;  
    if(atcdets !== 0 && atcdets[0] !== 0 && atcdets.length !== 0)
    {for(let i=0;i<atcdets.length;i++)
    ter=ter+(atcdets[i].finalprice*atcdets[i].quantity);
    sethbd(ter);
  }
},[atcdets])
  const [addressi,setaddressi]=useState('addtab');
  function loginpage(){
    if(logani==="mlgclose" || logani==="mlg")
    setlogani("mlgopen")
    else
    setlogani("mlgclose")

  }
  function addresspage(){
    setpec('profilein');
    if(addressi==="addtab" || addressi==="addtabclose")
    setaddressi('addtabopen')
    else
    setaddressi('addtabclose')
  }
  const [authtoken,setauthtoken]=useState({authtoken:0});
  function logtoken(e){
    setauthtoken(e);
  }
  useEffect(()=>{
    async function fetchdata(){
      const resd=await fetch("/silog/getuserdets",{
      method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token':(authtoken.authtoken)
            }
    })
    .then(res=>res.json())
    .then(response=>{
      setpno(response.phoneNumber);
        if(isNaN(Number(response.username))) 
        setuname(response.username);
        else
        setuname(0);

        if(isNaN(Number(response.email)))
        setemail(response.email);
        else
        setemail(0);
      
      setuseraddress(response.address);
    })
  }
  if(authtoken.authtoken!==0 && !JSON.stringify(authtoken).includes("errors"))
  fetchdata();
  },[authtoken])
  const [pec,setpec]=useState('profilein')
  function profilemenu(){
    if(pec==="profilein")
    setpec("profileout");
    else
    setpec("profilein");
  }
  function logout(){
    setuname(0);
  setpno(0);
  setemail(0);
  setauthtoken({authtoken:0});
  setuseraddress([]);
  setpec('profilein');
  setnavadd('');
  }
  function usnedit(e,f){
      if(e!==0)
      setuname(f);
  }
  function eedit(e,f){
    if(e!==0)
    setemail(f);
}
const [navadd,setnavadd]=useState('')
function addoi(e){
    setnavadd(e);
}
function aadfre(e){
  setuseraddress(e);
}
const initPayment = (data) => {
  const options = {
    key: "rzp_test_tzvUmN4Ix6AiBr",
    amount: data.amount,
    currency: data.currency,
    name: "Pizza Payment",
    description: "Test Transaction",
    // image: book.img,
    order_id: data.id,
    handler: async (response) => {
      try {
        const verifyUrl = "/payment/verify";
        const { data } = await fetch(verifyUrl, {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(response)
        });
      } catch (error) {
        console.log(error);
      }
    },
    theme: {
      color: "#3399cc",
    },
  };
  const rzp1 = new Razorpay(options);
  rzp1.open();
};

const handlePayment = async () => {
  try {
    const orderUrl = "/payment";
    const { data } = await fetch(orderUrl, { 
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({amount: hbd })
    })
    .then(res=>res.json())
    .then(data=>{
      initPayment(data.data);});
    // console.log(data);
    // initPayment(data.data);
  } catch (error) {
    console.log(error);
  }
  setatcdets([0]);
  var thj = [];
  var hjf = [];
  for (let i = 0; i < allcategory.length; i++) {
    for (let j = 0; j < allcategory[i].cat_products.length; j++) {
      hjf.push(0);
    }
    thj.push(hjf);
    hjf = [];
  }
  setpitemsq(thj);

};
  return (
    <>
      <NavBar scroll_dets={cat_sc} loginpage={loginpage} username={uname} phoneno={pno} addresspage={profilemenu} useraddress={navadd} authtoken={authtoken.authtoken} addresspage1={addresspage}/>
      <div className="products_atcpart">
        <div>
          {
            allcategory.map((category, index) => (
              <div className="mn">
                <ProductMenu category_title={category.cat_title} category_products={category.cat_products} custfn={custmenu} atcpresseddets={atcpresseddets} pitemsq={pitemsq[index]} atcdets={atcdets} disperrorbox={disperrorbox} inr={inr.current}/>
              </div>
            ))

          }
        </div>
        <div>
          <AddToCart atcdets={atcdets} atcpresseddets={atcpresseddets} proitemsquanupdate={proitemsquanupdate} />
          {(atcdets !== 0 && atcdets[0] !== 0 && atcdets.length !== 0) && (<div className='subtotal'>
            <div className='tx2'>
              <p className='tx'>Subtotal</p>
              <p className='st'>₹ {hbd}</p>
            </div>
            <button type='button' className='chk' onClick={(authtoken.authtoken===0)?(()=>{setlogani("mlgopen")}):(handlePayment)}>CHECKOUT</button>
          </div>)}
        </div>
      </div>
      {(custdets !== null) ? (<CustomiseMenu custmen={close} fp={price} custdets={custdets} selsize3={selesize} selcrust3={selecrust} cfc={checkforclose} atcpresseddets={atcpresseddets} quantity={ghy} atcdets={atcdets} customs3={g5}/>) : (<div></div>)}
      {(dispebox === true) && (<div className='ebox'>
        <div className='et'><p className='etitle'>Remove item from cart</p></div>
        <p className='econt'>Multiple customisations of this item are added to cart.Please remove item from cart</p>
        <button className='ebutt2' type='button' onClick={() => disperrorbox(false)}>OK, GOT IT</button>
      </div>)}
      {(JSON.stringify(authtoken).includes("errors")) && (<div className='ebox'>
        <div className='et'><p className='etitle'>Authentication error</p></div>
        <p className='econt'>{authtoken.errors}</p>
        <button className='ebutt2' type='button' onClick={() => {setauthtoken({authtoken:0})}}>OK, GOT IT</button>
      </div>)}
      <LoginPage status={logani} loginpage={loginpage} logtoken={logtoken}/>
      <Address status={addressi} addlist={useraddress} authtoken={authtoken.authtoken} addresspage={addresspage} addoi={addoi} aadfre={aadfre}/>
      {(pec==="profileout")&&(<ProfileEditMenu status={pec} username={uname} phoneno={pno} email={email} addresspage={addresspage} logout={logout} authtoken={authtoken.authtoken} usnedit={usnedit} eedit={eedit}/>)}
      {/* {(paypage===1)&&(<StripeCheckout
          stripeKey={"pk_test_51KZzoCSEuAvNO1NOOyeY7UwZLZikF0lHpncJKhQzBAnFsO9apbjFQyRqtPGPGH9m9059Re1NGxhP6IgS9hgEgwHZ00DtIQEDaF" || ""}
          token={handleToken}
          name=""
          panelLabel={`PAY`}
          currency="INR"
          amount={hbd*100}
      >
         
      </StripeCheckout>)} */}
    </>
  )
}
export default App;
