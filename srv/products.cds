using { products as external } from './external/products';

service productService {
    entity Products as projection on external.Products;
    entity Category as projection on external.Categories;
    entity Suppliers as projection on external.Suppliers;
}