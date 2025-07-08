const { getUserInfo } = require("../services/userService")

exports.getUserController = async (req, res) => {
    
    const userId = req.params.id

    const resUserInfo = await getUserInfo (userId)

     res.status(200).send({ user: resUserInfo })
}