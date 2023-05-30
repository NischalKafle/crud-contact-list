import React from 'react'

function Edit() {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height: '100vh',textAlign:'center',}} >
    <div style={{border:'2px black solid',}}>
    <form >
  
  <div class="form-group">
      <label for="exampleInputEmail1" class="form-label">Name </label>
      <input type="text" style={{marginLeft:'500px',marginRight:'500px',width:'400px'}} name="name" class="form-control" aria-describedby="emailHelp" placeholder="Enter new name"/>

    </div>
  <div class="form-group">
      <label for="exampleInputEmail1" class="form-label">Email </label>
      <input type="email" style={{marginLeft:'500px',marginRight:'500px',width:'400px'}} name="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter new email"/>

    </div>
   
    <button type="submit" class="btn btn-primary" style={{margin:'5px'}}>Edit</button>
  </form>
  </div>
  </div>
  )
}

export default Edit