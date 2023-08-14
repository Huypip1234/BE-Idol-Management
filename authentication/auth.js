import jwt from "jsonwebtoken";

// JWT:
// eg: eyJhbG.eyJleHAiOjEzODY4OTkx.uKqU9dTB6gK
// encode: base64 (chuan ma hoa file)
// Struct: header.payload.signature
// +) Header: {token type: JWT, algorithms: (HMAC, SHA256,...)}
// +) Payload: ...
// +) Signature: Chuoi ma hoa by (header + payload + secret(.env))

// Co the custom thao tac user dc thuc hien qua jwt (vd: chi cho phep thuc hien dieu nay...)

const checkToken = (req, res, next) => {
  // Skip login, register
  if (
    req.url.toLowerCase() === "/user/login".toLowerCase() ||
    req.url.toLowerCase() === "/user/register".toLowerCase()
  ) {
    next();
    return;
  }
  // Other
  debugger
  const token = req.headers?.authorization?.split(" ")[1]; // Tach bear ra
  try {
    let jwtObject = jwt.verify(token, process.env.JWT_SECRET);

    const isExpired = Date.now() >= jwtObject.exp * 1000;
    // Date.now(): time count from a long time before to now (eg: 121231241230)

    if (isExpired) {
      res.status(400).json({
        message: "Token is expired",
      });
      res.end();
    } else {
      next();
      return;
    }
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

export default checkToken;
