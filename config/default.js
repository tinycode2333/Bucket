module.exports = {
    port: 3000,
    session: {
        secret: 'ruizhideheshui',
        key: 'bucket',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/bucket'
};