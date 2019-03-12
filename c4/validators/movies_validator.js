const schema = {
    'name': 'required',
    'release_date': 'required|string',
    'actors': 'required|array',
    'actors.*': 'required|string',
    'genre': 'required|string',
    'director': 'required|string',
    'length': 'required|integer'
};

module.exports = {
    schema
}