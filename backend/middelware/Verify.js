import jwt from "jsonwebtoken";

export const verifyToken = (req,res,next) => {
    const token = req.cookies.secret_key;

    if(!token) return res.status(401).json("Unauthorized");
    jwt.verify(token,process.env.JWT_SECRET,(err) => {
        if(err) return res.status(403).json("Forbidden");
        next()
    })
}