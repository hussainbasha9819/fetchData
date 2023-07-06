import { useEffect, useState } from "react";
import CArd from "./CArd";
import Loader from "./Loader";

const Home = () => {
  const [products, Setproducts] = useState([]);
  const [Load, SetLoad] = useState(false);
  const fatchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    fatchData();
  }, []);

  return (
    <>
      {Load ? (
        <Loader />
      ) : (
        <div class="w-full h-screen flex bg-slate-700 flex-wrap overflow-scroll gap-5">
          {/* {products.map((ele) => (
            <CArd
              key={ele._id}
              img={ele.thumbnail}
              title={ele.title}
              description={ele.description}
              category={ele.category}
            />
          ))} */}
        </div>
      )}
    </>
  );
};
export default Home;
