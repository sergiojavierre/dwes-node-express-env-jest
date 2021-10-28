import {caramelos} from '../data/caramelos.js'

const get = (req, res) => {
    res.json(caramelos)
}

export {get}