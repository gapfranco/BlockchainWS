# Blockchain Web service

Blockchain has the potential to change the way that the world approaches data. Develop Blockchain skills by understanding the data model behind Blockchain by developing your own simplified private blockchain.

This project implements a REST API to a simple web service that creates and retrieves blocks in a block chain.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Dependencies

1. Node.js
2. Express.js
3. levelDB

### Setup

1. Install Node and NPM or yarn
2. Clone the project - `git clone https://github.com/gapfranco/BlockchainWS`
3. Install dependencies - `npm install` or `yarn`

### Running the project

- Change to the project folder
- Call the entry point:

```
node index.js
```

It listens on port 8000 by default.

### API endpoints

With the server running, we can call the endpoints:

- **GET http://localhost:8000/**

  Returns API name and version

  ```
  {
      "API": "BlockchainWS",
      "version: 1
  }
  ```

- **GET http://localhost:8000/block/n**

  Returns the block with height n

  ```
  {
  "hash": "9d774d3229980d8145612666925f099d065dfad7b8193e69647cc9f01a0ef2f9",
  "height": 1,
  "body": "New block text",
  "time": "1542117373",
  "previousBlockHash": "0078bb1990ecc52dcb76ca3d458a6088d8cc1fa0f6e6f6f0da85c99e024317f0"
  }
  ```

  If a wrong number is informed, return:

  ```
  {
    "error": "block not found"
    }

  ```

- **POST http://localhost:8000/block**

  With payload:

  ```
  {
      "body": "New block text"
  }
  ```

  Create the block and returns JSON representation:

  ```
  {
  "hash": "9d774d3229980d8145612666925f099d065dfad7b8193e69647cc9f01a0ef2f9",
  "height": 1,
  "body": "New block text",
  "time": "1542117373",
  "previousBlockHash": "0078bb1990ecc52dcb76ca3d458a6088d8cc1fa0f6e6f6f0da85c99e024317f0"
  }
  ```

  If the payload is empty:

  ```
  {
  "error": "invalid block body"
  }
  ```

- **GET http://localhost:8000/block/height**

  Returns the blockchain height.

  ```
  {
  "height": 5
  }
  ```

### Notes

- The level blocks database is created automatically on first use. Will create a folder _chaindata_
  at the project folder level.

- To reset the database, drop the _chaindata_ folder and restart the node service.
