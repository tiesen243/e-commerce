import { Document } from "mongoose";
import CreateDto, { ICreateDto } from "./dto/create.dto";
import ProductModel from "./schemas/product.schema";
import { IProduct } from "./schemas/types";

export default class ProductService {
  constructor(private readonly productModel = ProductModel) {}

  async getAllProducts(
    code: number,
    name: string,
    page: number = 1,
    limit: number = 10,
  ): Promise<{
    data: Document<unknown, IProduct>[];
    total: number;
    message: string;
    status: number;
  }> {
    if (page < 1) page = 1;
    try {
      const allProducts = await this.productModel
        .find({
          ...(code && { code }),
          ...(name && { name: { $regex: name, $options: "i" } }),
        })
        .skip((page - 1) * limit)
        .limit(limit);

      if (!allProducts.length) throw new Error("No products found.");

      return {
        data: allProducts,
        total: allProducts.length,
        message: "All products retrieved successfully.",
        status: 200,
      };
    } catch (e: any) {
      return {
        data: [],
        total: 0,
        message: e.message,
        status: 500,
      };
    }
  }

  async getProductById(id: string): Promise<{
    data?: Document<unknown, IProduct>;
    message: string;
    status: number;
  }> {
    try {
      const product = await this.productModel.findById(id);
      if (!product) throw new Error("Product not found.");

      return {
        data: product,
        message: "Product retrieved successfully.",
        status: 200,
      };
    } catch (e: any) {
      return {
        message: e.message,
        status: 404,
      };
    }
  }

  async createProduct(productDto: ICreateDto): Promise<{
    data?: Document<unknown, IProduct>;
    message: string;
    status: number;
  }> {
    try {
      CreateDto.parse(productDto);

      const newProduct = await this.productModel.create({
        ...productDto,
        code: Math.floor(Math.random() * (999999 - 100000 + 1) + 100000),
      });
      if (!newProduct) throw new Error("Could not create product.");

      return {
        data: newProduct,
        message: "Product created successfully.",
        status: 201,
      };
    } catch (e: any) {
      if (e.issues)
        return {
          message: e.issues.map((issue: any) => issue.message),
          status: 400,
        };

      return {
        message: e.message,
        status: 500,
      };
    }
  }

  async deleteProductById(id: string): Promise<{
    data?: Document<unknown, IProduct>;
    message: string;
    status: number;
  }> {
    try {
      const deletedProduct = await this.productModel.findByIdAndDelete(id);
      if (!deletedProduct) throw new Error("Product not found.");
      return {
        data: deletedProduct,
        message: "Product deleted successfully.",
        status: 201,
      };
    } catch (e: any) {
      return {
        message: e.message,
        status: 404,
      };
    }
  }
}
