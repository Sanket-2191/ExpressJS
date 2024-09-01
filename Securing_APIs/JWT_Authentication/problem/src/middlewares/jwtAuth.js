// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken";


const jwtAuth = (req, res, next) => {
  // Write your code here
  console.log(req.headers.authorization?.split(' ')[1].split('.'));
  console.log('/////////////////////////////////////////////////////////////////////////////////////');
  console.log(req.cookies.jwtToken);
  const token = req.cookies.jwtToken;

  if (!token) {
    res.status(401).json({ success: false, msg: "Unauthorized" })
  }

  try {

    const payload = jwt.verify(
      token,
      'Asdgggg56fdxgdtf'
    )

  } catch (error) {
    console.log(token);
    res.status(401).json({ success: false, msg: error })
  }
  next();
};

export default jwtAuth;
