const Product = require('../models/product')

// This route is just for testing
const getAllProductsStatic = async (req, res) => {
    // throw new Error('Not implemented');
    const products = await Product.find({
        name: 'bar stool'
    })
    res.status(200).json({ products, nbHits: products.length })
}
const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields, numericFilters } = req.query
    const queryObject = {}
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }

    // Ranging Functionality
    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }
        const regEx = /\b(<|>|>=|<=|=)\b/g
        let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)
        // The above lines convert -> price>40,rating>=4 to price-$gt-40,rating-$gte-4
        // If there is a match, then the value is replaced(swapped)
        const options = ['price', 'rating']
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-')
            if (options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) }
            }
        })
    }

    console.log(queryObject);

    // Sorting
    // const products = await Product.find(queryObject) -> Here we can not use await since we don't get the queryOject so quick, so we use await in the further lines
    let result = Product.find(queryObject)
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        result = result.sort('createAt')
    }

    // Selecting fields
    if (fields) {
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
    }

    // Pagination - limit,skip
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit
    result = result.skip(skip).limit(limit)

    const products = await result
    res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}

