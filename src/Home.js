import { useEffect,useState } from "react"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';

function Home()
{
    const [apidata,setdata]=useState([])
    useEffect(()=>{
        getData()
    },[])
    async function getData()
    {
        var result=await fetch("https://fakestoreapi.com/products")
        
        // console.log(result)
        var data=await result.json()

        // console.log(data)
        setdata(data)
        console.log(data)
    }
    return(
        <div>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
          {
            apidata.map((item)=>
          
          
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={item.image} style={{width:"100px", height:"100px"}}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
)}

      </MDBRow>
            
    </div>)
    
}
export default Home