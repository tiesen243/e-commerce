import { Request, Response, Router } from 'express'
import AuthService from './auth.service.js'

const AuthController = Router()
const authService: AuthService = new AuthService()

AuthController.post('/register', async (req: Request, res: Response): Promise<Response> => {
  return res.json(await authService.registerUser(req.body))
})

AuthController.post('/login', async (req: Request, res: Response): Promise<Response> => {
  return res.json(await authService.loginUser(req.body))
})

export default AuthController
