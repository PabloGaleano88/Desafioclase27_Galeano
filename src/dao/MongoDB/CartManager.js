import CartService from "../services/cartService.js"

const cartService = new CartService

class CartManager {
    async addCart(){
        return await cartService.addCart()
    }

    async findCartById(id){
        return await cartService.findCartById(id)
    }

    async addProductToCart(cid, pid, quantity){
        return await cartService.addProductToCart(cid, pid, quantity)
    }

    async removeProductFromCart(cartId, productId){
        return await cartService.removeProductFromCart(cartId, productId)
    }

    async removeAllProductsFromCart(cartId){
        return await cartService.removeAllProductsFromCart(cartId)
    }

    async updateProducts(cartId, productUpdate){
        return await cartService.updateProducts(cartId, productUpdate)
    }

    async updateProductQuantity(cartId, productId, quantity){
        return await cartService.updateProductQuantity(cartId, productId, quantity)
    }
}

export default CartManager
