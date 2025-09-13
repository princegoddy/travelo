import imgInd from "./images/banner/banner.png"
import imgAus from "./images/banner/banner2.png"
import imgSwit from "./images/banner/banner3.png"

//Destination
import italy from "./images/destination/1.png"
import brazil from "./images/destination/2.png"
import america from "./images/destination/3.png"
import nepal from "./images/destination/4.png"
import maldives from "./images/destination/5.png"
import indonesia from "./images/destination/6.png"

//Places
import california from "./images/places/1.png"
import korolaMegna from "./images/places/2.png"
import london from "./images/places/3.png"
import miamibeach from "./images/places/4.png"
import california02 from "./images/places/5.png"
import Saintmartine from "./images/places/6.png"

//svg
import svg1 from "./images/svg/1.png"
import svg2 from "./images/svg/2.png"
import svg3 from "./images/svg/3.png"

//Trips
import trip1 from "./images/trips/1.png"
import trip2 from "./images/trips/2.png"
import trip3 from "./images/trips/3.png"

//Slick
import aut from "./images/author.png.webp"

export const pageLinks = [
    { id: 1, href: '#Home', text: 'Home' },
    { id: 2, href: '#About', text: 'About' },
    { id: 4, href: '#Destination', text: 'Destination' },
    { id: 4, href: '#Pages', text: 'Pages' },
    { id: 4, href: '#Blog', text: 'Blog' },
    { id: 4, href: '#Contact', text: 'Contact' },
  ];
  
  export const socialLinks = [
    { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-google' },
    { id: 3, href: 'https://www.instagram.com', icon: 'fab fa-instagram' },
    { id: 3, href: '#', icon: 'fab fa-linkedin' },
  ];

export const bannerData = [
  {
    id: 1,
    image: imgSwit,
    title: "Indonesia",
    subtitle: "Pixel perfect design with awesome contents",
    buttonText: "Explore Now",
  },

  {
    id: 2,
    image: imgAus,
    title: "Australia",
    subtitle: "Pixel perfect design with awesome contents",
    buttonText: "Explore Now",
  },

  { id: 3,
    image: imgInd,
    title: "Switzerland",
    subtitle: "Pixel perfect design with awesome contents",
    buttonText: "Explore Now",
  },
 
]

 export const destinations = [
  { name: 'Italy', places: '07 Places', image: italy },
  { name: 'Brazil', places: '03 Places', image: brazil },
  { name: 'America', places: '10 Places', image: america },
  { name: 'Nepal', places: '02 Places', image: nepal },
  { name: 'Maldives', places: '02 Places', image: maldives },
  { name: 'Indonesia', places: '05 Places', image: indonesia },
];


 export const data = [
  {
    id: 1,
    location: "California",
    country: "United States of America",
    price: "$500",
    reviews: 20,
    duration: "5 Days",
    image: california, // Replace with actual image paths
  },
  {
    id: 2,
    location: "Korola Megna",
    country: "United States of America",
    price: "$500",
    reviews: 20,
    duration: "5 Days",
    image: korolaMegna,
  },
  {
    id: 3,
    location: "London",
    country: "United States of America",
    price: "$500",
    reviews: 20,
    duration: "5 Days",
    image: london,
  },
  {
    id: 4,
    location: "Miami Beach",
    country: "United States of America",
    price: "$500",
    reviews: 20,
    duration: "5 Days",
    image: miamibeach,
  },
  {
    id: 5,
    location: "California",
    country: "United States of America",
    price: "$500",
    reviews: 20,
    duration: "5 Days",
    image: california02,
  },
  {
    id: 3,
    location: "Saintmartine Iceland",
    country: "United States of America",
    price: "$500",
    reviews: 20,
    duration: "5 Days",
    image: Saintmartine,
  },
];

 export const Item = [
   {
    id: 1,
    title: "Comfortable Journey",
    description: "A wonderful serenity has taken to the possession of my entire soul.",
    icon: svg1,
  },
  {
    id: 2,
    title: "Luxuries Hotel",
    description: "A wonderful serenity has taken to the possession of my entire soul.",
    icon: svg2,
},
  {
    id: 3,
    title: "Travel Guide",
    description: "A wonderful serenity has taken to the possession of my entire soul.",
    icon: svg3,
  },
]

export const trips = [
  {
    id: 1,
    date: "Oct 12, 2019",
    description: "Journeys Are Best Measured In New Friends",
    imageUrl: trip1, // Replace with your image URL
  },
  {
    id: 2,
    date: "Oct 12, 2019",
    description: "Journeys Are Best Measured In New Friends",
    imageUrl: trip2, // Replace with your image URL
  },
  {
    id: 3,
    date: "Oct 12, 2019",
    description: "Journeys Are Best Measured In New Friends",
    imageUrl: trip3, // Replace with your image URL
  },
];

export const quote = [
  {
    id: 1,
    image: aut,
    name: 'Micky Mouse',
    quote: 'Working in conjuntion with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.',
  },

 {
    id: 2,
    image: aut,
    name: 'Tom Mouse',
    quote: 'Working in conjuntion with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.',
  },

{
    id: 3,
    image: aut,
    name: 'Jerry Mouse',
    quote: 'Working in conjuntion with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.',
  },
]