const PRODUCTS = [
  {
    id: 1,
    name: 'Tour tham quan Đà Nẵng',
    price: 750,
    location: 'Đà Nẵng',
    image: require('../../assets/images/DaNang.jpg'),
    

  },
  {
    id: 2,
    name: 'Tour tham quan Hà Giang',
    price: 1000,
    location: 'Hà Giang',
    image: require('../../assets/images/HaGiang.jpg'),
   

  },
  {
    id: 3,
    name: 'Tour tham quan Mộc Châu',
    price: 2000,
    location: 'Mộc Châu',
    image: require('../../assets/images/MocChau.jpg'),
    

  },
  {
    id: 4,
    name: 'Tour tham quan Phú Quốc',
    price: 1500,
    location: 'Phú Quốc',
    image: require('../../assets/images/PhuQuoc.jpg'),
   

  },
  {
    id: 5,
    name: 'Tour tham quan Sa Pa',
    price: 250,
    location: 'SaPa',
    image: require('../../assets/images/SaPa.jpg'),
   
  }
];

// import React, {useState,useEffect} from 'react';
// import {getDocs, collection} from 'firebase/firestore'
// import { database } from '../../firebase-config';
// const [tour,setTour]=useState([])

// async function getAllData() {
//   const query = await getDocs(collection(database, "user"));
//   let vouchers = [];
//   query.forEach(doc=>{
//       vouchers.push(doc.data());
//   })
//   setTour(vouchers)
//   console.log(tour);
// }

// useEffect(() => {
//   getAllData();
// }, [])
// const PRODUCTS=tour([])
export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => (product.id == id));
}
