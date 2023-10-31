import ProductService from "../services/productService.js"

const productService = new ProductService()

class ProductManager {

    async create(title, description, price, code, category, stock, thumbnail) {
        return await productService.createProduct(title, description, price, code, category, stock, thumbnail)
    }

    async getAll(urlQuery, urlLimit, urlPage, urlSort){
        return await productService.getProducts(urlQuery, urlLimit, urlPage, urlSort)
    }

    async delete(id){
        return await productService.deleteProduct(id)
    }

    async findById(id){
        return await productService.findProductById(id)
    }

    async updateProduct(id, updateFields){
        return await productService.updateProductById(id, updateFields)
    }
}
export default ProductManager
