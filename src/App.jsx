import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import NewsBoard from "./components/newsboard/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
