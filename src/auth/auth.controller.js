const { getUserByEmail } = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')


const checkUserCredential = async (email, password) => {
    try {
        const user = await getUserByEmail(email)
        const verifyPassword = comparePassword(password, user.password)
        if(verifyPassword){
            return user
        }
        return null
    } catch (err) {
        return null
    }
}

module.exports = checkUserCredential