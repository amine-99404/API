
import React from 'react'
import { Card,Button } from 'react-bootstrap'

const UserCard = ({user}) => {
    return (
        <div className='col-md-4 mt-3'>
            <Card style={{ width: '18rem' }}>
                <span className='avatar'>{user.name[0]}</span>
  <Card.Body className="d-flex flex-column align-items-center">
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>{`@${user.username}`}</Card.Text>
    <Card.Text>{user.email}</Card.Text>
    <Card.Text>{user.email}</Card.Text>
    <Card.Text>{user.address.city}</Card.Text>

    <Button variant="primary">Go to profil</Button>
  </Card.Body>
</Card>
            
        </div>
    )
}

export default UserCard
