This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Correr el proyecto.

En la raiz del proyecto correr:

### `npm install`

Instala todas las dependencias necesarias para correr el proyecto.

### `npm start`
Corre la aplicación en modo desarrollo.<br />
Abrir [http://localhost:3000](http://localhost:3000) para verla en el navegador.

### `npm run test`

Corre todos los test de prueba

### `npm run storybook`

Corre los test UI<br />
Abrir [http://localhost:6006](http://localhost:6006) para verlos en el navegador.


### `Informacion de la app`

## Tecnologías/Frameworks/Librerias utilizad@s:

- React.js con hooks.
- Redux: https://redux.js.org/
  Lo utilicé para persitir algunos datos ya que es solo front-end.
  En caso de que en algun momento se integre con backend se puede utilizar para cachear datos que se usen durante la sesión y así evitar el rellamado a APIS. 
  Hace muy escalable la aplicación, ya que en apps que son demasiados complejas aveces sin Redux se complica el manejo de estados y datos de los componentes.
- Sass: https://sass-lang.com/.
- LocalStorage: lo utilice para el manejo de sesion de usuarios. Login y logout. 
- React Router: https://reactrouter.com/.
- React Moment: libreria para el manejo de fechas y horas. https://www.npmjs.com/package/react-moment.
- Material UI: para algunos componentes como inputs, datepicker, etc. https://material-ui.com/.
- FontAwesome: para algunos iconos. https://fontawesome.com/how-to-use/on-the-web/using-with/react
- Tests: utilicé Jest y Enzyme. https://jestjs.io/en/, https://enzymejs.github.io/enzyme/.
- TestUI: storybook. Utilidad muy poderosa para probar diferentes comportamientos en relacion al front end de componentes separados. mas info: https://storybook.js.org/.
- Para la api de clima utilicé la recomendada: https://www.weatherbit.io/api.
- Axios para realizar peticiones http. https://www.npmjs.com/package/react-axios.

### `Uso de la aplicación`

## Inicio Sesión

- Administrador
Usuario: Santander
Contraseña: admin

- Usuario
Usuario: Ivan
Contraseña: user

### `Historias de usuario desarrolladas`

## Como admin quiero saber cuantas cajas de birra tengo que comprar para poder aprovisionar la meetup.
Me logeo como administrador y en la pantalla home me va a aparecer un botón "Crear MeetUp". Una vez dentro puedo elegir la fecha y la cantidad de invitados. A su vez me va a mostrar el pronóstico del tiempo de la fecha elegida y cuantos cajones de birra voy a necesitar.

## Como admin y usuario quiero conocer la temperatura de la meetup para saber si va a hacer calor o no.
Me logeo tanto como admin o como usuario y en la pantalla principal voy a ver el listado de los próximos eventos. Selecciono alguno y vamos a poder ver el pronóstico del tiempo actualizado.

## Como admin quiero armar una meetup para poder invitar a otras personas.
No puedo armar la meetup ya que consideré que debía integrarse con el backend, pero como muestra está mockeado el botón. 
Tambien esta mockeada la parte de invitar otras personas. Se pueden agregar a la lista. No hay ningun tipo de validación de repetidos ya que es para mostrar como se van añadiendo varios usuarios.

## Como usuario quiero inscribirme a meetups para poder asistir.
Si me logeo con el usuario Ivan me puedo inscribir en una meetup pero no puedo agregar gente ya que solo lo puede hacer el administrador.
Igualmente considero que es necesario un backend con JWT por ejemplo para mantener en un token toda la información del usuario y poder recuperarla y navegar por las pantallas.


### `Esquema de CI/CD`

## Adjunto esquema de CI/CD en una imagen llamada: devops.jpg.

### `Informacion personal`

## github: https://github.com/ivanmuinos/
## linkedin: https://www.linkedin.com/in/ivan-david-m-63015387/


## Muchas gracias por la oportunidad :)