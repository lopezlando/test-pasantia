Lo único que tenés que mirar es el archivo src/services/user.service.js, ahí dentro hay un comentario explicando el problema a resolver y sólamente debés modificar ese archivo para solucionarlo.

`npm run dev` arranca la app con `nodemon`, el cual reinicializa la app cada vez que modificas el codigo. Para arrancar sin nodemon, `npm start`.

El archivo `users.postman_collection.json` contiene las dos requests para importarlas a postman y utilizar el back. podés usar este método o el que prefieras para correr las funciones.

Register está en `http://localhost:3000/api/users/register`

Authenticate está en `http://localhost:3000/api/users/authenticate`
