import { Application, NextFunction, Request, Response } from "express";

import ProductController from "./product/product.controller";

const Routes = (app: Application) => {
  // CORS
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "GET, PUT, POST, DELETE, PATCH, OPTIONS",
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With",
    );
    next();
  });

  // Health check
  app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("Server is healthy");
  });

  // API routes
  app.use("/api/v1/products", ProductController);
};

export default Routes;
