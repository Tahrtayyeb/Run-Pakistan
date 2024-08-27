import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'
import { ApiError } from '../utils/apiError.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        console.log("Cookies:", req.cookies);
        console.log("Headers:", req.headers);
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        
        console.log("Received token:", token) // Log the token
        
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
   
        console.log("ACCESS_TOKEN_SECRET:", process.env.ACCESS_TOKEN_SECRET) // Log the secret (remove in production!)
        
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        
        console.log("Decoded token:", decodedToken) // Log the decoded token
   
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
   
        if (!user) {
            throw new ApiError(401, "Invalid Access Token")
        }
   
        console.log("Found user:", user._id) // Log the user ID
        
        req.user = user;
        next()
    } catch (error) {
        console.error("JWT verification error:", error) // Log any errors
        throw new ApiError(401, error?.message || "Invalid access token")
    }
})