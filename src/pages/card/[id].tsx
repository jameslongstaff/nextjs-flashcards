import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

const Card = () => {
  const router = useRouter();
  const [card, setCard] = useState(undefined);

  const packEndpoint = `/api/pack/${router.query.id}`;
  const packCardEndpoint = `${packEndpoint}/card`;

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.id) {
        const fetchParams = {
          method: "Get",
        };

        const packCardRes = await fetch(packCardEndpoint, fetchParams);

        const packCardResponse = await packCardRes.json();

        setCard(packCardResponse.data);
      }
    };

    fetchData();
  }, [router.query.id]);

  const handleUpdateSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
    };

    const res = await fetch(packEndpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    const response = await res.json();

    setCard(response.data);
  };

  return (
    <div>
      <Link href="/pack">
        <a>Back</a>
      </Link>
      {!!card ? (
        <form
          method="PUT"
          action={packCardEndpoint}
          onSubmit={(event) => handleUpdateSubmit(event)}
        >
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={card.title}
          />
          <br />
          <label htmlFor="content">Content</label>
          <br />
          <textarea
            name="content"
            defaultValue={card.content}
            id="content"
          ></textarea>
          <br />
          <button type="submit">Update card</button>
        </form>
      ) : null}
    </div>
  );
};

export default Card;
