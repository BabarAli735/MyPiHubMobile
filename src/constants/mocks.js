import dayjs from "dayjs";
import { ASSETS } from "./theme";

// users
export const USERS = [
  {
    id: 1,
    email: "dev@gmail.com",
    password: "1234Asdf",
    role: "patient",
    name: "Mr. Affan",
    department: "Patient",
    social: { twitter: "CreativeTim", dribbble: "creativetim" },
    about:
      "Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",
    avatar:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fit=crop&w=80&q=80",
  },
  {
    id: 2,
    name: "Bella Audrey",
    email: "bell@gmail.com",
    password: "1234Asdf",
    role: "doctor",
    department: "Marketing Manager",
    stats: { posts: 323, followers: 53200, following: 749000 },
    social: { twitter: "CreativeTim", dribbble: "creativetim" },
    about:
      "Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=80&q=80",
  },
  {
    id: 3,
    name: "Miriam Lendra",
    email: "miriam@gmail.com",
    password: "1234Asdf",
    role: "clinic",
    department: "Desktop Publisher",
    stats: { posts: 323, followers: 53200, following: 749000 },
    social: { twitter: "CreativeTim", dribbble: "creativetim" },
    about:
      "Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=80&q=80",
  },
  {
    id: 4,
    name: "David Bishop",
    email: "devid@gmail.com",
    password: "1234Asdf",
    role: "family",
    department: "Marketing Manager",
    stats: { posts: 323, followers: 53200, following: 749000 },
    social: { twitter: "CreativeTim", dribbble: "creativetim" },
    about:
      "Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",
    avatar:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80",
  },
  {
    id: 5,
    name: "Mathew Glock",
    email: "mathew@gmail.com",
    password: "1234Asdf",
    role: "patient",
    department: "HR Manager",
    stats: { posts: 323, followers: 53200, following: 749000 },
    social: { twitter: "CreativeTim", dribbble: "creativetim" },
    about:
      "Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",
    avatar:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80",
  },
  {
    id: 6,
    name: "Emma Roberts",
    email: "emma@gmail.com",
    password: "1234Asdf",
    role: "doctor",
    department: "HR Manager",
    stats: { posts: 323, followers: 53200, following: 749000 },
    social: { twitter: "CreativeTim", dribbble: "creativetim" },
    about:
      "Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",
    avatar:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80",
  },
];

// following cards
export const FOLLOWING = [
  {
    id: 1,
    type: "vertical",
    title: "Unique activities with local experts.",
    image:
      "https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80",
  },
  {
    id: 2,
    type: "vertical",
    title: "The highest status people.",
    image:
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80",
  },
  {
    id: 3,
    type: "horizontal",
    title: "Experiences and things to do wherever you are.",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fit=crop&w=450&q=80",
  },
  {
    id: 4,
    type: "vertical",
    title: "Get more followers and grow.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fit=crop&w=450&q=80",
  },
  {
    id: 5,
    type: "vertical",
    title: "New ways to meet your business goals.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80",
  },
  {
    id: 6,
    type: "horizontal",
    title: "Adventures - Multi day trips with meals and stays.",
    image:
      "https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?fit=crop&w=450&q=80",
  },
];

// trending cards
export const TRENDING = [
  {
    id: 1,
    type: "horizontal",
    title: "Experiences and things to do wherever you are.",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fit=crop&w=450&q=80",
  },
  {
    id: 2,
    type: "vertical",
    title: "The highest status people.",
    image:
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80",
  },
  {
    id: 3,
    type: "vertical",
    title: "Unique activities with local experts.",
    image:
      "https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80",
  },
  {
    id: 4,
    type: "vertical",
    title: "Adventures - Multi day trips with meals and stays.",
    image:
      "https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?fit=crop&w=450&q=80",
  },
  {
    id: 5,
    type: "vertical",
    title: "New ways to meet your business goals.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80",
  },
];

