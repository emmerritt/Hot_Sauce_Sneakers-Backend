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

export { createOrder } from './orders.js';

export { 
    createSize,
    getAllSizes,
    getSizeById
} from './sizes.js';

export { 
    createProduct,
    getAllProductsInStock,
    getProductById, 
    getAllProducts,
    updateProduct,
    deleteProduct,
    getAllProductsInStockBySize,
    getAllProductsInStockByBrand
} from './products.js';

export { createOrderHistoryItem } from './order_histories.js';

export { 
    createCartItem,
    getCartItemsByUserId,
    updateCartItemCount,
    removeCartItem 
} from './carts.js';