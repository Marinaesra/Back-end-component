const crypto = require('crypto')

const secret = 'Esencia Activa'
const secret2 = 'Esencia Activa 2025'

const hash = crypto.createHmac('sha256',secret).update(secret2).digest("hex");

console.log(hash)