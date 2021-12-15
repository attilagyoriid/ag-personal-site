/** @format */

export function validateEmail(schema, handler) {
  return async (req, res) => {
    if (["POST"].includes(req.method)) {
      try {
        req.body = await schema
          .camelCase()
          .validate(req.body, { abortEarly: false, stripUnknown: true });
      } catch (error) {
        console.error("error! " + error.errors[0]);
        return res.status(400).json({ message: error.errors[0] });
      }
    }
    await handler(req, res);
  };
}
