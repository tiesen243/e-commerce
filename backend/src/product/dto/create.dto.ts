import { z } from "zod";
import { Category, Tag } from "../schemas/types";

const CreateDto = z.object({
  name: z
    .string()
    .min(4, {
      message: "Name must be at least 4 characters long.",
    })
    .max(255, {
      message: "Name must be at most 255 characters long.",
    }),
  image: z.string().url({
    message: "Image must be a valid URL.",
  }),
  description: z.string().min(4),
  category: z.nativeEnum(Category, {
    errorMap: () => {
      return {
        message: `Category must be one of ${Object.values(Category).join(
          ", ",
        )}.`,
      };
    },
  }),

  tags: z.array(z.nativeEnum(Tag), {
    errorMap: () => {
      return {
        message: `Tags must be one of ${Object.values(Tag).join(", ")}.`,
      };
    },
  }),
  price: z.number().min(0),
  stock: z.number().min(0),
});

export type ICreateDto = z.infer<typeof CreateDto>;
export default CreateDto;
