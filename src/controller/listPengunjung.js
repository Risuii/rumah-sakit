const Nomor = require('../models/pendaftaran')

const listPengunjung = async (req, res) => {

    const currentPage = req.query.page || 1
    const perPage = req.query.perPage || 5

    let totalItems;

    try {
        await Nomor.find()
        .countDocuments()
        .then(data => {
            totalItems = data;
            return Nomor.find()
            .skip((parseInt(currentPage) - 1)* parseInt(perPage))
            .limit(parseInt(perPage));
        })
        .then(result => {
            res.status(200).json({
                data: result,
                totalData: totalItems,
                perPage: parseInt(perPage),
                currentPage: parseInt(currentPage)
            })
        })
    }
    catch(err) {
        const result = {
            status: 'error',
            message: 'error list'
        }

        return res.status(400).json(result)
    }
}

module.exports = {
    listPengunjung
}