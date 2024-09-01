import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  const { jwtToken } = req.cookies;
  //   const token = req.headers["authorization"];
  //   console.log(token);
  try {
    const authStatus = jwt.verify(jwtToken, "CodingNinjas2016");
    // req.user = authStatus;
    const { userId, userEmail } = authStatus;
    res.cookie("user", { userId, userEmail }, { maxAge: 900000, httpOnly: false })
    // console.log(req.user);
    // res.status(200).json({success:true,msg:"login successfull",authStatus});
    next();
  } catch (error) {
    res.status(401).json({ success: false, msg: error });
  }
};

export default jwtAuth;
