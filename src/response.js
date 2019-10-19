const success = (req, res, message, status = 200) => {
    return res.status(status).json({
        ok: true,
        message
    })
};


const notFound = (req, res, err, status = 404) => {
    return res.status(status).json({
        ok: false,
        err
    })
};


const error = (req, res, err, status = 500) => {

    return res.status(status).json({
        ok: false,
        err
    })
};

module.exports = {
    success,
    notFound,
    error
}