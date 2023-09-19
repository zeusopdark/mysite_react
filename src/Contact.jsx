import React from 'react'

function Contact() {
   
  const[data,setData]=React.useState({
    userName:"",
    phoneNumber:"",
    email:"",
    query:"",
  })
  const setValue=(event)=>{
     const{name,value}=event.target
     setData(data=>({
      ...data,
      [name]:value
     }))
  }
  const Submitted=(event)=>{
    event.preventDefault();
    console.log(`form submitted ${data}`);
  }

  return (
    <>
     <div className='my-5'>
      <h1 className='text-center'> Contact Us</h1>
   </div>
   <div className='container contact_div'>
    <div className='row'>
        <div className='col-md-6 col-10 mx-auto'>

           <form onSubmit={Submitted}>
            
              <div class="mb-3">
                <label for="username" class="form-label">Enter Your Name</label>
                <input type="text" class="form-control" id="username" name="userName" value={data.userName} onChange={setValue}/>
              </div>
              <div class="mb-3">
                <label for="phonenumber" class="form-label"> Phone Number</label>
                <input type="number" class="form-control" id="phonenumber" name="phoneNumber" value={data.phoneNumber} onChange={setValue}/>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email} onChange={setValue}/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Your Query </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="query" value={data.query} onChange={setValue}></textarea>
              </div>
                        <div class="col-12">
              <button class="btn btn-outline-success" type="submit">Submit form</button>
            </div>
            </form>
                  
        </div>
    </div>
   </div>
    </>
  
  )
}

export default Contact;