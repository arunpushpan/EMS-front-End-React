import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useParams,useNavigate  } from 'react-router-dom';
import axios from 'axios';

function Edit() {

  const [id,setId] = useState('')
  const [empName,setName] = useState('')
  const [empAge,setAge] = useState('')
  const [empDesg,setDesg] = useState('')
  const [empSalary,setSalary] = useState(0)

  let location = useNavigate()

  const params = useParams()
  console.log(params.id);

// api call to get details of a particular employye
const fetchEmployee=async ()=>{
  const result =await axios.get('http://localhost:8000/get-an-employee/'+params.id)
setId(result.data.employee.id);
setName(result.data.employee.uname);
setAge(result.data.employee.age);
setDesg(result.data.employee.desg);
setSalary(result.data.employee.salary);

}
    console.log(id);
    console.log(empName);
    console.log(empAge);
    console.log(empDesg);
    console.log(empSalary);

    const handleUpdate =async (e) =>{
      e.preventDefault()
  const body = {
      id,
      empName,
      empAge,
      empDesg,
      empSalary
  }
  
  // api call
   const result = await axios.post('http://localhost:8000/update-employee',body)
      alert(result.data.message);
    //   redirect to admin page
     location('/')
  }


useEffect(()=>{
fetchEmployee()
},[])

  return (
    <div>
  <div className='container-fluid mt-5'>
    <h1><i className="fa-solid fa-user-pen me-3"></i>Update Employee Details
                    </h1>
                    <p style={{ textAlign: 'justify' }}>
                        This is dummy data :Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
    
        </div>
      
{/* update form design */}

<div className=' container mt-3 mb-3  p-5 border rounded'>
    <Form>
      <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Employee Name</Form.Label>

        <Form.Control type="text" placeholder="Enter Employee Name" value={empName}
         onChange={(e)=>setName(e.target.value)}
        />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAge">
      <Form.Label>Employee Age</Form.Label>
    <Form.Control type="text" placeholder="Enter Employee Age" value={empAge}
             onChange={(e)=>setAge(e.target.value)}
            />
            </Form.Group>

      <Form.Group className="mb-3" controlId="formDesg">
      <Form.Label>Employee Designation</Form.Label>

        <Form.Control type="text" placeholder="Enter Employee Designation" value={empDesg}
                 onChange={(e)=>setDesg(e.target.value)}
                />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSalary">
      <Form.Label>Employee Salary</Form.Label>

        <Form.Control type="text" placeholder="Enter Employee Salary"  value={empSalary}
                 onChange={(e)=>setSalary(e.target.value)}
                />
       
      </Form.Group>
    
      <Button onClick={(e)=>handleUpdate(e)} variant="success" type="submit">
        Update
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

export default Edit