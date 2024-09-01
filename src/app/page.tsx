import { fetchProducts } from "@/actions";
import ProductPage from "@/components/product-page/page";

export  default async function Root() {
  const products=await fetchProducts();
  return <>
  <ProductPage products={products?.data}></ProductPage>
  </>;
}
