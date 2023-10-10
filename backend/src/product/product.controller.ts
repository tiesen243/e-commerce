import { Request, Response, Router } from "express";
import { ReqQuery } from "./schemas/types";
import ProductService from "./product.service";

const ProductController = Router();
const productService: ProductService = new ProductService();

ProductController.get(
  "/",
  async (
    req: Request<{}, {}, {}, ReqQuery>,
    res: Response,
  ): Promise<Response> => {
    const { code, name, page, limit } = req.query;
    return res.json(
      await productService.getAllProducts(code, name, page, limit),
    );
  },
);

ProductController.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    return res.json(await productService.getProductById(req.params.id));
  },
);

ProductController.post(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    return res.json(await productService.createProduct(await req.body));
  },
);

ProductController.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    return res.json(await productService.deleteProductById(req.params.id));
  },
);

export default ProductController;
