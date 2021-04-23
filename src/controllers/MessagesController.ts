import { Request, Response } from 'express'
import { User } from '../entities/User'
import { MessagesService } from '../services/MessagesService'

class MessagesController {

    async create(req: Request, res: Response): Promise<Response> {
        const { admin_id, text, user_id } = req.body
        const messagesService = new MessagesService
        try {
            const message = await messagesService.create({text, admin_id, user_id})
            console.log(`New message: ${text} \n Admin(${admin_id}) | User(${user_id})`)
            return res.json(message)
        } catch(err){
            return res.status(400).json({
                message: err.message
            })
        }
    }

    async showByUser(req: Request, res: Response): Promise<Response> {
        const { user_id } = req.params
        const messagesService = new MessagesService
        try {
            const messages = await messagesService.listByUser(user_id)
            console.log()
            return res.json(messages)
        } catch(err){
            return res.status(400).json({
                message: err.message
            })
        }
    }
}

export { MessagesController }