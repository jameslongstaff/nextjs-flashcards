import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

const Packs = () => {
  const [packs, setPacks] = useState([]);

  const packEndpoint = `/api/pack/`;

  useEffect(() => {
    const fetchData = async () => {
      const fetchParams = {
        method: "GET",
      };

      const packRes = await fetch(packEndpoint, fetchParams);

      const packResponse = await packRes.json();

      setPacks(packResponse.data.packs);
    };

    fetchData();
  }, []);

  const handleCreateSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
    };

    const res = await fetch(packEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const response = await res.json();

    setPacks([...packs, { ...response.data }]);
  };

  return (
    <div>
      <Link href="/pack">
        <a>Back</a>
      </Link>
      <form
        method="PUT"
        action={packEndpoint}
        onSubmit={(event) => handleCreateSubmit(event)}
      >
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" name="title" id="title" />
        <br />
        <button type="submit">Update pack</button>
      </form>

      <hr />

      {!!packs && packs.length
        ? packs.map((pack) => {
            return (
              <div key={pack.id}>
                {pack.id} - {pack.title}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Packs;
