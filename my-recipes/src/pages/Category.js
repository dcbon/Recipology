import React, { useEffect } from "react"
import { 
  Col, 
  Card
} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"
import { getCategories, getLoading, filterCategory } from "../store/actions/mealAction"

const Category = () => {
  const dispatch = useDispatch()
  const { categories, loading, error, category } = useSelector((state) => state.mealReducer)
  
  useEffect(() => {
    dispatch(getLoading(true))
    dispatch(getCategories())
    dispatch(getLoading(false))
  }, [])

  const getCategoryMeal = (query) => {
    dispatch(filterCategory(query))
  }
  
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
    <div className="container-sm justify-content-center text-dark">
      <div className="my-5">
        <h1 className="text-center">Categories</h1>
        <hr />
      </div>
      <div className="row justify-content-center">
      {
        categories && categories.map((item, idx) => {
          return (
            <Col className="p-2 m-2 text-center" key={item.idCategory}>
              <Card style={{ width: '10rem' }} className="border-0">
                <Card.Img variant="top" src={item.strCategoryThumb} />
                <Card.Title className="p-2 mb-2 pt-2">{item.strCategory}</Card.Title>
              </Card>
            </Col>
          )
        })
      }
      </div>
      <div className="container-sm justify-content-center text-dark">
        <div className="my-5">
          <h1 className="text-center">Meals</h1>
          <hr />
        </div>
        <div className="row justify-content-center">
        {
          category && category.map((item, idx) => {
            return (
              <Col className="p-2 m-2 text-center" key={item.idMeal}>
                <Card style={{ width: '10rem' }} className="border-0" >
                  <Card.Img variant="top" src={item.strMealThumb + '/preview'} />
                  <Card.Title className="p-2 mb-2 pt-2">{item.strMeal}</Card.Title>
                </Card>
              </Col>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}
export default Category