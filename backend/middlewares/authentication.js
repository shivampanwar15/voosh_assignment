import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";



const authenticate = (req, res, next) => {
  cookieParser()(req, res, () => {});
  const token = req.cookies.accessToken;
 // console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

export default authenticate;