// categories
export const CATEGORIES = [
  { id: 1, name: "Popular" },
  { id: 2, name: "Newest" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Best deal" },
];

// reasons
export const REASONS = [
  { id: 1, title: "Head ache" },
  { id: 2, title: "cold" },
  { id: 3, title: "favor" },
];

// PRIORITIES
export const PRIORITIES = [
  { id: 1, title: "high" },
  { id: 2, title: "medium" },
  { id: 3, title: "low" },
];

// PRIORITIES
export const PAYMENTS = [
  { id: 1, title: "card" },
  { id: 2, title: "paypal" },
];

// article options
export const ARTICLE_OPTIONS = [
  {
    id: 1,
    title: "Single room in center",
    description:
      "As Uber works through a huge amount of internal management turmoil, the company is also consolidating.",
    type: "room",
    guests: 1,
    sleeping: { total: 1, type: "sofa" },
    price: 89,
    user: USERS[0],
    image:
      "https://images.unsplash.com/photo-1543489822-c49534f3271f?fit=crop&w=450&q=80",
  },
  {
    id: 2,
    title: "Cosy apartment",
    description:
      "Different people have different taste, and various types of music have many ways of leaving an impact on someone.",
    type: "apartment",
    guests: 3,
    sleeping: { total: 2, type: "bed" },
    price: 200,
    user: USERS[0],
    image:
      "https://images.unsplash.com/photo-1603034203013-d532350372c6?fit=crop&w=450&q=80",
  },
  {
    id: 3,
    title: "Single room in center",
    description:
      "As Uber works through a huge amount of internal management turmoil, the company is also consolidating.",
    type: "room",
    guests: 1,
    sleeping: { total: 1, type: "sofa" },
    price: 89,
    user: USERS[0],
    image:
      "https://images.unsplash.com/photo-1543489822-c49534f3271f?fit=crop&w=450&q=80",
  },
];

// offers
export const OFFERS = [
  {
    id: 1,
    type: "vertical",
    title: "Unique activities with local experts.",
    image:
      "https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80",
  },
  {
    id: 2,
    type: "vertical",
    title: "The highest status people.",
    image:
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80",
  },
  {
    id: 3,
    type: "vertical",
    title: "Get more followers and grow.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fit=crop&w=450&q=80",
  },
  {
    id: 4,
    type: "vertical",
    title: "New ways to meet your business goals.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80",
  },
];

// rental locations
export const LOCATIONS = [
  { id: 1, city: "Paris", country: "France" },
  { id: 2, city: "Rome", country: "Italy" },
  { id: 3, city: "London", country: "United Kingdom" },
];

// articles
export const ARTICLES = [
  {
    id: 1,
    title: "Flexible office space means growth.",
    description:
      "Rather than worrying about switching offices every couple years, you can instead stay in the same location.",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80",
    user: USERS[0],
    timestamp: dayjs().unix(),
  },
  {
    id: 2,
    title: "Global payments in a single integration.",
    description:
      "Rather than worrying about switching offices every couple years, you can instead stay.",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80",
    user: USERS[1],
    timestamp: dayjs().unix(),
  },
  {
    id: 3,
    title: "Working with the latest technologies.",
    description:
      "Rather than worrying about switching offices every couple years, you can instead stay in the same location.",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fit=crop&w=450&q=80",
    user: USERS[2],
    timestamp: dayjs().unix(),
  },
  {
    id: 4,
    title: "Office space means growth.",
    description:
      "Rather than worrying about switching offices every couple years, you can instead stay in the same location.",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80",
    user: USERS[3],
    timestamp: dayjs().unix(),
  },
  {
    id: 5,
    title: "Office space means growth.",
    description:
      "The mission of LinkedIn is simple: connect the world's professionals.",
    category: CATEGORIES[1],
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?fit=crop&w=450&q=80",
    user: USERS[4],
    timestamp: dayjs().unix(),
  },
  {
    id: 6,
    title: "Office space means growth.",
    description:
      "Rather than worrying about switching offices every couple years, you can instead stay in the same location.",
    category: CATEGORIES[1],
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80",
    user: USERS[5],
    timestamp: dayjs().unix(),
  },
  {
    id: 7,
    title: "Office space means growth.",
    description:
      "Rather than worrying about switching offices every couple years, you can instead stay in the same location.",
    category: CATEGORIES[1],
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80",
    user: USERS[6],
    timestamp: dayjs().unix(),
  },
  {
    id: 8,
    title: "Office space means growth.",
    description:
      "Rather than worrying about switching offices every couple years, you can instead stay in the same location.",
    category: CATEGORIES[2],
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80",
    user: USERS[1],
    timestamp: dayjs().unix(),
  },
  {
    id: 9,
    title: "Office space means growth.",
    description:
      "Rather than worrying about switching offices every couple years, you can instead stay in the same location.",
    category: CATEGORIES[2],
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80",
    user: USERS[5],
    timestamp: dayjs().unix(),
  },
  {
    id: 10,
    title: "Office space means growth.",
    description:
      "Rather than worrying about switching offices every couple years, you can instead stay in the same location.",
    category: CATEGORIES[2],
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80",
    user: USERS[6],
    timestamp: dayjs().unix(),
  },
  {
    id: 11,
    description:
      "A great to stay in Paris without feeling you are in the city!",
    category: CATEGORIES[3], // best deal
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80",
    location: LOCATIONS[0],
    rating: 4.9,
    timestamp: dayjs().unix(),
  },
  {
    id: 12,
    description: "Best Italy location in a bustling neighbourhood, 2 min.",
    category: CATEGORIES[3], // best deal
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80",
    location: LOCATIONS[1],
    rating: 4.5,
    timestamp: dayjs().unix(),
  },
  {
    id: 13,
    description:
      "The most beautiful and complex UI Kits built by Creative Tim.",
    category: CATEGORIES[3], // best deal
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80",
    location: LOCATIONS[2],
    rating: 4.8,
    timestamp: dayjs().unix(),
  },
];

// rental recommendations
export const RECOMMENDATIONS = [
  {
    id: 1,
    description:
      "A great to stay in Paris without feeling you are in the city!",
    category: CATEGORIES[3], // best deal
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80",
    location: LOCATIONS[0],
    rating: 4.9,
    offers: OFFERS,
    timestamp: dayjs().unix(),
  },
  {
    id: 2,
    description: "Best Italy location in a bustling neighbourhood, 2 min.",
    category: CATEGORIES[3], // best deal
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80",
    location: LOCATIONS[1],
    rating: 4.5,
    offers: OFFERS,
    timestamp: dayjs().unix(),
  },
  {
    id: 3,
    description:
      "The most beautiful and complex UI Kits built by Creative Tim.",
    category: CATEGORIES[3], // best deal
    options: ARTICLE_OPTIONS,
    image:
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80",
    location: LOCATIONS[2],
    rating: 4.8,
    offers: OFFERS,
    timestamp: dayjs().unix(),
  },
];

// chat messages
export const MESSSAGES = [
  {
    _id: 1,
    text: "Bye, bye 👋🏻",
    createdAt: dayjs().subtract(1, "m").toDate(),
    user: {
      _id: USERS[0].id,
      name: USERS[0].name,
      avatar: USERS[0].avatar,
    },
  },
  {
    _id: 2,
    text: "Ok. Cool! See you 😁",
    createdAt: dayjs().subtract(2, "m").toDate(),
    user: {
      _id: USERS[1].id,
      name: USERS[1].name,
      avatar: USERS[1].avatar,
    },
  },
  {
    _id: 3,
    text: "Sure, just let me finish somerhing and I’ll call you.",
    createdAt: dayjs().subtract(3, "m").toDate(),
    user: {
      _id: USERS[0].id,
      name: USERS[0].name,
      avatar: USERS[0].avatar,
    },
  },
  {
    _id: 4,
    text:
      "Hey there! How are you today? Can we meet and talk about location? Thanks!",
    createdAt: dayjs().subtract(4, "m").toDate(),
    user: {
      _id: USERS[1].id,
      name: USERS[1].name,
      avatar: USERS[1].avatar,
    },
  },
];

// extras cards
export const EXTRAS = [
  {
    id: 1,
    name: "BMW X5",
    time: dayjs().format("hh:00"),
    image: require("../assets/images/x5.png"),
    saved: false,
    booked: false,
    available: true,
  },
  {
    id: 2,
    name: "Tesla",
    time: dayjs().format("hh:00"),
    image: require("../assets/images/tesla.png"),
    saved: false,
    booked: false,
    available: true,
  },
  {
    id: 3,
    name: "Mercedes GLE",
    time: dayjs().format("hh:00"),
    image: require("../assets/images/gle.png"),
    saved: false,
    booked: false,
    available: false,
  },
];

// shopping basket recommentations
export const BASKET_RECOMMENDATIONS = [
  {
    id: 4,
    title: "Polo T-Shirt",
    description: "Impeccably tailored in Italy.",
    image:
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?fit=crop&w=450&q=80",
    stock: true,
    qty: 1,
    size: "M",
    price: 200,
  },
  {
    id: 5,
    title: "Orange Jacket",
    description: "Mustard About Me - South Africa",
    image:
      "https://images.unsplash.com/photo-1599407950360-8b8642d423dc?fit=crop&w=450&q=80",
    stock: true,
    qty: 1,
    size: "M",
    price: 489,
  },
];

// shopping basket
export const BASKET = {
  subtotal: 750,
  recommendations: BASKET_RECOMMENDATIONS,
  items: [
    {
      id: 1,
      title: "Consultation fee 68% off",
      description:
        "You can have appointmet with Dr. Ibrahim at USIM at 68% off",
      image:
        "https://images.unsplash.com/photo-1562751361-ac86e0a245d1?fit=crop&w=450&q=80",
      stock: true,
      qty: 1,
      size: "M",
      price: 10,
      qtys: [1, 2, 3, 4, 5],
      sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    },
    {
      id: 2,
      title: "Dark T-Shirt",
      description: "Dark-grey slub wool, pintucked notch lapels.",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?fit=crop&w=450&q=80",
      stock: true,
      qty: 1,
      size: "l",
      price: 150,
      qtys: [1, 2, 3, 4, 5],
      sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    },
    {
      id: 3,
      title: "Leather Handbag",
      description: "Immaculate tailoring is TOM FORD's forte",
      image:
        "https://images.unsplash.com/photo-1608060434411-0c3fa9049e7b?fit=crop&w=450&q=80",
      stock: true,
      qty: 1,
      size: "m",
      price: 350,
      qtys: [1, 2, 3],
      sizes: ["s", "m", "l"],
    },
  ],
};

// notifications
export const NOTIFICATIONS = [
  {
    id: 1,
    subject: "Dr. Mike",
    message: "Your appointment has been approved.",
    type: "document",
    business: true,
    read: false,
    createdAt: dayjs().subtract(2, "h").toDate(),
  },
  {
    id: 2,
    subject: "Dear Affan",
    message:
      "I am sorry to tell you that your 6:30pm appointment was canceled.",
    type: "extras",
    business: true,
    read: false,
    createdAt: dayjs().subtract(4, "h").toDate(),
  },
  {
    id: 3,
    subject: "Reffered you to Room #2 of USIM",
    message: "You should go to room #2 of USIM.",
    type: "notification",
    business: true,
    read: true,
    createdAt: dayjs().subtract(6, "h").toDate(),
  },
  {
    id: 4,
    subject: "Last Message",
    message: "Your posts have been liked by 2,342.",
    type: "document",
    business: true,
    read: true,
    createdAt: dayjs().subtract(2, "d").toDate(),
  },
  {
    id: 5,
    subject: "Appointment Approved",
    message: "Dr Ibrahim accpeted your appointment.",
    type: "profile",
    business: true,
    read: true,
    createdAt: dayjs().subtract(3, "d").toDate(),
  },
  {
    id: 6,
    subject: "Your Health Record was updated",
    message: "Check your health record.",
    type: "documentation",
    business: true,
    read: true,
    createdAt: dayjs().subtract(2, "w").toDate(),
  },
  {
    id: 7,
    subject: "Let's have a video visit",
    message:
      "Dr Mike wants to change appointment type from office to virtual visit",
    type: "document",
    business: true,
    read: true,
    createdAt: dayjs().subtract(3, "w").toDate(),
  },
  {
    id: 8,
    subject: "You got promo from USIM 5% off",
    message: "Now you can have copun code of 5% in Klinik Pakar Kesihatan USIM",
    type: "document",
    business: false,
    read: false,
    createdAt: dayjs().subtract(2, "h").toDate(),
  },
  {
    id: 9,
    subject: "Smart Marketplace Offer 60% off",
    message: "Grab food offers 60% off for you!",
    type: "payment",
    business: false,
    read: false,
    createdAt: dayjs().subtract(9, "h").toDate(),
  },
  {
    id: 10,
    subject: "Please complete your profile info",
    message:
      "Please complete your profile in order to have good experience from MyPiHUB APP",
    type: "office",
    business: false,
    read: false,
    createdAt: dayjs().subtract(12, "h").toDate(),
  },
];

export const Inpatient_Locations = [
  {
    id: "1",
    title: "Klinik Pakar Kesihatan USIM",
    info:
      "We offer world-class outpatient medical care delivered by a team focused on your health and wellbeing.",
    image: ASSETS.carousel1,
  },
  {
    id: "2",
    title: "Nilai Dialysis Centre",
    info:
      "We deliver the highest quality care in an environment designed with comfort, privacy, and safety in mind.",
    image: ASSETS.clinic3,
  },

  {
    id: "3",
    title: "Aurelius Hospital Nilai",
    info:
      "We are experts in the diagnosis and treatment of conditions and injuries that have an impact on the way your body moves.",
    image: ASSETS.clinic2,
  },
  {
    id: "4",
    title: "Hassenfeld Children’s Hospital",
    info:
      "We partner with children and families to provide the most advanced care for children in the New York City area.",
    image: ASSETS.carousel1,
  },
  {
    id: "5",
    title: "MyPiHUB Klinik Pakar Kesihatan USIM—Brooklyn",
    info:
      "We are the hospital of choice for adults and children seeking expert inpatient and outpatient care in Brooklyn.",
    image: ASSETS.carousel1,
  },
  {
    id: "6",
    title: "MyPiHUB Klinik Pakar Kesihatan USIM—Long Island",
    info:
      "We provide the highest level of inpatient and outpatient care throughout our network of Long Island healthcare facilities.",
    image: ASSETS.carousel1,
  },
];

export default {
  USERS,
  FOLLOWING,
  TRENDING,
  CATEGORIES,
  ARTICLES,
  RECOMMENDATIONS,
  MESSSAGES,
  EXTRAS,
  NOTIFICATIONS,
  REASONS,
  PAYMENTS,
  PRIORITIES,
  Inpatient_Locations,
};
