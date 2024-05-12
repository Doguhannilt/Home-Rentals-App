const express = require('express');
const cityModel = require("../mongodb/models/city")
const router = express.Router();

router.post("/post", async (req, res) => {
    const { city } = req.body; // Şehir bilgisini req.body'den alıyoruz
    const findCity = await cityModel.findOne({ city }); // Şehir ismiyle arama yapıyoruz

    if (findCity) {
        return res.status(400).json({ message: "The city already exists in the database" });
    }

    const newCity = new cityModel({ city }); // Yeni şehir modeli oluşturuyoruz
    await newCity.save(); // MongoDB'ye kaydediyoruz

    return res.status(200).json({ city: cityModel.city});

})


router.get("/get", async (req, res) => {
    const getCity = await cityModel.find()
    return res.status(200).json({getCity})
})
module.exports = router