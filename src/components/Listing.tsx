import * as React from "react";

export type ListingItemType = {
  id: string;
  title: string;
};

const Listing = (props: any) => {
  const { items } = props;

  return (
    <div>
      {items.map((item: ListingItemType) => {
        return (
          <p>
            {item.title} {item.id}
          </p>
        );
      })}
    </div>
  );
};

export default Listing;
