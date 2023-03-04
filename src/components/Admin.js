import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Admin() {

    const [allEmployees, setAllEmployees] = useState([])

    const fetchData = async () => {
        const result = await axios.get('http://localhost:8000/get-all-employees')
        // console.log(result.data.employees);
        setAllEmployees(result.data.employees);

    }
    console.log(allEmployees);
    useEffect(() => {
        fetchData()
    }, [])

    // handledelete
    const handleDelete = async (id)=>{
const result = axios.delete('http://localhost:8000/delete-employee/'+id)
alert((await result).data.message);
fetchData()
    }

    return (
        <div>
            <div className='container-fluid mt-5'>
                <h1><i className="fa-solid fa-user-group me-2"></i>Employee Management App
                    <Link to={'/add'}>
                        <a className='btn btn-success ms-5'><i className="fa-solid fa-user-plus me-2"></i>Add Employee</a>
                    </Link>                      
                </h1>
                <p style={{ textAlign: 'justify' }}>
                    This is dummy data :Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>


                <div className='container mt-2 mb-2'>
                    <h1 className='text-success'>Employee Details</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Designation</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allEmployees?.map((item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.id}</td>
                                        <td>{item.uname}</td>
                                        <td>{item.age}</td>
                                        <td>{item.desg}</td>
                                        <td>{item.salary}</td>
                                        <td>
<Link to={'edit/'+item.id}>
            <button className='btn btn-warning me-3'> <i className="fa-solid fa-pen"></i></button>

</Link  >                                             <button onClick={()=>handleDelete(item.id)} className='btn btn-danger'> <i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))

                            }

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Admin