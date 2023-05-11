import React, { useEffect } from 'react'
import '../CaseView/CaseView.css'
import logo from '../../assets/logoKts.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import RichTextt from '../../../Utility/rich-text/rich-text(2)';
import Uploader from '../../../Utility/Upload/Uploader';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function CaseView() {
  const locations = useLocation()
  const [valid, setValid] = useState(true)
  const [option, setOption] = useState(locations.state.opt)
  const [check, setCheck] = useState(locations.state.check)

  const [reporter, setReporter] = useState(locations.state.reporter)
  const [location, setLocation] = useState(locations.state.location)
  const [problem, setProblem] = useState(locations.state.problem)
  const [images, setImage] = useState()
  const [status, setStatus] = useState(locations.state.status)
  const endDate = new Date().toLocaleDateString()
  const startTime = locations.state.startTime
  const startDate = locations.state.startDate
  const [closingDate, setClosingDate] = useState()

  const info = {
    supportOpt:option,
    locationProblem:location,
    Reporter:reporter,
    ProblemDetail:problem,
    image:images,
    StartTime:startTime,
    status:status,
    check:check,
    StartDate: startDate,
    endDate:endDate,
    closingDate:closingDate
  }
  const onToggle = () => {
    setCheck(prev=>!prev)
    if(check)
      setStatus('Work in Progress')
    else
      setStatus('Done')
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
 
async function SaveHandler  ()  { 
  
  setClosingDate(new Date().toLocaleTimeString())
    const responce = await fetch(`https://it-support-39885-default-rtdb.firebaseio.com/info/${locations.state.no}.json` ,{
      method: 'PUT',
      body: JSON.stringify(info),
      header: {
        'Content-type':'application/json'
      }
    })
    const data = await responce.json()
    console.log(data)
 }
 console.log(info)
 function DeleteHandler (){
  fetch(`https://it-support-39885-default-rtdb.firebaseio.com/info/${locations.state.no}.json`, {
  method: 'DELETE'
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.error(error));
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
          <div>
           <div className='d-flex justify-content-start align-items-center'>
             <div style={{height: '50px', width:'50px', marginRight: '16px'}}>
               <img src={logo} alt="logo" className='w-100 h-100'/>
             </div>
             <span className='fs-3'>KTS Service Desk</span> 
           </div>
           <div className='d-flex flex-column'>
            <div><span>Case start at: </span><span className='fw-bold'>{info.StartTime}</span></div>
            <div><span>Case close at </span><span className='fw-bold'>{info.closingDate}</span></div>
           </div>
          </div>
           <div className='w-100 mt-3'>
             <p className='fs-6'>សូមស្វាគមន៍មកកាន់សេវាជំនួយបច្ចេកទេសរបស់ក្រុមហ៊ុន KTS</p>
           </div>
         </header>
         <span className='my-2'>Contact Us About</span>
         {/* <div className='w-100 sui'> */}
          {/* <span>ជំនួយផ្នែកបច្ចេកទេសទូទៅ (Customers IT Support)</span> */}
          <select defaultValue={option} onChange={(event)=>{setOption(event.target.value)}} className="form-select" aria-label="Default select example">
            <option value={option === "Customer IT Support" ? "Customer IT Support" : "Internal IT Support"}>{option === "Customer IT Support" ? "ជំនួយផ្នែកបច្ចេកទេសទូទៅ (Customers IT Support)" : "ជំនួយការបច្ចេកទេសសំរាប់ KTS"}</option>
            <option value={option === "Customer IT Support" ? "Internal IT Support" : "Customer IT Support"}>{option === "Customer IT Support" ? "ជំនួយការបច្ចេកទេសសំរាប់ KTS" : "ជំនួយផ្នែកបច្ចេកទេសទូទៅ (Customers IT Support)"}</option>
          </select>
         {/* </div> */}
         <span style={{marginTop: '30px'}}>What can we help you?</span>
         <div className='w-100 sui d-flex align-items-center justify-content-between'>
          <div>          
            <FontAwesomeIcon icon={faScrewdriverWrench} style={{marginRight:'10px'}}/>  
            <span className='fw-bold text-primary'>{
              option === "Customer IT Support" ? "ជំនួយផ្នែកបច្ចេកទេសទូទៅ (Customers IT Support)" : "ជំនួយការបច្ចេកទេសសំរាប់ KTS"
            }</span>
          </div>
            <div className="form-check form-switch">
              {
                check ? <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={onToggle} checked/>              
                 : <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={onToggle}/>
              }
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch If you finish this case</label>
            </div>
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
              <input type="text" value={location} onChange={LocationHandler} className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
          </div>
          <div>
            <span>បរិយាយបញ្ហា</span>
            <RichTextt onData={CallRichText} RichTextData={problem}/>
          </div>
          <div style={{marginTop: '30px'}}>
            <span>ភ្ជាប់ឯកសារបន្ថែម</span>
            <div className="d-flex flex-column justify-content-center">
              <Uploader onImage={ImageHandler}/>
            </div>            
          </div>
          <div className="d-flex mt-5">
            <button type="button" onClick={SaveHandler} className="btn btn-primary me-4">Save</button>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Delete
            </button>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Are you sure to delete this record?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <Link to='/report'>
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={DeleteHandler}>Delete</button>
                    </Link>                    
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