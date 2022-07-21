import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

const Pack = () => {
  const router = useRouter();
  const [pack, setPack] = useState(undefined);
  const [cards, setCards] = useState([]);

  const packEndpoint = `/api/pack/${router.query.id}`;
  const packCardCreateEndpoint = `${packEndpoint}/card`;
  const packCardsEndpoint = `${packEndpoint}/cards`;

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.id) {
        const fetchParams = {
          method: "Get",
        };

        const packRes = await fetch(packEndpoint, fetchParams);
        const packCardsRes = await fetch(packCardsEndpoint, fetchParams);

        const packResponse = await packRes.json();
        const packCardsResponse = await packCardsRes.json();

        setPack(packResponse.data);
        setCards(packCardsResponse.data);
      }
    };

    fetchData();
  }, [router.query.id]);

  const handleUpdateSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
    };

    const res = await fetch(packEndpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    const response = await res.json();

    setPack(response.data);
  };

  const handleCreateSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
    };

    const res = await fetch(packCardCreateEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const response = await res.json();

    setCards([...cards, { ...response.data }]);
  };

  return (
    <div>
      <Link href="/pack">
        <a>Back</a>
      </Link>
      {!!pack ? (
        <form
          method="PUT"
          action={packEndpoint}
          onSubmit={(event) => handleUpdateSubmit(event)}
        >
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={pack.title}
          />
          <br />
          <button type="submit">Update pack</button>
        </form>
      ) : null}

      <hr />

      <form
        method="POST"
        action={packCardCreateEndpoint}
        onSubmit={(event) => handleCreateSubmit(event)}
      >
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" name="title" id="title" />
        <br />
        <label htmlFor="content">Content</label>
        <br />
        <textarea name="content" id="content"></textarea>
        <br />
        <button type="submit">Create new card</button>
      </form>

      <hr />

      {!!pack && cards.length
        ? cards.map((card) => {
            return (
              <div key={card.id}>
                {card.id} - {card.title} - {card.content}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Pack;
