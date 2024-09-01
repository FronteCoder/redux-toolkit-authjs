"use client";
import { getProduct } from "@/actions";
import { Product } from "@/types/productpage";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { StarsIcon } from "lucide-react";

interface ProductDetails {
  success: boolean;
  message: string;
  data: Product;
}
export default function ProductDetails({ params }: any) {
  useEffect(() => {
    const result = getProduct(params.details).then((result: any) => {
      console.log(result);
      setProductDetails(result);
    });
  }, [params.details]);
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(
    null
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  return (
    <>
    {productDetails?.success ? (
      <div className="min-h-screen flex flex-col md:flex-row p-5 gap-8">
        <div className="bg-gray-100 p-5 rounded-lg shadow-lg flex-1 flex flex-col items-center justify-center">
          <Image
            alt={productDetails?.data?.title}
            src={productDetails?.data?.images[selectedImageIndex]}
            width={500}
            height={350}
            className="rounded-lg"
          />
          <div className="flex gap-2 mt-5 flex-wrap justify-center">
            {productDetails?.data?.images.map((image: any, index: number) => (
              <div
                key={image}
                className={`cursor-pointer p-1 rounded-lg ${
                  selectedImageIndex === index ? "ring-2 ring-blue-500" : ""
                } hover:bg-gray-200`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  alt={image}
                  src={image}
                  width={100}
                  height={150}
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
  
        <div className="flex-1 m-5">
          <h3 className="text-center font-semibold text-3xl antialiased mb-4">
            {productDetails?.data?.title}
          </h3>
          <div className="m-5 flex flex-col sm:flex-row justify-around items-center font-extrabold text-xl gap-5">
            <p className="bg-green-100 text-green-800 p-3 rounded-lg">
              {"$ " + productDetails?.data?.price}
            </p>
            <p className="bg-yellow-100 text-yellow-800 p-3 rounded-lg flex gap-1 items-center">
            <StarsIcon/>{productDetails?.data?.rating + " / " + "5"}
            </p>
          </div>
          <p className="mt-5 font-bold text-gray-700 text-justify">
            {productDetails?.data?.description}
          </p>
        </div>
      </div>
    ) : (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="font-extrabold text-3xl text-slate-900 text-center">
          Unable to Fetch Product Details,Loading...
        </h2>
      </div>
    )}
  </>
  
  );
}
