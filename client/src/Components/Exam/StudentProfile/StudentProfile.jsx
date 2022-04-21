import React from 'react'
import './StudentProfile.css';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import ProfileIcon from '../../../Style/Images/profile.png';
import CircularScore from '../CircularScore/CircularScore';

const StudentProfile = (props) => {
    // console.log("props in studentProfile", props);
    const {name, roll_no, course, branch, session, aggregate_percentage} = props.profile;

  return (
    <div className='mt-3'>
        <Card style={{ width: '18rem' }} className="m-auto">
        <Card.Img variant="top" className='profile-img m-auto' src={ProfileIcon} />
        <Card.Body>
            <Card.Title className='text-center'>{name}</Card.Title>
            {/* <Card.Text>
            </Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Roll No: {roll_no}</ListGroupItem>
            <ListGroupItem>Course : {course}</ListGroupItem>
            <ListGroupItem>Branch : {branch}</ListGroupItem>
            <ListGroupItem>Session : {session}</ListGroupItem>
            <ListGroupItem>Aggregate : {aggregate_percentage}%</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <CircularScore score={89} grade='A'/>
          <div className='text-center'>
          <Link to="/student/examResult/overall" className='btn btn-info text-white'> View Overall Result </Link>
        </div>
        </Card.Body>
        </Card>
    </div>
  )
}

export default StudentProfile

