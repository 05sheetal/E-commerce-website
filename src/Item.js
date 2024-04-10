import { useEffect,useState } from "react";
import {useLocation} from "react-router-dom"
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
function Item()
{

    const  location=useLocation();
    const data=location.state
    const [apidata,setdata]=useState({})
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/"+data.pid).then((result)=>{
        result.json().then((data1)=>{
        // console.log(data)
        setdata(data1)
        })
      })

    },[])
    return(

        <div>
            <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
            <h1>{data.pid}</h1>
        </div>
    )
}
export default Item