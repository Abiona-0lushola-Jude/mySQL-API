const express = require('express')
const router = express.Router()
const developerController = require('../Controllers/developerController')



// geting all developer
router.get('/', developerController.getAllDeveloper)

// post one developer
router.post('/', developerController.postDeveloper)


// deleting on developer
router.delete('/:id', developerController.deleteDeveloper)

// updating a developer
router.put('/:id', developerController.updateDeveloper)

module.exports = router