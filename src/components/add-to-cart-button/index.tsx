import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { Product } from "@/types/productpage";
import { Button } from "../ui/button";
import { addItem, removeItem } from "@/store/slices/cartSlice";
interface ProductProps {
    productItem: Product;
  }
export default function AddToCartButton({productItem}:ProductProps){
    const productCart = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const productStatus=productCart.cart.filter((product:Product)=>product?.id===productItem?.id).length>0?false:true;
    return<>
    
        {   productStatus?
    
        <Button onClick={()=>{
            dispatch(addItem(productItem))
        }}
         className="bg-green-500 text-white hover:bg-green-600 rounded-md">
            Add Item
        </Button> :
        <Button  onClick={()=>{
            dispatch(removeItem(productItem))
        }} className="bg-red-500 text-white hover:bg-red-600 rounded-md">
        Remove Item
        </Button>
        }
  
    </>
}