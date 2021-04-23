import { Request, Response } from 'express'
import { UsersService } from '../services/UsersService'

class UsersController {

    async create(req: Request, res: Response): Promise<Response> {
        const { email } = req.body

        const usersService = new UsersService

        const user = await usersService.create({email})

        console.log(`New User added with email: ${email}`)
        
        return res.json(user)
    }
}

export { UsersController }