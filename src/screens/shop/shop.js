// import React from "react";
// import products from "./ShopsData.json";
// import "./shop.css";
// import Rating from "../../components/general/Rating";
// import img from "../../img/imgg.jpg";
// import logo from "../../img/USA.jpg";
// import img11 from "../../img/serder1.png"
// import img12  from "../../img/karzina.png"

// export default function Shop() { 
//   return (
//     <div className="section-box1">
//       <div cllassName="container-one">
//          <p>.</p>        
//         <div className="header-two">
//           <p>
//             <img className="logo" src={logo} alt="logo" />
//             English
//           </p>
//           <h1>
//             OriHero <br /> <span>Admin</span>
//           </h1>
//           <img src={img} alt="imgg" />
//         </div>
      
//       <div className="section-box">
//         <div className="left-one">
//           <p className="p-box">Multi Range</p>

//           <div className="box-two">
//           <input type="radio" id="all" name="fav_language"  />
//           <label htmlFor="all">All</label>
//           </div>
//           <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> $0 = $10</label>
//           </div>
         
//           <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> $10 = $100</label>
//           </div>
         
//           <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> $100 = $500</label>
//           </div>
         
//           <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> $500 = $1000</label>
//           </div>

//           {/* <div className="box--1">
//             <input type="range" id="boxx1" />
//           </div> */}
//            <p className="p-box">Categories</p>

//            <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> Appliances</label>
//           </div>
//            <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> Audio</label>
//           </div>
         
//            <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> Cameras & Camcorders</label>
//           </div>
//            <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> Car Electronics & GPS</label>
//           </div>
//            <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> Cell Phones</label>
//           </div>
//            <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> Computers & Tablets</label>
//           </div>
//            <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> Health, Fitness & Beauty</label>
//           </div>
//            <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> Office & School Supplies</label>
//           </div>
//            <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> TV & Home Theater</label>
//           </div>
//            <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> Video Games</label>
//           </div>
//           <p className="p-box">Brands</p>
//           <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> Insignia™</label>
//           </div>
          
//           <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> Samsung</label>
//           </div>
          
//           <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> Metra</label>
//           </div>
          
//           <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> HP</label>
//           </div>
          
//           <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> Apple</label>
//           </div>
//           <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> GE</label>
//           </div>
//           <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> Incipio</label>
//           </div>
//           <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> KitchenAid</label>
//           </div>
//           <div className="box-two">
//           <input type="radio" id="age" name="fav_language" />
//           <label htmlFor=""> Whirlpool</label>
//           </div>
          
//         </div>
//         <div className="right-one">
//           <input
//             type="text"
//             className="input-one"
//             placeholder="Search Produce"
//           />
//           <div className="products">
//             {products.map((e, i) => {
//               return (
//                 <div key={i} className="product-container">
//                   <img src={e.imageUrl} alt={e.name} />
//                   <div className="price-container">
//                     <Rating count={e.rating} />
//                     <p className="price">${e.price}</p>
//                   </div>
//                   <h3>{e.name}</h3>
//                   <span className="span">
//                     {e.description.substring(0, 30)}...
//                   </span>
//                   <div className="container">
//        </div>
//        </div>
  
//   );
// }
