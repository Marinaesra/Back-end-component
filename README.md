# Back-end-component

Buenas Familia

- Aqui os presentamos nuestro pequeño gran sueño
  Es un proyecto creado desde el corazón con todo nuestro cariño,esperamos que os guste tanto como a nosotros, que percibais el cariño con el que lo hemos creado y que seais participes de nuestro sueño.
  En principio es una pagina con informacion sobre suplementos para el deporte, en el cual la idea es crecer y que termine siendo una tienda en la cual se pueda obtener esos productos, por lo cual aun esta en construccion y el carrito es una mejora a hacer.

-Esencia Activa se basa en lo esencial, lo puro y lo vital.

- Hemos usado para este proyecto las siguientes tencologias: React- Router, React-Redux para nuestra parte del front,
  en la parte del back hemos usado MongoDB y node.js.
  Primero tenemos que hacer un npm install ya que lo entregamos sin node_modules, por lo que ocupa a la hora de comprimir

- Para ver este pequeño proyecto, teneis que instalar:
  -Front:
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-redux": "^9.2.0",
  "react-router": "^7.6.3",
  "redux": "^5.0.1",
  "redux-persist": "^6.0.0",
  "router": "^2.2.0"

  -Back:
  "cors": "^2.8.5",
  "dotenv": "^17.1.0",
  "express": "^5.1.0",
  "mongoose": "^8.16.2",
  "nodemon": "^3.1.10",
  "bcrypt": "^6.0.0",
  "jsonwebtoken": "^9.0.2",
  "redux-persist": "^6.0.0"

- Adjuntamos un Esquema del proyecto como imagen png, tanto en la carpeta del back como en la del front

- Tiene la pagina inicial, en la cual puedes entrar a verla sin estar registrado, la pagina de contacto y la pagina del listado, que es lo que se solicita.
Despues encontramos una pagina donde podemos modificar el perfil del usuario, y una donde ver los detalles del producto, y la ultima que es con proyecciones a futuro que se cree el carrito y con este una pasarela de pago.

- Cuando creamos el usuario, hay que actualizar y volver a entrar desde el acceso, la foto se modifica por URL y no desde una carpeta, ya que es como hemos aprendido.
En el perfil del usuario encontramos la modificacion del perfil, eliminacion del usuario, la opcion de volver a la pagina donde estan todos los productos y la de cerrar la sesion.

-EndPoints User:
GET/:id - Para traer todos los usuarios de la base de datos al front
POST/ - Para hacer el logeo del usuario
POST/register - Para crear un nuevo usuario
POST/modify/:id - Para modificar la informacion del perfil del usuario
DELETE/delete/:id - Para eliminar el usuario

-EndPoints Products:
GET/products - Para traer todos los productos de la base de datos al front
GET/details/:id - Para ver los detalles de los productos

- Version: 2025
- Autora: Marina Escaño Rando
- GitHub: github.com/Marinaesra?tab=repositories.