import React, { useState, useEffect } from "react"
import { 
  Col, 
  Card
} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"
import { getCategories, getLoading, filterCategory } from "../store/actions/mealAction"

const Category = () => {
  const dispatch = useDispatch()
  const { categories, loading, error, category } = useSelector((state) => state.mealReducer)
  const [categoryName, setCategoryName] = useState('')
  
  useEffect(() => {
    dispatch(getLoading(true))
    setCategoryName('Beef')
    getCategoryMeal('Beef')
    const fetchCategory = async () => {
      try {
        dispatch(getCategories())
      }
      catch(err) {
        console.log(err);
      }
      finally {
        dispatch(getLoading(false))
      }
    }
    fetchCategory()
  }, [])

  const getCategoryMeal = (query) => {
    setCategoryName(query)
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
      <div className="row justify-content-start">
      {
        categories && categories.map((item, idx) => {
          return (
            <Col md={2} xs={4} className="p-2 text-center" key={item.idCategory}>
              <Card 
                role="button"
                // style={{ width: '10rem' }} 
                className="border-0" 
                onClick={() => getCategoryMeal(item.strCategory)}
              >
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
    <h1 className="text-center">{categoryName}</h1>
          <hr />
        </div>
        <div className="row justify-content-start">
        {
          category && category.map((item) => {
            return (
              <Col md={2} xs={4} className="p-2 text-center" key={item.idMeal}>
                <Card className="border-0" >
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