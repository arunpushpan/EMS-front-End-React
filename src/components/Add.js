import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid'; 


function Add() {

    const [id,setId] = useState('')
    const [empName,setName] = useState('')
    const [empAge,setAge] = useState('')
    const [empDesg,setDesg] = useState('')
    const [empSalary,setSalary] = useState(0)

let location = useNavigate()

    useEffect(()=>{
        setId(uuid().slice(0,3))

    },[])


    const handleAddEmployee =async (e) =>{
    e.preventDefault()
// generate unique Id
setId(uuid().slice(0,3))

    // console.log(empName);
    // console.log(empAge);
    // console.log(empDesg);
    // console.log(empSalary);
const body = {
    id,
    empName,
    empAge,
    empDesg,
    empSalary
}
console.log(body);

// api call
const result = await axios.post('http://localhost:8000/add-employee',body)
   alert(result.data.message);
  //  redirect to admin page
  location('/')
}
   
  return (
    <div>
        <div className='container-fluid mt-5'>
    <h1><i className="fa-solid fa-user-plus me-3"></i>New Employee Registration Form
                    </h1>
                    <p style={{ textAlign: 'justify' }}>
                        This is dummy data :Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
    
        </div>

    <div className=' container mt-3 mb-3  p-5 border rounded'>
    <Form>
      <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Employee Name</Form.Label>

        <Form.Control type="text" placeholder="Enter Employee Name" 
        onChange={(e)=>setName(e.target.value)}
        />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAge">
      <Form.Label>Employee Age</Form.Label>
    <Form.Control type="text" placeholder="Enter Employee Age"
            onChange={(e)=>setAge(e.target.value)}
            />
            </Form.Group>

      <Form.Group className="mb-3" controlId="formDesg">
      <Form.Label>Employee Designation</Form.Label>

        <Form.Control type="text" placeholder="Enter Employee Designation" 
                onChange={(e)=>setDesg(e.target.value)}
                />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSalary">
      <Form.Label>Employee Salary</Form.Label>

        <Form.Control type="text" placeholder="Enter Employee Salary"  
                onChange={(e)=>setSalary(e.target.value)}
                />
       
      </Form.Group>
    
      <Button onClick={(e)=>handleAddEmployee(e)} variant="success" type="submit">
        Add
      </Button>
<Link to={'/'}>

<Button className='ms-2' variant="warning" type="submit">
        Close
      </Button>
</Link>


    </Form>
    </div>
   
    </div>
  )
}

export default Add