module.exports = {

	// the database url to connect
	url : 'mongodb://' + process.env.BACKEND_STORAGE_MONGO_USER + ':' + process.env.BACKEND_STORAGE_MONGO_PASS + '@' + process.env.BACKEND_STORAGE_MONGO + ':27017/admin'
}
