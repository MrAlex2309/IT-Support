
// import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import './home.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logoKts.png'
function Home() {
  return (
    <div className="container-fluid p-0 h-40 bg-light">
     <div className="bg-primary"  style={{height: "352px"}}>
      <span className="fs-4 fw-bolder text-light m-1">KTS Support Center</span>
     </div>
     <div className="d-flex justify-content-md-center">
      <div className="bg-white px-5 py-4" style={{width: '1000px', height:"100vh"}}>
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
          <div className='position-relative' style={{margin: "28px 0px 8px"}}>
            <h2 className='contact'>
              <label className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faEnvelope} style={{marginRight:'8px'}}/>
                <span className=''>Contact Us About</span>
              </label>
            </h2>
            <ul className='uli list-group slide-in-up'>
              <li style={{marginBottom:'32px'}} className='list-group-item rounded-3'>
                <Link to='/issueCus' href="" className='text-decoration-none'>
                  <div className="bg-light d-flex align-items-center justify-content-md-between align-items-center">
                    <div className='d-flex w-100 l1' style={{padding: '24px'}}>
                      <div className='l2'>
                        <div className='text'>ជំនួយផ្នែកបច្ចេកទេសទូទៅ (Customers IT Support)</div>
                        <div className='' style={{marginTop: "4px"}}> 
                          <span className='text-dark'>
                          ជំនួយការបច្ចេកទេសសំរាប់អតិថិជន
                          </span> 
                        </div>
                      </div>
                    </div>
                    <div style={{marginRight:'8px'}}>
                      <FontAwesomeIcon icon={faCircleArrowRight} className='fs-5'/>
                    </div>
                  </div>
                </Link>
              </li>
              <li style={{marginBottom:'32px'}} className='list-group-item rounded-3'>
                <Link to='/issueInter' href="#" className='text-decoration-none'>
                  <div className="bg-light d-flex align-items-center justify-content-md-between align-items-center">
                    <div className='d-flex w-100 l1' style={{padding: '24px'}}>
                      <div className='l2'>
                        <div className='text'>ជំនួយបច្ចេកទេសសំរាប់ KTS (Internal IT Support)</div>
                        <div className='' style={{marginTop: "4px"}}> 
                          <span className='text-dark'>
                          ជំនួយការបច្ចេកទេសសំរាប់ KTS 
                          </span> 
                        </div>
                      </div>
                    </div>
                    <div style={{marginRight:'8px'}}>
                      <FontAwesomeIcon icon={faCircleArrowRight} className='fs-5'/>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>        
     </div>
    </div>
  );
}
export default Home;

