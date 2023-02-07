import React  from 'react';

function Product(props) {
  

  return (

<>
<div className="row g-3 align-items-center">
  <div className="col-auto">
  <label >Product code &nbsp;&nbsp;&nbsp;</label>
  </div>
  <div className="col-auto">
  <input type="text" className="form-control" name="pc" placeholder="enter product code" onChange={props.AllPrAdvalue}/>
  </div>
  <div className="col-auto">
  <label>Product Name &nbsp;&nbsp;&nbsp;</label>
  </div>
  <div className="col-auto">
  <input type="text" className="form-control" name="pn" placeholder="enter product name" onChange={props.AllPrAdvalue}/>
  </div>
  <div className="col-auto">
  <label >Product price &nbsp;&nbsp;&nbsp;</label>
    
  </div>
  <div className="col-auto">
  <input type="text" className="form-control" name="pr" placeholder="enter product price " onChange={props.AllPrAdvalue}/>
    
  </div>
  <div className="col-auto">
  <button type="button" id="addProduct" className="btn btn-primary mb-2" onClick={props.AddProduct}> Add </button>
  </div>
</div>

<div id="Producttable" className='container'></div>


    
  
</>

  )
}

export default Product
