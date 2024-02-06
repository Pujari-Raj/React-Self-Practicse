import "./app.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Test from "./components/Test";

function App() {
  const [userdetail, setUserDetails] = useState({});

  // function to get the data from API and storing it in userdetail(state-variable)
  // and calling setUserDetails method to update the value after receving it from API.
  const fetchdetails = async () => {
    //     // making the web request using (AXIOS-third party package)
    const { data } = await axios.get("https://randomuser.me/api/");
    console.log(data);
    //storing the results object value in userdetail variable and then setting that
    // data in setUserDetails method.
    const userdetail = data.results[0];
    // console.log(userdetail);
    setUserDetails(userdetail);
  };

  // using useEffect hook to call the function which we will call on the page load
  useEffect(() => {
    fetchdetails();
  }, []);

  return (
    // JSX- Javascript XML
    <>
      {/* <Card details ={userdetail} /> */}

      {/* <Navbar />
        <Carousel /> */}
        
      <Test />
    </>
  );
}

export default App;
