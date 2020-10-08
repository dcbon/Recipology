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
  const { favorites, loading } = useSelector((state) => state.favoriteReducer)

  const toDetail = (id) => {
    history.push(`/recipe/${id}`)
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

  if (!favorites.length) return (
    <div className="container-sm justify-content-center text-center">
      <div className="my-5">
        <h1 className="text-center">Favorites</h1>
        <hr />
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col">
          <img src="empty.svg" style={{width: 300}} alt="empty" />
        </div>
      </div>
      <h4 className="text-org mt-5">Your Favorite List is empty</h4>
      <h5>Click <span role="img" aria-label="heart">&#x1F497;</span> at the bottom of the card to add to favorite</h5>
    </div>
  )
  
  return (
    <div className="container-sm justify-content-center text-dark">
      <div className="my-5">
        <h1 className="text-center">Favorites</h1>
        <hr />
      </div>
      <div className="row justify-content-start">
        {
          favorites && favorites.map((fave) => {
            return (
              <Col md={2} xs={4} className="p-2 text-center" key={fave.idMeal}>
                <Card className="border-0">
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
    </div>
  )
}

export default Favorite