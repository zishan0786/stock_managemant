import React, { useState, useRef } from "react";
import axios from "axios";

export default function Vendor() {
  //  vendor add process
  const [venInputVal, setVenInputVal] = useState({
    shopc: "",
    ownnm: "",
    shopnm: "",
    shopcon: "",
    shopem: "",
    shopadd: "",
  });

  const vendorDetails = (e) => {
    setVenInputVal({ ...venInputVal, [e.target.name]: e.target.value });
  };

  const addVendor = (event) => {
    event.preventDefault();
    axios
      .postForm("http://localhost/API/vendor_process.php", venInputVal)
      .then((res) => {
        console.log(res.data);
        fetchVendors();
      });
  };

  // product fetch process
  const [venTable, setVenTable] = useState([]);

  const fetchVendors = () => {
    axios.get("http://localhost/API/vendor_fetch_process.php").then((res) => {
      setVenTable(res.data);
      console.log(venTable);
    });
  };

  // update process
  const [isEditingven, setIsEditingven] = useState("false");

  const isUpdate = (index, e) => {
    setIsEditingven(index);
  };

  const shopCode = useRef();
  const shopName = useRef();
  const ownerName = useRef();
  const shopMob = useRef();
  const shopEmail = useRef();
  const shopAddr = useRef();

  const updateVendors = async (id, event) => {
    const updshopc = shopCode.current.value;
    const updshopnm = shopName.current.value;
    const updownernm = ownerName.current.value;
    const updshopmob = shopMob.current.value;
    const updshopem = shopEmail.current.value;
    const updshopadd = shopAddr.current.value;
    axios
      .postForm("http://localhost/API/update_vendor_process.php", {
        id: id,
        updshopc: updshopc,
        updshopnm: updshopnm,
        updownernm: updownernm,
        updshopmob: updshopmob,
        updshopem: updshopem,
        updshopadd: updshopadd,
      })
      .then((res) => {
        console.log(res.data.msg);
        fetchVendors();
        setIsEditingven("false");
      });
  };

  // delete process
  const deleteVenors = (id, event) => {
    if (window.confirm("are you sure?")) {
      axios
        .postForm("http://localhost/API/delete_vendor.php", { id: id })
        .then((res) => {
          console.log(res.data);
          fetchVendors();
        });
    }
  };

  return (
    <>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label>Shop Code &nbsp;&nbsp;&nbsp;</label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            name="shopc"
            placeholder="enter shop code"
            onChange={vendorDetails}
          />
        </div>
        <div className="col-auto">
          <label>Owner Name &nbsp;&nbsp;&nbsp;</label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            name="ownnm"
            placeholder="enter owner name"
            onChange={vendorDetails}
          />
        </div>
        <div className="col-auto">
          <label>Shop Name &nbsp;&nbsp;&nbsp;</label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            name="shopnm"
            placeholder="enter shop name "
            onChange={vendorDetails}
          />
        </div>
        <div className="col-auto">
          <label>Shop Contact &nbsp;&nbsp;&nbsp;</label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            name="shopcon"
            placeholder="enter shop contact "
            onChange={vendorDetails}
          />
        </div>
        <div className="col-auto">
          <label>Shop Email &nbsp;&nbsp;&nbsp;</label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            name="shopem"
            placeholder="enter shop email "
            onChange={vendorDetails}
          />
        </div>
        <div className="col-auto">
          <label>Shop Address &nbsp;&nbsp;&nbsp;</label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            name="shopadd"
            placeholder="enter shop address "
            onChange={vendorDetails}
          />
        </div>
        <div className="col-auto">
          <button
            type="button"
            id="addProduct"
            className="btn btn-primary mb-2"
            onClick={addVendor}
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
            <th scope="col">Shop code</th>
            <th scope="col">Shop Name</th>
            <th scope="col">Owner Name</th>
            <th scope="col">Shop Contact</th>
            <th scope="col">Shop Email</th>
            <th scope="col">Shop Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {venTable.map((data, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  {isEditingven === index ? (
                    <input ref={shopCode} defaultValue={data.shop_code} />
                  ) : (
                    data.shop_code
                  )}
                </td>
                <td>
                  {isEditingven === index ? (
                    <input ref={shopName} defaultValue={data.shop_name} />
                  ) : (
                    data.shop_name
                  )}
                </td>
                <td>
                  {isEditingven === index ? (
                    <input ref={ownerName} defaultValue={data.owner_name} />
                  ) : (
                    data.owner_name
                  )}
                </td>
                <td>
                  {isEditingven === index ? (
                    <input ref={shopMob} defaultValue={data.shop_contact} />
                  ) : (
                    data.shop_contact
                  )}
                </td>
                <td>
                  {isEditingven === index ? (
                    <input ref={shopEmail} defaultValue={data.shop_email} />
                  ) : (
                    data.shop_email
                  )}
                </td>
                <td>
                  {isEditingven === index ? (
                    <input ref={shopAddr} defaultValue={data.shop_address} />
                  ) : (
                    data.shop_address
                  )}
                </td>

                <td>
                  {isEditingven === index ? (
                    <button
                      className="btn btn-success"
                      onClick={() => updateVendors(data.id)}
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
                        onClick={() => deleteVenors(data.id)}
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
