import "./dashboard.css";
import React from "react";
import img from "../../img/imgg.jpg";
import logo from "../../img/USA.jpg";
import img2 from "../../img/2.svg";
import img3 from "../../img/three.png";
import img4 from "../../img/pencil.png";
import img5 from "../../img/user.jpg";
import img6 from "../../img/bolt.png";

export default function Dashboard() {
  return (
    <div className="section-two">
      <div className="left">
        <img src={img2} alt="" />

        <span>Delivery</span>
        <h1>
          <i class="fas fa-home"></i>
          Dashboard
        </h1>
        <h2>
          <i class="far fa-user"></i>
          <span className="one">Users</span>
        </h2>
      </div>
      <div className="right">
        <div className="header">
          <p>
            <img className="logo" src={logo} alt="logo" />
            English
          </p>
          <h1>
            OriHero <br /> <span>Admin</span>
          </h1>
          <img src={img} alt="imgg" />
        </div>
        <div className="section-one"><h1>Filters</h1>
        <div className="selector">
          
          <select name="number" className="number1">
            <option>Admin</option>
            <option>Author</option>
            <option>Editor</option>
            <option >Subscriber</option>
          </select>
          <select name="number" className="number2">
            <option>Activ</option>
            <option>Inactiv</option>
          </select>
        </div>
        </div>
        
        <div className="rows">
          <div className="show">
            <p>Show</p>
            <select name="number" className="number">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <p>entries</p>
          </div>
          <div className="search">
            <input type="search" placeholder="Search..." />
          </div>
          <button>Add User</button>
        </div>
        <div className="dashboard">
          <table>
            <tr>
              <th>Companydsa</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

            <tr>
              <td>
                <img className="img" alt="Avatar" src={img} />
                <div className="user-info">
                  <p className="info">
                    Beverlie<span> Krabbe </span>
                    <span className="box2">pdurber1c@</span>
                  </p>
                </div>
              </td>
              <td>
                <span className="b">pdurber1c@gov.uk</span>
              </td>
              <td>
                <span className="box1">
                  <span>
                    <img className="img4" src={img4} alt="pencil" />
                  </span>{" "}
                  <span className="">Kuryer</span>{" "}
                </span>
              </td>
              <td>
                <span className="a">Activ</span>
              </td>
              <td>
                <span>
                  <img className="c" src={img3} alt="" />
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <img className="img" alt="Avatar" src={img} />
                <div className="user-info">
                  <p className="info">
                    {" "}
                    Paulie <span>Durber </span>
                    <span className="box2">bkrabbe1d@</span>
                  </p>
                </div>
              </td>
              <td>
                <span className="b">bkrabbe1d@home.pl</span>
              </td>
              <td>
                <span className="box1">
                  <span>
                    <img className="img5" src={img5} alt="pencil" />
                  </span>{" "}
                  <span className="">User</span>{" "}
                </span>
              </td>
              <td>
                <span className="i">Inactiv</span>
              </td>
              <td>
                <span>
                  <img className="c" src={img3} alt="" />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <img className="img" alt="Avatar" src={img} />
                <div className="user-info">
                  <p className="info">
                    {" "}
                    Vladamir <span>Koschek </span>
                    <span className="box2">vkoschek17@</span>
                  </p>
                </div>
              </td>
              <td>
                <span className="b">vkoschek17@abc.net.au</span>
              </td>
              <td>
                <span className="box1">
                  <span>
                    <img className="img5" src={img6} alt="pencil" />
                  </span>{" "}
                  <span className="">Author</span>{" "}
                </span>
              </td>
              <td>
                <span className="a">Activ</span>
              </td>
              <td>
                <span>
                  <img className="c" src={img3} alt="" />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <img className="img" alt="Avatar" src={img} />
                <div className="user-info">
                  <p className="info">
                    Beverlie<span> Krabbe </span>
                    <span className="box2">pdurber1c@</span>
                  </p>
                </div>
              </td>
              <td>
                <span className="b">pdurber1c@gov.uk</span>
              </td>
              <td>
                <span className="box1">
                  <span>
                    <img className="img4" src={img4} alt="pencil" />
                  </span>{" "}
                  <span className="">Kuryer</span>{" "}
                </span>
              </td>
              <td>
                <span className="a">Activ</span>
              </td>
              <td>
                <span>
                  <img className="c" src={img3} alt="" />
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <img className="img" alt="Avatar" src={img} />
                <div className="user-info">
                  <p className="info">
                    {" "}
                    Paulie <span>Durber </span>
                    <span className="box2">bkrabbe1d@</span>
                  </p>
                </div>
              </td>
              <td>
                <span className="b">bkrabbe1d@home.pl</span>
              </td>
              <td>
                <span className="box1">
                  <span>
                    <img className="img5" src={img5} alt="pencil" />
                  </span>{" "}
                  <span className="">User</span>{" "}
                </span>
              </td>
              <td>
                <span className="i">Inactiv</span>
              </td>
              <td>
                <span>
                  <img className="c" src={img3} alt="" />
                </span>
              </td>
            </tr>
           
            
          </table>
        </div>
      </div>
    </div>
  );
}
