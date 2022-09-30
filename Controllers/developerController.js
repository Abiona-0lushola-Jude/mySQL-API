const DB = require('../MySql_DB/connection')

module.exports ={
    getAllDeveloper : async (req, res) =>{
            const q = "SELECT * FROM developer.personel"

            await DB.query(q, (err, data)=>{
                if(err) return res.json({message: err.message})

                return res.json(data)
            })
    },
    postDeveloper: async (req, res) => {
        const q = "INSERT INTO developer.personel (`name`,`stack`,`level`, `yearOfExperience`) VALUES (?)"
        const values = [
            req.body.name,
            req.body.stack,
            req.body.level,
            req.body.yearOfExperience
        ]

        DB.query(q, [values], (err, data)=>{
            if(err) return res.json({message: err.message})


            return res.json({message:"Developer has been added!"})
        })
    },
    deleteDeveloper: async (req, res)=>{

        const develperId = req.params.id
        const q = "DELETE FROM developer.personel WHERE id= ? "

        await DB.query(q, [develperId], (err, data)=>{
            if(err) return req.json({message: err.message})


            return res.json({message: `Developer of ID ${develperId} has been deleted`})
        })
    },
    updateDeveloper: async (req, res)=> {

        const develperId = req.params.id
        const q = "UPDATE developer.personel SET `name` = ?, `stack` = ?,`level` = ?,`yearOfExperience` = ? WHERE `id` = ?"
        const values = [
            req.body.name,
            req.body.stack,
            req.body.level,
            req.body.yearOfExperience
        ]
        await DB.query(q, [...values, develperId], (err, data)=>{
            if(err) return res.json({message: err.message})

                return res.json({message: `Developer of ID ${develperId} has been updated`})
        })
    }
}