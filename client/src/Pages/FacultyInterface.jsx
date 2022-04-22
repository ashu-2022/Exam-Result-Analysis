import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'


import FacultyHomeHelper from '../Components/FacultyHomeHelper'


const FacultyInterface = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    return (
        <>
            {store.faculty.isAuthenticated ? <>
                <FacultyHomeHelper />
                <div className="d-flex align-items-center justify-content-center" style={{ padding: "4rem 1rem 1rem 1rem" }}>
                    <div>

                        <div className="row">
                            <div className="col-5">
                                <div className="card" style={{ width: "18rem",height:'31rem', boxShadow: '0 0 15px' }}>
                                    <img className="card-img-top " style={{ padding: "1rem 2rem 1rem 1rem", }} src={store.faculty.faculty.faculty.avatar} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{store.faculty.faculty.faculty.name}</h5>
                                        <h5 className="card-title">{store.faculty.faculty.faculty.registrationNumber}</h5>
                                        <Link to='/faculty/updateProfile'>UPDATE PROFILE</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 bg-dark  text-white" style={{ padding: "1rem 1rem 1rem 1rem" }}>
                                <table className="table border">
                                    <tbody className="text-white">
                                        <tr>
                                            <td>Name</td>
                                            <td>{store.faculty.faculty.faculty.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>{store.faculty.faculty.faculty.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Registration Number</td>
                                            <td>{store.faculty.faculty.faculty.registrationNumber}</td>
                                        </tr>
                                        <tr>
                                            <td>Date Of Birth</td>
                                            <td>{store.faculty.faculty.faculty.dob}</td>
                                        </tr>
                                        <tr>
                                            <td>Designation</td>
                                            <td>{store.faculty.faculty.faculty.designation}</td>
                                        </tr>
                                        <tr>
                                            <td>Joining Year</td>
                                            <td>{store.faculty.faculty.faculty.joiningYear}</td>
                                        </tr>
                                        <tr>
                                            <td>Department</td>
                                            <td>{store.faculty.faculty.faculty.department}</td>
                                        </tr>
                                        <tr>
                                            <td>Gender</td>
                                            <td>{store.faculty.faculty.faculty.gender ? store.faculty.faculty.faculty.gender :

                                                "NA"
                                            }</td>
                                        </tr>
                                        <tr>
                                            <td>Contact Number</td>
                                            <td>{store.faculty.faculty.faculty.facultyMobileNumber ?
                                                store.faculty.faculty.faculty.facultyMobileNumber : "NA"}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>
                </div>

            </> : (history.push('/'))}

        </>


    )
}

export default FacultyInterface
