import database from './config/database'

import Address from './models/Address'
import User from './models/User'

const __main__ = async () => {
    
    const address = Address
    const user = User

    await database.sync()


    const response = await user.findAll(
        {
            include: [
                {
                    model: Address
                }
            ]
        }
    )

    console.log(response);
    

}

__main__()