import { useEffect,useState } from "react"
import {useNavigate} from "react-router-dom"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
import Footer from "./Footer";

function Home()
{
    const [apidata,setdata]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        getData()
    },[])
    
    function getId(pid)
    {
      const data={pid:pid}
      navigate("/item",{state:data})
      console.log(pid)
      
    }
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
            alt='...'code
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle>{item.price*80} rs.</MDBCardTitle>
            <MDBCardTitle>{item.rating.rate}</MDBCardTitle> 
            <MDBCardTitle>{item.description.slice(0,200)}</MDBCardTitle>
            <MDBCardText>
            {item.description}
              
            </MDBCardText>
            <center><MDBBtn onClick={()=>getId(item.id)} >view</MDBBtn></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
)}

      </MDBRow>
      <Footer></Footer>
            
    </div>)
    
}
export default Home