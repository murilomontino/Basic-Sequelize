import db, {database} from '../models'


const __main__ = async () => {

  
    await database.sync({force: true})

    const user = await db.User.findByPk(1, {
        include: [
            db.Address
        ]
    })

    
}



__main__()

export default {
    ...db,
    database
}