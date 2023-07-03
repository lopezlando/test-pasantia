import bcrypt from "bcryptjs";
import db from "../_helpers/db.js";

const User = db.User;

/*La función register tiene un bug: el email de usuario es un campo único,
* no debería haber dos usuarios con el mismo mail. Sin embargo, si yo
* creo un segundo usuario con el mismo mail, me deja hacerlo, lo cual no debería suceder.
* Incluso puede llegar a crashear node al registrar un segundo o tercer usuario con el mismo mail.
*
* Por otro lado, hay  errores menores (en realidad no son errores, sino malas prácticas)
* que son un extra por si las encontrás. Una de ellas está en register() y otra en authenticate(). */ 

//REGISTER
const register = async (userParam) => {
  const currentUser = await User.findOne( {email: userParam.email} ) //Chequeo si hay un usuario ya registrado
  if (currentUser){
    throw "El correo ya está registrado. Por favor, ingrese otro.";
  }
  if (!userParam.password) {
    throw "Por favor, indicar una contraseña.";
  }
  const user = new User({
    ...userParam,
    createdAt: Date.now(),
  });

  user.hash = bcrypt.hashSync(userParam.password, 10);
  await user.save();

  return { ...user.toJSON() };
};

//LOGIN
const authenticate = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw "Usuario o contraseña incorrectos.";
  }

  const passwordMatch = bcrypt.compareSync(password, user.hash);

  if (!passwordMatch) {
    throw "Usuario o contraseña incorrectos.";
  }

  return {
    email: user.email,
    message: "¡Login exitoso!",
  };
};

export default {
  register,
  authenticate,
};
