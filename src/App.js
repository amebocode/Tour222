import "./App.css";
import Header from "./Header";
import Contain from "./Contain";
import data from "./Data";

function App() {
  const dataarray = data.map((item) => {
    return (
      <Contain
        img={item.img}
        one={item.country}
        two={item.tourplace}
        three={item.date}
        four={item.desc}
      />
    );
  });
  return (
    <div className="body">
      <Header />
      {dataarray}
    </div>
  );
}

export default App;
