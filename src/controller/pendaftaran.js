const Nomor = require('../models/pendaftaran')

const pendaftaran = async (req, res) => {
    try {
        const { customerName, city, npwp, address, anotherAddress, contactNumber, region, province} = req.body;

        const date = new Date()

        for(i = 1; i < 12; i++) {
            var str = "" + i
            var pad = "A000"
            var ans = pad.substring(0, pad.length - str.length) + str
            if (i === 11) {
                const result = {
                    message: 'antrian penuh, silahkan kembali besok'
                }

                return res.status(200).json(result)
            }

            loopingNumber = await Nomor.findOne({queueId: i})
            
            if (loopingNumber) {
                continue
            }

            if (!loopingNumber) {
                const ambilAntrian = new Nomor({
                    customerName,
                    city,
                    npwp,
                    queueId: i,
                    address,
                    queueNumber: ans,
                    anotherAddress,
                    contactNumber,
                    region,
                    province
                })
                ambilAntrian.save()
                break
            }
        }

        
        const result = {
            hasilPrint: {
                title: "almegatex",
                nomorAntrian: `Nomor Antrian Anda: ${ans}`,
                desc: "Mohon Menunggu",
                dateAdded: date,
                message: "Budayakan antri untuk kenyamanan bersama Terima Kasih atas kunjungan anda"
            }

        }

        return res.status(200).json(result)
        
    }
    catch(err) {
        const result = {
            status: 'error',
            message: 'terjadi error ketika mendaftar'
        }

        return res.status(400).json(result)
    }
}

module.exports = {
    pendaftaran
}