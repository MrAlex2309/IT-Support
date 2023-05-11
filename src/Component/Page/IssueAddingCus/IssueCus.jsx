import React from 'react'
import './IssueStyle.css'
import logo from '../../assets/logoKts.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import RichText from '../../../Utility/rich-text/rich-text';
import Uploader from '../../../Utility/Upload/Uploader';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function Issue() {

  const [valid, setValid] = useState(true)


  const [reporter, setReporter] = useState('')
  const [location, setLocation] = useState()
  const [problem, setProblem] = useState()
  const [images, setImage] = useState()
  const [status, SetStatus] = useState('Open')
  const [check, setCheck] = useState(false)
  const currentTime = new Date().toLocaleString()
  const currentDate = new Date().toLocaleDateString()

  const info = {
    supportOpt:'Customer IT Support',
    locationProblem:location,
    Reporter:reporter,
    ProblemDetail:problem,
    image:images,
    status:status,
    check:check,
    StartTime:currentTime,
    StartDate:currentDate
  }
  async function SaveHandler  ()  {
    if(reporter.trim().length===0){
      setValid(false)
      return;
  }
  else {
    setValid(true)
  }  
  console.log(reporter.trim().length)
  console.log(valid)
  console.log(info)

  const response = await fetch('https://it-support-39885-default-rtdb.firebaseio.com/info.json', {
    method: 'POST',
    body: JSON.stringify(info),
    header: {
      'Content-Type':'application/json'
    }
  })
    const data = await response.json()
    console.log(data)

    setReporter()
    setLocation()
    setProblem()
    console.log(info)
 }

 const CallRichText = (value) => {
    setProblem(value)
 }
 const ImageHandler = (img) =>{
    setImage(img)
 }
 const LocationHandler = (event) => {
  setLocation(event.target.value)
 }
 
  return (
    <div className="container-fluid p-0 bg-light">
      <div className="bg-primary" style={{height: '354px'}}>
        <span className="fs-4 fw-bolder text-light m-1">KTS Support Center</span>
      </div>
    <div className="d-flex justify-content-md-center" >
    <div className="bg-white px-5 py-4">
       <div className="d-flex flex-column">
         <header>
           <div className='d-flex justify-content-start align-items-center'>
             <div style={{height: '50px', width:'50px', marginRight: '16px'}}>
               <img src={logo} alt="logo" className='w-100 h-100'/>
             </div>
             <span className='fs-3'>KTS Service Desk</span>
           </div>
           <div className='w-100 mt-3'>
             <p className='fs-6'>សូមស្វាគមន៍មកកាន់សេវាជំនួយបច្ចេកទេសរបស់ក្រុមហ៊ុនKTS</p>
           </div>
         </header>
         <span className='my-2'>Contact Us About</span>
         <div className='w-100 sui'>
          <span>ជំនួយផ្នែកបច្ចេកទេសទូទៅ (Customers IT Support)</span>
         </div>
         <span style={{marginTop: '30px'}}>What can we help you?</span>
         <div className='w-100 sui d-flex align-items-center'>          
            <FontAwesomeIcon icon={faScrewdriverWrench} style={{marginRight:'10px'}}/>  
            <span className='fw-bold text-primary'>ជំនួយការបច្ចេកទេសសំរាប់អតិថិជន</span>
         </div>
         <span style={{marginTop: '30px'}}>Raise this request on behalf of</span>               
         {
          valid && <div style={{position: 'relative'}}>
              <select defaultValue={reporter} onChange={(event)=>{setReporter(event.target.value)}} className="DropReporter" >
              <option value="">Choose Reporter</option>
              <option value="Heng Porkim">Heng Porkim</option>
              <option value="Ny Seyla">Ny Seyla</option>
              <option value="Sorn San">Sorn San</option>
              <option value="Phin Reaksa">Phin Reaksa</option>
              <option value="Seom Makara">Seom Makara</option>
              <option value="Chea Monysatyakvathna">Chea Monysatyakvathna</option>
              <option value="Van Dara">Van Dara</option>
              <option value="Yusuf Naseat">Yusuf Naseat</option>                        
              </select>
                <div style={{position: 'absolute', right: '10px', top: '7px'}}>
                  <FontAwesomeIcon icon={faArrowDown} />
                </div>            
            </div> 
         }
         {
          !valid && <div style={{position: 'relative'}}>
          <select defaultValue={reporter} onChange={(event)=>{setReporter(event.target.value)}} className="DropReporter" style={{border: '2px solid red'}}>
            <option value="">Choose Reporter</option>
            <option value="Heng Porkim">Heng Porkim</option>
            <option value="Ny Seyla">Ny Seyla</option>
            <option value="Sorn San">Sorn San</option>
            <option value="Phin Reaksa">Phin Reaksa</option>
            <option value="Seom Makara">Seom Makara</option>
            <option value="Chea Monysatyakvathna">Chea Monysatyakvathna</option>
            <option value="Van Dara">Van Dara</option>
            <option value="Yusuf Naseat">Yusuf Naseat</option>                        
          </select>
            <div style={{position: 'absolute', right: '10px', top: '7px'}}>
              <FontAwesomeIcon icon={faArrowDown} style={{color:'red'}}/>
            </div>            
        </div>
         }
          <div style={{marginTop: '30px'}}>
            <span>Location Problem</span>
            <div className="input-group mb-3">
              <input type="text" onChange={LocationHandler} className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
          </div>
          <div>
            <span>បរិយាយបញ្ហា</span>
            <RichText onData={CallRichText}/>
          </div>
          <div style={{marginTop: '30px'}}>
            <span>ភ្ជាប់ឯកសារបន្ថែម</span>
            <div className="d-flex flex-column justify-content-center">
              <Uploader onImage={ImageHandler}/>
            </div>            
          </div>
          <div className="d-flex mt-5">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Save
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Are you sure to add this record?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={SaveHandler}>ADD</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
     </div>
    </div>
   </div>
  )
}

        

//   return(
//     <div className="d-flex flex-column">
//       <div className="d-flex flex-column">
//         <div className="position-relative d-flex flex-column" style={{overflowX:'hidden', minHeight:'100vh'}}>
//           <div className='position-absolute' style={{
//             top:'0px',
//             left: '0px',
//             right: '0px',
//             height: '352px',
//             zIndex: '-2',
//             backgroundColor: 'rgb(0, 116, 224)',
//             backgroundImage: 'none',
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center center',
//           }}>
//           </div>
//           <header>
//             <span className='fs-3 text-white pt-2'>KTS Support Center</span>
//           </header>
//           <div className="position-relative d-flex" style={{flex:'1 1 auto', overflow:'hidden'}}>
//             <div className='white'></div>
//             <main className='dljzdM'></main>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
