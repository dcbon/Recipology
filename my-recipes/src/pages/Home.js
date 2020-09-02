import React from "react"
import MealList from "../components/MealList"
import useFetcher from "../hooks/useFetcher"

const Home = () => {
  const {data: meals, loading, error} = useFetcher (`https://www.themealdb.com/api/json/v1/1/search.php?s=`)

  if(loading) return (
    <div className="container-sm">
      <div className="container justify-content-center text-center">
        <div className="row justify-content-center mt-5">
          <div className="col">
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        <h1 className="text-danger">Please Wait..</h1>
      </div>
    </div>
  )

  if(error) return <>Something went wrong, please comeback later</>
  
  return (
    <div className="container-sm">
      <div className="justify-content-center text-center">
        <div 
          style=
          {{
            backgroundPosition: "center", 
            backgroundSize: "cover", 
            backgroundImage: "url(https://phototheque-enx.com/_data/i/upload/2019/08/30/20190830154206-c51bdd19-me.jpg)", 
            height: "300px"
          }} 
          className="py-5 my-5 text-dark"
        >
          <h2 className="" style={{letterSpacing: "2px"}}>WELCOME TO RECIPOLOGY</h2>
          <p className="pt-3 ms">Here we try to share our vision about food quality, our mission about customer’s <span><br></br></span> satisfaction and introducing services that we provide for you.</p>
          <button className="btn btn-danger">See Category</button>
        </div>
        <MealList 
          meals={meals}
        />
      </div>
    </div>
  )
}

export default Home