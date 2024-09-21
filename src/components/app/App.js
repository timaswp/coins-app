import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home-page/home-page";
import CoinsListPage from "../pages/coins-list-page/coins-list-page";

// fetch('http://localhost:3001/api/coin/list?limit=12&category=Bullion%20coins')
//     .then(res => res.json())
//     .then((res) => console.log(res.data))
//     .catch(error => console.error(error));

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/coins-list" Component={CoinsListPage} />
                {/* <Route path="/cart" Component={CartPage} />
                <Route path="/:id" Component={ItemPage} /> */}
            </Routes>
        </div>
    );
}

export default App;
