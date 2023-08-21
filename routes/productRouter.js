const productController=require('../controllers/productController')
const reviewController=require('../controllers/reviewController')


const router=require('express').Router()



router.post('/addProduct',productController.addProduct)

router.get('/allProducts',productController.getAllProducts)

router.get('/published',productController.getPublishedProduct)

router.post('/addReview',reviewController.addReview)



router.get('/allReviews',reviewController.getAllReviews)

router.get('/allProductReviews/:id',productController.getProductReviews)





router.get('/:id',productController.getOneProduct)

router.patch('/:id',productController.updateProduct)

router.delete('/:id',productController.deleteProduct)



module.exports=router