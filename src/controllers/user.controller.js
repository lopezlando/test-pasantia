import userService from "../services/user.service.js";

//REGISTER

const register = (req, res, next) => {
  userService
    .register(req.body)
    .then((result) =>
      !result.errors ? res.json(result) : res.status(400).json(result)
    )
    .catch((err) => next(err));
};

//LOGIN

const authenticate = (req, res, next) => {
  userService
    .authenticate(req.body)
    .then((result) =>
      !result.errors ? res.json(result) : res.status(400).json(result)
    )
    .catch((err) => next(err));
};

export default { register, authenticate };
