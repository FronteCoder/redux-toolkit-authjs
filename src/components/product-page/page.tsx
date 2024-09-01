"use client";
import { Product } from "@/types/productpage";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductPage({ products }: any) {
    const router=useRouter();
  return (
<>
  <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
    {products.length > 0 ? (
      products.map((product: Product) => {
        return (
          <Card
            key={product.id}
            className="shadow-lg rounded-lg overflow-hidden flex flex-col justify-between"
          >
            <CardHeader className="text-center font-semibold text-lg sm:text-xl bg-gray-100 p-4 min-h-[60px] flex items-center justify-center">
              {product.title}
            </CardHeader>
            <CardContent className="flex justify-center items-center p-4 bg-white">
              <Image
                alt={product?.title}
                src={product?.images[0]}
                width={350}
                height={200}
                className="object-cover h-48 w-full"
              />
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 bg-gray-100">
              <p className="font-bold text-lg md:text-xl text-gray-700">
                {"$" + product?.price}
              </p>
              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => router.push(`/products/${product?.id}`)}
                  className="bg-blue-500 text-white hover:bg-blue-600 rounded-md"
                >
                  Details
                </Button>
                <Button className="bg-green-500 text-white hover:bg-green-600 rounded-md">
                  Add to Cart
                </Button>
              </div>
            </CardFooter>
          </Card>
        );
      })
    ) : (
      <div className="col-span-full flex justify-center items-center">
        <h1 className="text-2xl font-semibold text-gray-700">
          No Products to Display
        </h1>
      </div>
    )}
  </div>
</>

  
  
  );
}
