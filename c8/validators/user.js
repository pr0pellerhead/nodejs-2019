var register = {
    full_name: 'required|string',
    email: 'required|email',
    password: 'required|minLength:8'
}

module.exports = {
    register
}