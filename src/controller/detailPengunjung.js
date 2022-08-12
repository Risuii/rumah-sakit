const Nomor = require('../models/pendaftaran');

const detailPengunjung = async (req, res) => {
    const { id } = req.params
    try {
        const detailPengunjung = await Nomor.findOne({queueId: id})
        if(!detailPengunjung) {
            const result = {
                message: "id tidak ditemukan"
            }

            return res.status(400).json(result)
        }

        return res.status(200).json(detailPengunjung)
    }
    catch(err) {
        const result = {
            status: "error",
            message: "terjadi error detail pengunjung"
        }

        return res.status(400).json(result)
    }
}

module.exports = {
    detailPengunjung
}