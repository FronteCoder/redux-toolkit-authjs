"use client";
import { getProduct } from "@/actions";
import { Product } from "@/types/productpage";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { StarsIcon } from "lucide-react";
import AddToCartButton from "@/components/add-to-cart-button";

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
      <div className="min-h-screen flex flex-col md:flex-row p-6 md:p-10 gap-10 bg-gray-50">
        {/* Image Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1 flex flex-col items-center justify-center">
          <Image
            alt={productDetails?.data?.title}
            src={productDetails?.data?.images[selectedImageIndex]}
            width={500}
            height={350}
            className="rounded-lg object-contain"
          />
          <div className="flex gap-3 mt-5 flex-wrap justify-center">
            {productDetails?.data?.images.map((image: any, index: number) => (
              <div
                key={image}
                className={`cursor-pointer p-2 rounded-lg transition-transform transform hover:scale-105 ${
                  selectedImageIndex === index ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  alt={image}
                  src={image}
                  width={100}
                  height={150}
                  className="rounded-md object-cover"
                />
              </div>
            ))}
          </div>
        </div>
  
        {/* Product Details Section */}
        <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-center font-bold text-3xl antialiased mb-6 text-gray-800">
            {productDetails?.data?.title}
          </h3>
          <div className="flex flex-col sm:flex-row justify-around items-center font-bold text-xl gap-6">
            <p className="bg-green-100 text-green-800 p-4 rounded-lg shadow-inner">
              {"$ " + productDetails?.data?.price}
            </p>
            <p className="bg-yellow-100 text-yellow-800 p-4 rounded-lg flex gap-2 items-center shadow-inner">
              <StarsIcon className="h-5 w-5 text-yellow-600"/>
              {productDetails?.data?.rating + " / " + "5"}
            </p>
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed text-justify">
            {productDetails?.data?.description}
          </p>
          <div className="mt-8">
            <AddToCartButton productItem={productDetails?.data} />
          </div>
        </div>
      </div>
    ) : (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <h2 className="font-extrabold text-3xl text-slate-900 text-center">
          Unable to Fetch Product Details, Loading...
        </h2>
      </div>
    )}
  </>
  
  
  );
}
