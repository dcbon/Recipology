import React, { useState, useEffect } from "react"
import { 
  Col, 
  Card
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
    <Col md={2} xs={4} className="p-2">
      <Card className="border-0">
        <Card.Img variant="top" src={meal.strMealThumb + '/preview'} />
        <Card.Body className="p-2 mb-2 pt-2">
          <div className="justify-content-between">
            {!faved && <p className="text-danger mb-0" role="button" onClick={() => favorited(meal)}><i className="far fa-heart"></i></p>}
            {faved && <p className="text-danger mb-0"><i className="fas fa-heart"></i></p>}
            <Card.Title onClick={() => toDetail(meal.idMeal)} role="button">{meal.strMeal}</Card.Title>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Meal;