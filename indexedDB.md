## What is IndexedDB
IndexedDB is a transactional database system, like an SQL-based RDBMS. However, unlike SQL-based RDBMSes, which use fixed-column tables, IndexedDB is a JavaScript-based object-oriented database. IndexedDB lets you store and retrieve objects that are indexed with a key; any objects supported by the structured clone algorithm can be stored. You need to specify the database schema, open a connection to your database, and then retrieve and update data within a series of transactions.

## Synchronous and asynchronous
Operations performed using IndexedDB are done asynchronously, so as not to block applications.

## Storage limits and eviction criteria
There are a number of web technologies that store data of one kind or another on the client side (i.e. on your local disk). IndexedDB is most commonly talked about. The process by which the browser works out how much space to allocate to web data storage and what to delete when that limit is reached is not simple, and differs between browsers. Browser storage limits and eviction criteria attempts to explain how this works, at least in the case of Firefox.

## Interfaces
To get access to a database, call open() on the indexedDB attribute of a window object. This method returns an IDBRequest object; asynchronous operations communicate to the calling application by firing events on IDBRequest objects.

## Interfaces
To get access to a database, call open() on the indexedDB attribute of a window object. This method returns an IDBRequest object; asynchronous operations communicate to the calling application by firing events on IDBRequest objects.

