import React from "react"
import { 
  Col, 
  Card, 
  Button 
} from 'react-bootstrap'
import { useHistory } from "react-router-dom"


const Meal = ({meal}) => {
  const history = useHistory()

  const toDetail = (id) => {
    history.push(`/recipe/${id}`)
  }

  return (
    <Col className="p-2 m-2">
      <Card style={{ width: '10rem' }} className="border-0">
        <Card.Img variant="top" src={meal.strMealThumb + '/preview'} />
        <Card.Body className="p-2 mb-2 pt-2">
          <Card.Title>{meal.strMeal}</Card.Title>
          <div className="justify-content-between">
            <Button variant="danger" size="sm" className="mr-2" onClick={() => toDetail(meal.idMeal)}>See Details</Button>
            <Button variant="outline-danger" size="sm"><i className="far fa-heart"></i></Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Meal;