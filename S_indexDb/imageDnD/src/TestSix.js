import React, { useState, useEffect } from "react";
import { openDB } from "idb";

function TestSix() {
  const [text, settext] = useState("");
  const [file, setfile] = useState("");
  const [arr, setarr] = useState([]);
  const [multipleDataArray, setmultipleDataArray] = useState([]);
  // const [image, setimage] = useState();
  let db;

  const request = indexedDB.open("imgDnD");
  request.onsuccess = function () {
    db = request.result;
    // console.log(db);
  };

  request.onupgradeneeded = (e) => {
    db = e.target.result;
    let dbStore = db.createObjectStore("ImageStore", {
      keyPath: "imageFile",
    });
  };

  const addData = (e) => {
    e.preventDefault();
    let data = {
      imagesName: text,
      imageFile: file,
    };
    let transaction = db.transaction(["ImageStore"], "readwrite");

    let dbStore = transaction.objectStore("ImageStore");

    console.log(dbStore);
    dbStore.add(data);
  };

  console.log(arr);

  // console.log(imgArr)
  // console.log(i);
  // console.log(imgArr[0])

  const showData = (e) => {
    // e.preventDefault();
    console.log(db);
    const request = db.transaction("ImageStore").objectStore("ImageStore").getAll();

    request.onsuccess = () => {
      const store = request.result;

      console.log(store);
      console.table(store);
      setarr(store);
    };

    request.onerror = (err) => {
      console.error(err);
    };
  };

  const DeleteAll = (e) => {
    e.preventDefault();
    console.log(db);
    const request = db
      .transaction("ImageStore", "readwrite")
      .objectStore("ImageStore")
      .clear();

    request.onsuccess = () => {
      console.log(`empty`);
    };
    request.onerror = (err) => {
      console.error(`error`);
    };
  };

  function deleteData(e) {
    console.log(e.target.value);
    const id = e.target.value;
    const tx = db.transaction("ImageStore", "readwrite");
    const store = tx.objectStore("ImageStore");
    const result = store.get(id);
    console.log(result);

    store.delete(id);
    console.log("deleted image having ID: ", id);

    showData();
  }

  let multipleSelect = (e) => {
    // console.log(e.target.value);
    var id = e.target.value;
    setmultipleDataArray([...multipleDataArray, id]);

    console.log(multipleDataArray);

    // showData();
  };

  const deleteSelectedData = () => {

    const tx = db.transaction("ImageStore", "readwrite");
    const store = tx.objectStore("ImageStore");

    for (let i = 0; i < multipleDataArray.length; i++) {
      // console.log(store);

      console.log(multipleDataArray[i]);

      const result = store.get(multipleDataArray[i]);

      console.log(result);

      store.delete(multipleDataArray[i]);
    }
    showData();
  };


  
  const setImageOnChange = (e) => {
    const [file] = e.target.files;
    setfile(URL.createObjectURL(file));
  };

  return (
    <>
      <div>
        <div
          style={{
            width: "200px ",
            height: "280px",
            padding: "5px",
            margin: "15px",
          }}
        >
          <form
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "5px",
              border: "2px dashed",
              color: "red",
              // fontSize: "0.9rem",
              // fontWeight: "500",
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              flexDirection: "column",
            }}
          >
            <input
              type="text"
              value={text}
              onChange={(e) => settext(e.target.value)}
              placeholder="Enter Image lable"
            ></input>

            <span
              style={{
                backgroundColor: "lightGrey",
                padding: "2%",
                marginTop: "20px",
              }}
            >
              <input
                style={{
                  backgroundColor: "lightGrey",
                  height: "40px",
                  width: "100%",
                  marginTop: "2px",
                }}
                type="file"
                accept="image/*"
                multiple
                onChange={setImageOnChange}
              ></input>
            </span>
            <br />
            <br />
            <button style={{ marginTop: "15px" }} onClick={addData}>
              Add data
            </button>
            <button type="button" onClick={showData}>
              Show Data{" "}
            </button>

            <button onClick={DeleteAll}>Clear All Data</button>
            <button onClick={deleteSelectedData}>Delete Selected Data</button>
          </form>
        </div>

        {/* SHOW DATA DIV */}

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItem: "flex-start",
            flexWrap: "wrap",
            position: "relative",
            height: "auto",
            marginTop: "20px",
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          <ul>
            {arr.map((ele, i) => {
              return (
                <>
                  <div key={i}>
                    <button
                      type="button"
                      value={ele.imageFile}
                      onClick={deleteData}
                    >
                      X
                    </button>
                    <span>{ele.imagesName}</span>
                    <li>
                      <input
                        type="checkbox"
                        value={ele.imageFile}
                        onClick={multipleSelect}
                      ></input>
                      <img
                        src={ele.imageFile}
                        alt="img"
                        width="100"
                        height="50"
                      />
                    </li>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TestSix;
