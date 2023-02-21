import React, { useState, useRef,useEffect } from "react";
import axios from "axios";

function Product() {
  // add product process start here
  const [PrinputValue, setPrinputValue] = useState({ pc: "", pn: "", pr: "" });

  const ProductDetails = (e) => {
    setPrinputValue({ ...PrinputValue, [e.target.name]: e.target.value });
  };

  const addProduct = async (event) => {
    event.preventDefault();

    axios
      .postForm("http://localhost/API/product_process.php", PrinputValue)
      .then((res) => {
        console.log(res.data);
      });
  };

  // product fetch process
  const [proTable, setProTable] = useState([]);
  useEffect(() => {
    const fetchProduct = () => {
      axios.get("http://localhost/API/product_fetch_process.php").then((res) => {
        setProTable(res.data);
      });
    };
   fetchProduct();
  },[proTable]);
  

  // update process
  const [isEditing, setIsEditing] = useState("false");

  const isUpdate = (index, e) => {
    setIsEditing(index);
  };

  const pc = useRef();
  const pn = useRef();
  const pr = useRef();

  const updateProduct = async (id, event) => {
    const updpc = pc.current.value;
    const updpn = pn.current.value;
    const updpr = pr.current.value;
    axios
      .postForm("http://localhost/API/update_process.php", {
        id: id,
        updpc: updpc,
        updpn: updpn,
        updpr: updpr,
      })
      .then((res) => {
        console.log(res.data.msg);
        setIsEditing("false");
      });
  };

  // delete process
  const deleteProduct = (id, event) => {
    if (window.confirm("are you sure?")) {
      axios
        .postForm("http://localhost/API/delete_process.php", { id: id })
        .then((res) => {
          console.log(res.data);
      
        });
    }
  };

  return (
    <>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label>Product code &nbsp;&nbsp;&nbsp;</label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            name="pc"
            placeholder="enter product code"
            onChange={ProductDetails}
          />
        </div>
        <div className="col-auto">
          <label>Product Name &nbsp;&nbsp;&nbsp;</label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            name="pn"
            placeholder="enter product name"
            onChange={ProductDetails}
          />
        </div>
        <div className="col-auto">
          <label>Product price &nbsp;&nbsp;&nbsp;</label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            name="pr"
            placeholder="enter product price "
            onChange={ProductDetails}
          />
        </div>
        <div className="col-auto">
          <button
            type="button"
            id="addProduct"
            className="btn btn-primary mb-2"
            onClick={addProduct}
          >
            {" "}
            Add{" "}
          </button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Product code</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {proTable.map((data, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  {isEditing === index ? (
                    <input ref={pc} defaultValue={data.product_code} />
                  ) : (
                    data.product_code
                  )}
                </td>
                <td>
                  {isEditing === index ? (
                    <input ref={pn} defaultValue={data.product_name} />
                  ) : (
                    data.product_name
                  )}
                </td>
                <td>
                  {isEditing === index ? (
                    <input ref={pr} defaultValue={data.product_price} />
                  ) : (
                    data.product_price
                  )}
                </td>

                <td>
                  {isEditing === index ? (
                    <button
                      className="btn btn-success"
                      onClick={() => updateProduct(data.id)}
                    >
                      Save Changes
                    </button>
                  ) : (
                    <>
                      <button
                        className="btn btn-dark"
                        onClick={() => isUpdate(index)}
                      >
                        UPDATE
                      </button>{" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteProduct(data.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Product;
