import React, { FC, useState, useEffect, ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

const App: FC = () => {
  let db: any;
  const request = window.indexedDB.open("DB");
  request.onsuccess = () => {
    db = request.result;
  };

  request.onupgradeneeded = (e: any) => {
    db = e.target.result;
    db.createObjectStore("employeeDB", {
      autoIncrement: true
    });
  };

  interface Details {
    name: string;
    address: any;
    location: string;
    mail: any;
    company: string;
    pic: any;
  }
  const [name, setname] = useState<string>("");
  const [address, setaddress] = useState<any>("");
  const [location, setlocation] = useState<string>("");
  const [mail, setmail] = useState<string>("");
  const [company, setcompany] = useState<string>("");
  const [pic, setpic] = useState<any>("");
  const [data, setdata] = useState<Details[]>([]);
  console.log(name);
  console.log(address);
  console.log(location);
  console.log(mail);
  console.log(company);
  console.log(pic);

  const addEmployeeData = (e: any): void => {
    e.preventDefault();

    const details = {
      name: name,
      address: address,
      location: location,
      mail: mail,
      company: company,
      pic: pic,
    };
    console.log(details);
    let transaction = db.transaction(["employeeDB"], "readwrite");
    let store = transaction.objectStore("employeeDB");
    console.log(store);
    store.add(details);
  };

  const imageChangeHandler = (e: any) => {
    const [file] = e.target.files;
    setpic(URL.createObjectURL(file));
  };

  async function displayData(e: any) {
    e.preventDefault();
    const request = await db
      .transaction("employeeDB")
      .objectStore("employeeDB")
      .getAll();

    request.onsuccess = async () => {
      const storedata = request.result;
      console.log(storedata);
      console.table(storedata);
      setdata(storedata);
    };
    request.onerror = (err: string) => {
      console.error(err);
    };
  }

  useEffect(() => {
    // displayData();
  }, []);

  // function deleteSelectedImage(e:any){
  //   const id = e.target.value;
  //   const tx = db.transaction('employeeDB','readwrite');
  //   const store = tx.objectStore('employeeDB');
  //   const result = store.get(id);
  //   store.delete(result);
  // }
  return (
    <>
      <div className="container">
        <div className="form">
          <form className="form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Name"
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Address"
                onChange={(e) => setaddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
                onChange={(e) => setmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Location"
                onChange={(e) => setlocation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Compnay Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Compnay Name"
                onChange={(e) => setcompany(e.target.value)}
              />
            </div>

            <div className="form-group emp-pic">
              <button>
                <input
                  type="file"
                  className="empPic"
                  id="pic"
                  onChange={imageChangeHandler}
                />
              </button>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={addEmployeeData}
            >
              Submit
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={displayData}
            >
              DisplayData
            </button>
          </form>
        </div>

        <div className="show" >
          {data.map((ele, index) => {
            return (
             
              <div style={{margin:'5px'}} >

              <Card  key={index}
              pic ={ele.pic} 
              name = {ele.name || 'Sandeep'} 
              address = {ele.address || 'Kondhwa'}
              location = {ele.address || "vimanNagar"}
              mail = {ele.address || 'sandeep@gmail.com'}
              mobile = {ele.address || '87456456446'}
              />
              </div>

            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
