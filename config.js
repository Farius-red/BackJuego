module.exports = {
    api: {
        port: process.env.API_PORT || 3002,
    },

    jwt: {
        secret: process.env.JWT_SECRET || 'notasecreto',
    }
}