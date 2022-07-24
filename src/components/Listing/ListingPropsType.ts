import ListingItemType from "./ListingItemType";

type ListingPropsType = {
  items: ListingItemType[];
  deleteHandler: (event: React.MouseEvent, itemId: string) => void;
};

export default ListingPropsType;
