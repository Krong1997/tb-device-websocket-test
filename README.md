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

3. There are two ways as follow:

    **method A**

      Create `deviceList.json` in device folder. Add your device array as follow.
      ```json
      [
        {
          "name": "name",
          "id": "id"
        },
        {
          "name": "name2",
          "id": "id2"
        }
      ]
      ```

      **method B**
      Use https://github.com/Krong1997/Set-device-to-TB to generate device list json file, and copy that to `device` folder.

4. run test 
    ```
    node index.js
    ```