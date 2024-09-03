
"use client";

import { useAppSelector } from "@/hooks/hooks";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default function CartPage() {
  const productCart = useAppSelector((state) => state.cart);

  return (
    <div className="min-h-screen p-4 md:p-6 bg-gray-50">
      <h2 className="m-5 font-bold text-2xl md:text-4xl text-gray-800 text-center">
        Your Cart
      </h2>
      <div className="overflow-x-auto">
        <Table className="w-full bg-white shadow-lg rounded-lg">
          <TableCaption className="text-gray-600">
            Products in your cart
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] text-left">Image</TableHead>
              <TableHead className="text-left">Name</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productCart?.cart.map((product) => (
              <TableRow key={product?.id} className="hover:bg-gray-100">
                <TableCell className="font-medium">
                  <div className="relative w-16 h-16 md:w-20 md:h-20">
                    <Image
                      src={product?.images[0]}
                      alt={product?.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-semibold text-gray-700">
                  {product?.title}
                </TableCell>
                <TableCell className="text-right font-semibold text-gray-700">
                  {"$" + product?.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="bg-gray-50 font-bold text-lg">
              <TableCell colSpan={2} className="text-right">
                Total
              </TableCell>
              <TableCell className="text-right">
                {"$" +
                  productCart?.cart
                    ?.map((product) => product.price)
                    .reduce((a, b) => a + b, 0)
                    ?.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
