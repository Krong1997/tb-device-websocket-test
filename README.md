## How to use

1. install package
```
npm i
```

2. create .env file as follow
```
JWTtoken=${TB_JWT_TOKEN}
HOST=${SERVER_HOST}
PORT=${SERVER_PORT}
```

3. Create `deviceList.js` file. Add your device array as follow.
```js
const deviceList = [
  {
    name: "name",
    id: "id"
  },
  {
    name: "name2",
    id: "id2"
  }
  ...
]

module.exports = deviceList;
```

4. run test 
```
node index.js
```