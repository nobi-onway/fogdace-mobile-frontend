import { BASE_URL } from "../constants/url";
import useFetch from "./useFetch";

const ORDER_BY_USER_URL = `${BASE_URL}/shoppingOrder/order`;

function useOrder() {
  const { get_fetcher } = useFetch();


  const get_order_by_user = async (id) => {
    const order = await get_fetcher(`${ORDER_BY_USER_URL}/${id}`)
      .then((res) => res)
      .catch((err) => alert(err));

    return order
  };


  return {
    get_order_by_user,
  };
}

export default useOrder;
