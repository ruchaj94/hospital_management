
function createResult(error, data) {
    const result = {}
    if (error) {
        result['status'] = 'error'
        result['error'] = error
        console.log(error)
    } else {
        result['status'] = 'success'
        result['data'] = data
        console.log(data)
    }

    return result
}

module.exports = {
    createResult: createResult
}