import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"
import { UsersRepository } from "../repositories/UsersRepository"

export interface IUsersCreate {
    email: string
}

class UsersService {

    private usersRepository: Repository<User>

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create({email}: IUsersCreate) {

        const userAlreadyExists = await this.usersRepository.findOne({email})

        if (userAlreadyExists) return userAlreadyExists

        const user = this.usersRepository.create({
            email
        })
        
        await this.usersRepository.save(user)

        return user
    }

    async findByEmail({email}: IUsersCreate) {
        const user = await this.usersRepository.findOne({ email })
        return user
    }
}

export { UsersService }