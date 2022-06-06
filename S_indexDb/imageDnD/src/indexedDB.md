
# IndexedDB : 
IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files.
IndexedDB lets you store and retrieve objects that are indexed with a key .

[documentation link](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).
> Note:
  - before starting indexedDB read concept of  ***async await*** 
  - clear concept local scope , global scope, block and funtional scope of variable/function

 ## Storage limits : 
limit of the IndexedDB database will be the user's disk space and operating system.

# IndexedDB Structure:
- database : 
 A database contains one or more object stores but you’ll create one database per web application.

 - Object stores:
 An object store is a bucket that you can use to store the data and associated indexes.

An object store contains the records stored as key-value pairs.


## Transaction in indexedDB
 - A transaction in database context is an operation or multiple operations that must all run successfully, otherwise none of them will be run at all.
 - To understand why transactions are necessary, the most common example is transferring money between accounts in a bank database. A transfer operation includes both remove money from one account and add money to another. If the add money operation fails for any reason, you also need the remove money operation to fail as well


## Index:
 use of an index in a database is on the primary key which is something unique (like an ID number) about the item stored in your database.

## Using a key generator
Setting up an autoIncrement flag when creating the object store would enable the key generator for that object store.
With the key generator, the key would be generated automatically as you add the value to the object store. **The current number of a key generator is always set to 1 when the object store for that key generator is first created. Basically the newly auto-generated key is increased by 1 based on the previous key. The current number for a key generator never decreases**

```js
var objStore = db.createObjectStore("names", { autoIncrement : true });  // this will increase the key by one but it never decreases even if you delete any data from table 
```
## onupgrandeneeded Event
- this event fires when the database version number is incrementing or new database is being created.

```js
request.onupgradeneeded = function () {
  const db = request.result;
  const store = db.createObjectStore("cars", { keyPath: "id" });
  store.createIndex("cars_colour", ["colour"], { unique: false });

};
```
**Break This Code Line By Line**
- We are inside the onupgradeneeded event so we can assume the database exists, otherwise the onerror function would have triggered
- keyPath is the name of the field on the object that IndexedDB will use to identify it.
-we can also add the  **{ autoincrement: true }** to have it set to a unique id manually that you don't need to set yourself. The first item you insert would have an id of 0, then second item and id of 1, and so on.
-Adding indexes allows us to search inside of our object store by specific terms aside from just the value defined as the keyPath. This index will allow us to search for car objects by their colour property

## Check if the IndexedDB is supported

```js
if (!window.indexedDB) {
    console.log(`Your browser doesn't support IndexedDB`);
    return;
}
```


 ## Opening Database :

 ```js 
 let openRequest = indexedDB.open(name, version);
```

 **name** – a string, the database name.
 **version**– a positive integer version, by default 1

  The second parameter to the open method is the version of the database. The version of the database determines the database schema — the object stores in the database and their structure. If the database doesn't already exist, it is created by the open operation, then an onupgradeneeded event is triggered and you create the database schema in the handler for this event. If the database does exist but you are specifying an upgraded version number, an onupgradeneeded event is triggered straight away, allowing you to provide an updated schema in its handler.

``` js
 var request = window.indexedDB.open("DatabaseName", 3):

openRequest.onupgradeneeded = function() {
  // triggers if the client had no database
};

openRequest.onerror = function() {
  console.error("Error", openRequest.error);
};

openRequest.onsuccess = function() {
  let db = openRequest.result;
  // continue working with database using db object
};

```

# Creating an IndexedDB to store data:
 
 ```js

 let db;  // globally declear
 var request = indexedDB.open(databaseName,version);

     
      request.onsuccess = e =>{
         //  handling success
         db = request.result;
      }

 request.onerror = e =>{
    //  handling error

 }

 request.onupgradeneeded = e =>{
     db = e.target.result;
     let store = db.createdObjectStore('storeName', {
         keyPath:'pass key or id which work as primary key while retriving or deleting data'
     })
 }
 ```

 
 # adding data into store:
  - **add()** :   function requires that no object already be in the database with the same key. If you're trying to modify an existing entry, or you don't care if one exists already, you can use the  function
- **put()** : function which requires or dosen't matter that object in the database with same key present
 

 ```js
//  function to add data into database table

const addData =(e)=>{
    e.preventDefault()  // to prevent default behavior of button in form
    //  creating object to store data 
    let dataObject = {
        key: value,
        key:value
    }

    // use transaction to target object store table

    let transaction = db.transaction(['storeName/tableName'], 'readwrite/readonly')  // second parameter defined whether table readonly or readwrite;
    let store = transaction.objectStore('storeName');
    store.add(DataObject);


}
 ```

 # Retireved Data from DB

 - **get()** :   retrieving specific records from an object store.
 - **getAll()** : returns  object containing all objects in the object store matching the specified parameter or all objects in the store if no parameters are given <br>
    ***syntax :- ***
    - getAll()
    - getAll(query)
    - getAll(query, count)

 ```js
const showData =e=>{
    const request = db.transaction('storeName').getAll();
    request.onsuccess =()=>{
        const store = request.result;
        console.log(store) ; // check data getting in console in array of object
        console.table(store); // cross checked data getting in table form

    //  create one useState with empty [] to store getting data in that  empty array we can use that array for rendering 
 
    setArray(store);     //  const [array, setArray] = useState([]);
    }

    //  error handler
    request.onerror = err=>{
        console.log(err)
    }
}
 ```
# Deleting data from DB
we can delete data from DB in  2 way 
- delete data one by one 
- delete all data at once 

***Delete data One by one***
- delete()

```js
var request = db.transaction(["storeName"], "readwrite")
                .objectStore("storeName")
                .delete("uniqueID");
request.onsuccess = event => {
  // write messaeg you want to show once data delete
};
```

**Deleting All Data at once**
 - clear()

 ```js
   const DeleteAll = (e) => {
   
    const request = db
      .transaction("storeName", "readwrite")
      .objectStore("StoreName")
      .clear();

    request.onsuccess = () => {
      console.log(`empty`);
    };
    request.onerror = (err) => {
      console.error(`error`);
    };
  };

 ```

# Common Error I Faced while working with indexedDB
1. 
  - Cannot read property 'transaction' of undefined IndexedDB:
  - Uncaught TypeError: Cannot read property 'transaction' of null with an indexeddb
 ```js 
db.transaction('storeName')  //you are not getting db value inside the function 

  ``` 
### solution link:-
[GitHub page Link ](https://stackoverflow.com/questions/53918546/cannot-read-property-transaction-of-undefined-indexeddb)  <br>
 [GitHub Pages Link](https://stackoverflow.com/questions/24256202/uncaught-typeerror-cannot-read-property-transaction-of-null-with-an-indexeddb).

2. 
- "TypeError: db is null" when starting a transaction in indexedDB
-  Cannot read property 'db' of undefined IndexedDB; <br>
 **solutions/reason**
    - this occure because may be your db is not created  <br>
     - **variable scope** : may be **db** variable declear in block scope or functional scope  
 [GitHub Pages Link](https://stackoverflow.com/questions/12498412/typeerror-db-is-null-when-starting-a-transaction-in-indexeddb).
