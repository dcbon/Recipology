import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  // const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    setLoading(true)
    const fetchDetail = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json()
        setData(data.meals)
      }
      catch (err) {
        setError (err)
      }
      finally {
        setLoading(false)
      }
    }
    fetchDetail ()
  }, [id])

  // const getIngredients = () => {
  //   let newData = JSON.stringify(data)
  //   console.log(data, '===new');
  //   let ingreTemp = []
  //   for (let i = 1; i <= 20; i++) {
  //     let temp = []
  //     // temp.push(newData[`strIngredient${i}`])
  //     // temp.push(newData[`strMeasure${i}`])
  //     // ingredients.push(temp)
  //   }
  //   setIngredients(ingreTemp)
  //   console.log(ingreTemp, '====ing');
  // }
  
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

  return (
    <div className="container-sm justify-content-center text-dark">
      {
        data && data.map((data, idx) => {
          return (
            <div key={data.idMeal}>
              <div className="my-5">
                <h1 className="text-center">{data.strMeal}</h1>
                <hr />
              </div>
              <div className="row justify-content-center">
                <div className="col-4">
                  <img src={data.strMealThumb} alt="" className="img-fluid" />
                  <h4 className="text-center my-3">Info</h4>
                  <hr />
                  <div className="">
                    <p><span className="mr-2 far fa-utensils"></span>{data.strCategory}</p>
                    <p><span className="mr-2 far fa-globe"></span>{data.strArea}</p>
                    <p><span className="mr-2 far fa-hashtag"></span>{ data.strTags ? data.strTags.replace(",", ", ") : "No tags" }</p>
                  </div>
                </div>
                <div className="col-6 text-justify">
                  <p className="" style={{whiteSpace: 'pre-wrap'}}>{data.strInstructions}</p>
                  <div className="justify-content-between text-right mt-3">
                    <div className="btn btn-outline-danger mr-2"><i className="far fa-heart"></i></div>
                    <div className="btn btn-danger px-5">Back</div>
                  </div>
                </div>
              </div>
              <div className="my-5">
                <h1 className="text-center">Ingredients</h1>
                <hr />
              </div>
              {/* <div className="row">
                {
                  ingredients && ingredients.map ((ing, i) => {
                    return (
                      <div className="col m-2 p-2" key={i}>
                        <div className="card border-0" style={{width: '10rem'}}>
                          <img src={`https://www.themealdb.com/images/ingredients/${ing[0]}-Small.png`} className="card-img-top" alt="..."/>
                          <h5 className="card-title">{ing[0]}</h5>
                          <p className="card-text">{ing[1]}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div> */}
              <div className="my-5">
                <h1 className="text-center">Video(s)</h1>
                <hr />
              </div>
              <iframe width="420" height="315"
                src={data.strYoutube.replace("watch?v=", "embed/")}>
              </iframe>
            </div>
          )
        })
      }
    {console.log(data)}
    </div>
  )
}

export default Detail