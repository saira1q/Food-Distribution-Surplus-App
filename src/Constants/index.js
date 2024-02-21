import bringal from "../assets/products/bringal.jpeg"
import broccoli from "../assets/products/broccoli.jpeg"
import carrot from "../assets/products/carrot.jpeg"
import ginger from "../assets/products/ginger.jpg"
import potato from "../assets/products/potato.jpeg"
import tomato from "../assets/products/tomato.jpg"
import grapes from "../assets/products/grapes.jpeg"
import guawa from "../assets/products/guava.jpeg"
import mango from "../assets/products/mango.jpeg"
import orange from "../assets/products/orange.jpeg"
import banana from "../assets/products/banana.jpeg"
import apple from "../assets/products/apple.jpeg"
import Res from '../assets/images/Res.jpg'
import Res1 from '../assets/images/hm.jpg'
import Res2 from '../assets/images/ok.jpg'
import Res3 from '../assets/images/ar.jpg'
import Res4 from '../assets/images/new1.jpg'
import Res5 from '../assets/images/new2.jpg'
import Res6 from '../assets/images/new3.jpg'
import Res7 from '../assets/images/new4.jpg'
import Res8 from '../assets/images/new5.jpg'
import Res9 from '../assets/images/new6.jpg'
export const text  = [
    {heading:"Revolutionizing Food Distribution for Zero Hunger",text:" Surplus Savior is a groundbreaking app dedicated to eradicating food waste and hunger through efficient food surplus distribution. At its core, it involves the systematic management and redirection of excess food resources from various points in the supply chain to those facing food insecurity. This innovative solution minimizes waste by connecting surplus suppliers with organizations, charities, and communities in need. By leveraging technology, Surplus Savior ensures timely and equitable distribution, fostering a more sustainable and compassionate approach to food systems."},
   
]


// export const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/Weather", label: "5G Logistics" },
//     { href: "/Products", label: "Products" },
//     { href: "/Arilog", label: "Arilog" },
//     { href: "/Team", label: "Team" },
//     { href: "/Map", label: "Transportation" },

// ];

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Weather", label: "Smart Farming" },
    { href: "/Products", label: "Shop" },
    { 
      label: "Services",
      subLinks: [
        { href: "/Services/Service1", label: "Service 1" },
        { href: "/Services/Service2", label: "Service 2" },
        { href: "/Services/Service3", label: "Service 3" }
      ]
    },
    { href: "/Arilog", label: "5G Agrilog" },
    { href: "/Team", label: "Team" },
    { href: "/Map", label: "Transportation" },
  ];

export const products = [
    {
        imgURL: bringal,
        name: "Bringal",
        price: "$200.20",
    },
    {
        imgURL: broccoli,
        name: "Broccoli",
        price: "$210.20",
    },
    {
        imgURL: carrot,
        name: "Carrot",
        price: "$220.20",
    },
    {
        imgURL: ginger,
        name: "Ginger",
        price: "$230.20",
    },
    {
        imgURL: potato,
        name: "Potato",
        price: "$200.20",
    },
    {
        imgURL: tomato,
        name: "Tomato",
        price: "$210.20",
    },
    {
        imgURL: apple,
        name: "Apple",
        price: "$220.20",
    },
    {
        imgURL: banana,
        name: "Banana",
        price: "$230.20",
    }, {
        imgURL: grapes,
        name: "Grapes",
        price: "$200.20",
    },
    {
        imgURL: orange,
        name: "Orange",
        price: "$210.20",
    },
    {
        imgURL: guawa,
        name: "Guava",
        price: "$220.20",
    },
    {
        imgURL: mango,
        name: "Mango",
        price: "$230.20",
    },
];

export const resData=[
    {
      name: "New Bukhara Restaurant",
      location: {
        latitude: 33.6967306,
        longitude: 73.0492768
      },
      foodGenerated: 10,
      foodWasted: 172,
      img:Res
    },
    {
      name: "Abbasi Restaurant",
      location: {
        latitude: 33.6972047,
        longitude: 73.0497192
      },
      foodGenerated: 626,
      foodWasted: 11,
      img:Res1
    },
    {
      name: "Lavish Dine",
      location: {
        latitude: 33.6989125,
        longitude: 73.0481392
      },
      foodGenerated: 445,
      foodWasted: 132,
      img:Res2
    },
    {
      name: "Kabuli Restaurant",
      location: {
        latitude: 33.6988713,
        longitude: 73.0480365
      },
      foodGenerated: 491,
      foodWasted: 29,
      img:Res3
    },
    {
      name: "Shah G Foods",
      location: {
        latitude: 33.6993365,
        longitude: 73.0495761
      },
      foodGenerated: 439,
      foodWasted: 160,
      img:Res4
    },
    {
      name: "Raja Resturant",
      location: {
        latitude: 33.6896327,
        longitude: 73.0541399
      },
      foodGenerated: 21,
      foodWasted: 134,
      img:Res5
    },
    {
      name: "Ali Restaurant",
      location: {
        latitude: 33.692562,
        longitude: 73.0576695
      },
      foodGenerated: 26,
      foodWasted: 48,
      img:Res6
    },
    {
      name: "Kandahar restaurant",
      location: {
        latitude: 33.6674075,
        longitude: 73.073303
      },
      foodGenerated: 940,
      foodWasted: 10,
      img:Res7
    },
    {
      name: "Haleem Ghar",
      location: {
        latitude: 33.7101662,
        longitude: 73.0575666
      },
      foodGenerated: 528,
      foodWasted: 39,
      img:Res8
    },
    {
      name: "al ghazal restaurant",
      location: {
        latitude: 33.6468411,
        longitude: 73.0371591
      },
      foodGenerated: 440,
      foodWasted: 150,
      img:Res9
    }
  ]
  