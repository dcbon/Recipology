import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { 
  Col, 
  Card, 
  Button 
} from 'react-bootstrap'


const Favorite = () => {
  const history = useHistory()
  const faves = useSelector((state) => state.favorites);

  const toDetail = (id) => {
    history.push(`/recipe/${id}`)
  }
  
  return (
    <div className="container-sm justify-content-center text-dark">
      <div className="my-5">
        <h1 className="text-center">Favorites</h1>
        <hr />
      </div>
      <div className="row justify-content-center">
      {
        faves && faves.map((fave, idx) => {
          return (
            <Col className="p-2 m-2 text-center" key={fave.idMeal}>
              <Card style={{ width: '10rem' }} className="border-0">
                <Card.Img variant="top" src={fave.strMealThumb + '/preview'} />
                <Card.Body className="p-2 mb-2 pt-2">
                  <Card.Title>{fave.strMeal}</Card.Title>
                  <div className="justify-content-between">
                    <Button variant="danger" size="sm" className="mr-2" onClick={() => toDetail(fave.idMeal)}>See Details</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )
        })
      }
      </div>
      {console.log(faves)}
    </div>
  )
}

export default Favorite