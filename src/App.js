import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./components/Sidebar";
import './App.css';
import Foodcard from "./components/Foodcard";
import img1 from "./components/image1.png";
import img2 from "./components/image2.png";
import img3 from "./components/image3.png";
import img4 from "./components/image4.png";
import filter from "./filter.png";
import Cart from "./components/Cart";




function App() {



  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="middle">
        <div className="filter">
          <input className="input-2" type="text" />

          <button className="input-1" type="submit">
            {" "}
            🔍{" "}
          </button>
        </div>
        <div className="box">
          <Foodcard
            rating={"4"}
            image={img1}
            title={"Food1"}
            quantity={"300gm"}
            cost={"12.99"}
          />
          <Foodcard
            rating={"4.1"}
            image={img2}
            title={"Food2"}
            quantity={"400gm"}
            cost={"15.99"}
          />
          <Foodcard
            rating={"4.7"}
            image={img3}
            title={"Food3"}
            quantity={"700gm"}
            cost={"17.99"}
          />
          <Foodcard
            rating={"4.0"}
            image={img4}
            title={"Food1"}
            quantity={"300gm"}
            cost={"12.99"}
          />
          <Foodcard
            rating={"4"}
            image={img1}
            title={"Food1"}
            quantity={"300gm"}
            cost={"12.99"}
          />
          <Foodcard
            rating={"4"}
            image={img1}
            title={"Food1"}
            quantity={"300gm"}
            cost={"12.99"}
          />
          <Foodcard
            rating={"4"}
            image={img1}
            title={"Food1"}
            quantity={"300gm"}
            cost={"12.99"}
          />
          <Foodcard
            rating={"4"}
            image={img1}
            title={"Food1"}
            quantity={"300gm"}
            cost={"12.99"}
          />
        </div>
      </div>
      <div className="cart">
        <Cart />
      </div>
    </div>
  );
}

export default App;
