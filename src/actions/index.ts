export async function fetchProducts() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products",{
      method:'GET',
      cache:'no-store'
    });
    const result = await apiResponse.json();

    return {
      success: true,
      message: "Products Fetched",
      data: result?.products,
    };
  } catch (e) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
export async function getProduct(id:any) {
  try {
    const apiResponse = await fetch('https://dummyjson.com/products/'+id);
    const result = await apiResponse.json();
    return {
      success: true,
      message: "Product Fetched",
      data: result,
    };
  } catch (e) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
