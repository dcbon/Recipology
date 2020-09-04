import React, { useState, useEffect } from "react"
import { 
  Col, 
  Card, 
  Button 
} from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setFaves } from "../store/actions/favoriteAction"
import swal from 'sweetalert'


const Meal = ({meal}) => {
  const { favorites } = useSelector((state) => state.favoriteReducer)
  const [faved, setFaved] = useState()
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    checkFav()
  })

  const checkFav = () => {
    let isFavorited = favorites.includes(meal)
    if (isFavorited) setFaved(true)
  }

  const toDetail = (id) => {
    history.push(`/recipe/${id}`)
  }

  const favorited = (meal) => {
    dispatch(setFaves(meal))
    swal("Success!", "Added to Favorites!", "success");
    setFaved(true)
  }

  return (
    <Col className="p-2 m-2">
      <Card style={{ width: '10rem' }} className="border-0">
        <Card.Img variant="top" src={meal.strMealThumb + '/preview'} />
        <Card.Body className="p-2 mb-2 pt-2">
          <Card.Title>{meal.strMeal}</Card.Title>
          <div className="justify-content-between">
            <Button variant="danger" size="sm" className="mr-2" onClick={() => toDetail(meal.idMeal)}>See Details</Button>
            {!faved && <Button variant="outline-danger" size="sm" onClick={() => favorited(meal)}><i className="far fa-heart"></i></Button>}
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Meal;