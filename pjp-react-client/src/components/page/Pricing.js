import React, { Component } from 'react'
import '../../components/Page_Css/pricing.css';
import palpay from '../../picture/palpay.jpg'
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';



 class Pricing extends Component {

    render() {
        return (
            <div className="maincontainer">
            <section>
               <div class="container py-5">
                 
                 <header class="text-center mb-5 text-white">
                   <div class="row">
                     <div class="col-lg-8 mx-auto">
                       {/* <h1>Subscribe ... be one of our family</h1> */}
                       
                     </div>
                   </div>
                 </header>
                
                 <div class="row text-center align-items-end">
                  
                   <div class="col-lg-4 mb-5 mb-lg-0">
                     <div class="bg-white p-5 rounded-lg shadow">
                       <h1 class="h6 text-uppercase font-weight-bold mb-4">Basic</h1>
                       <h2 class="h1 font-weight-bold text-primary">$10<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                       <div class="custom-separator my-4 mx-auto bg-primary"></div>
                       <ul class="list-unstyled my-5 text-small text-left">
                         <li class="mb-3">
                           <i class="fa fa-check mr-2 text-primary"></i> Post jobs (just 5 post)</li>
                         <li class="mb-3">
                           <i class="fa fa-check mr-2 text-primary"></i>Your posts appear on the search page normally</li>
                         <li class="mb-3">
                           <i class="fa fa-check mr-2 text-primary"></i> Job seekers can contact with you</li>
                         <li class="mb-3 text-muted">
                           <i class="fa fa-times mr-2"></i>
                           <del>Your posts appear on the search page in the Top</del>
                         </li>
                         <li class="mb-3 text-muted">
                           <i class="fa fa-times mr-2"></i>
                           <del>Post jobs ( 40 post)</del>
                         </li>
                         <li class="mb-3 text-muted">
                           <i class="fa fa-times mr-2"></i>
                           <del>Searching for highly experienced job seekers</del>
                         </li>
                       </ul>
                       <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                     </div>
                   </div>
                  
                   <div class="col-lg-4 mb-5 mb-lg-0">
                     <div class="bg-white p-5 rounded-lg shadow">
                       <h1 class="h6 text-uppercase font-weight-bold mb-4">Pro</h1>
                       <h2 class="h1 font-weight-bold text-primary">$30<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                       <div class="custom-separator my-4 mx-auto bg-primary"></div>
                       <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                         <li class="mb-3">
                           <i class="fa fa-check mr-2 text-primary"></i> Post Jobs</li>
                         <li class="mb-3">
                           <i class="fa fa-check mr-2 text-primary"></i> Your posts appear on the search page normally</li>
                         <li class="mb-3">
                           <i class="fa fa-check mr-2 text-primary"></i> Job seekers can contact with you</li>
                         <li class="mb-3">
                           <i class="fa fa-check mr-2 text-primary"></i> Your posts appear on the search page in the Top</li>
                         <li class="mb-3">
                           <i class="fa fa-check mr-2 text-primary"></i>Post Jobs(40 posts)</li>
                         <li class="mb-3 text-muted">
                           <i class="fa fa-times mr-2"></i>
                           
                           <del>Searching for highly experienced job seekers</del>
                         </li>
                       </ul>
                       <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                     </div>
                   </div>
                  
                   <div class="col-lg-4">
                     <div class="bg-white p-5 rounded-lg shadow">
                       <h1 class="h6 text-uppercase font-weight-bold mb-4">Enterprise</h1>
                       <h2 class="h1 font-weight-bold text-primary ">$49<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                       <div class="custom-separator my-4 mx-auto bg-primary"></div>
                       <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                         <li class="mb-3">
                           <i class="fa fa-check mr-2 text-primary"></i> Post jobs</li>
                         <li class="mb-3">
                           <i class="fa fa-check mr-2 text-primary"></i> Your posts appear on the search page normally</li>
                         <li class="mb-3">
                           <i class="fa fa-check mr-2 text-primary"></i>Job seekers can contact with you</li>
                         <li class="mb-3">
                           <i class="fa fa-check mr-2 text-primary"></i>Your posts appear on the search page in the Top</li>
                         <li class="mb-3">
                           <i class="fa fa-check mr-2 text-primary "></i> Post jobs..    
                           <i class="fas fa-infinity"></i>
                          
                              ..Posts!
                           </li>
                         <li class="mb-3">
                           <i class="fa fa-check mr-2 text-primary"></i> Searching for highly experienced job seekers</li>
                          
                       </ul>
                       <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                     </div>
                   </div>
                  
                 </div>
               </div>
             </section>







    
           </div>
        )
    }
}

export default Pricing; 
