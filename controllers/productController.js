const db = require('../models')


//create main Model
const Product =db.products
const Review=db.reviews


//main work

//1-create product
const addProduct=async (req,res)=>{
    const info ={
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published ? req.body.published : false
    }
    const product=await Product.create(info)
    res.status(200).send(product)
}

//2-get all products
const getAllProducts= async(req,res)=>{
   
    const products=await Product.findAll({})
    res.status(200).send(products)
}

//3-get a products
const getOneProduct= async(req,res)=>{
   
    const id = req.params.id
    const product=await Product.findOne({where:{id}})
    res.status(200).send(product)
}


//4-Update a  product
const updateProduct= async(req,res)=>{
   
    const id = req.params.id
    const product=await Product.update(req.body,{where:{id}})
    res.status(200).send(product)

}


//5-delete produc by id
const deleteProduct= async(req,res)=>{
   
    const id = req.params.id
    await Product.destroy({where:{id}})
    res.status(200).send("product deleted")
}

//6-delete produc by id
const getPublishedProduct= async(req,res)=>{

    const products=await Product.findAll({where:{published:true}})
    res.status(200).send(products)
}



// 7. connect one to many relation Product and Reviews
const getProductReviews =  async (req, res) => {

    const id = req.params.id

    const data = await Product.findOne({
        include: [{
            model: Review,
            as: 'review'
        }],
        where: {  id }
    })

    res.status(200).send(data)

}


module.exports={
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
    getProductReviews
}