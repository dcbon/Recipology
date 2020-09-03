import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { getDetail, getLoading } from "../store/actions/detailAction"
import { setFaves } from "../store/actions/favoriteAction"
import swal from 'sweetalert'

const Detail = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()
  const { meal, loading, error } = useSelector((state) => state.detailReducer)
  // const [ingredients, setIngredients] = useState([])
  // console.log(meal);
  useEffect(() => {
    dispatch(getLoading(true))
    dispatch(getDetail(id))
    dispatch(getLoading(false))
  }, [dispatch, id])

  const toHome = () => {
    history.push(`/`)
  }

  const favorited = (meal) => {
    dispatch(setFaves(meal))
    swal("Success!", "Added to Favorites!", "success");
  }

  // const {data, loading, error} = useFetcher (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

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

  if(error) return (
    <div className="container justify-content-center mb-5">
      <div className="row justify-content-center">
        <div className="col">
          <img src="https://image.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg" alt="not found" />
          <h1 className="text-danger">Recipe Not Found</h1>
        </div>
      </div>
    </div>
  )

  return (
    <div className="container-sm justify-content-center text-dark">
      {
        meal && meal.map((item, idx) => {
          return (
            <div key={item.idMeal}>
              <div className="my-5">
                <h1 className="text-center">{item.strMeal}</h1>
                <hr />
              </div>
              <div className="row justify-content-center">
                <div className="col-4">
                  <img src={item.strMealThumb} alt="" className="img-fluid" />
                  <h4 className="text-center my-3">Info</h4>
                  <hr />
                  <div className="">
                    <p><span className="mr-2 far fa-utensils"></span>{item.strCategory}</p>
                    <p><span className="mr-2 far fa-globe"></span>{item.strArea}</p>
                    <p><span className="mr-2 far fa-hashtag"></span>{ item.strTags ? item.strTags.replace(",", ", ") : "No tags" }</p>
                  </div>
                </div>
                <div className="col-6 text-justify">
                  <p className="" style={{whiteSpace: 'pre-wrap'}}>{item.strInstructions}</p>
                  <div className="justify-content-between text-right mt-3">
                    <div className="btn btn-outline-danger mr-2" onClick={() => favorited(meal)}><i className="far fa-heart"></i></div>
                    <div className="btn btn-danger px-5" onClick={toHome}>Back</div>
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
                src={item.strYoutube.replace("watch?v=", "embed/")}>
              </iframe>
            </div>
          )
        })
      }
    </div>
  )
}

export default Detail