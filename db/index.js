export { client } from './client.js';

export { 
    createUser,
    upgradeUserToAdmin,
    deactivateUser,
    verifyPassword,
    getUserById,
    getAllUsers
 } from './users.js';

export { 
    createBrand,
    getAllBrands,
    getBrandByBrandId,
    deleteBrand 
} from './brands.js';

export { 
    createInventoryItem,
    getAllInventoryItemsInStock,
    getInventoryItemsByProductId,
    getAllSizesInStockByProductId,
    getAllSizesByProductId,
    updateStockByProductIdAndSize,
    getStockByProductIdAndSize,
    getInventoryItemById,
    deleteInventoryItemById
} from './inventories.js';

export { 
    createOrder,
    getOrderByOrderId,
    getOrdersByUserId,
    updateOrderStatus 
} from './orders.js';

export { 
    createSize,
    getAllSizes,
    getSizeById,
    deleteSize
} from './sizes.js';

export { 
    createProduct,
    getAllProductsInStock,
    getProductById, 
    getAllProducts,
    updateProduct,
    deleteProduct,
    getAllProductsInStockBySize,
    getAllProductsInStockByBrand,
    getAllProductsInStockByGender
} from './products.js';

export { 
    createOrderHistoryItem,
    getUserOrderHistory,
    getOrderItemsByOrderId 
} from './order_histories.js';

export { 
    createCartItem,
    getCartItemsByUserId,
    updateCartItemCount,
    removeCartItem,
    removeAllCartItemsByUserId 
} from './carts.js';