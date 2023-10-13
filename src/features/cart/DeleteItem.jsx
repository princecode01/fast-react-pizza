import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({id}) {
  const dispatch = useDispatch();

  return <Button size="small" onClick={()=>dispatch(deleteItem(id))}>remove</Button>;
}

export default DeleteItem;
