import Link from "next/link";
import React from "react";

const CreatePack = () => {
  const packEndpoint = `/api/pack/`;

  const handleCreateSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
    };

    const res = await fetch(packEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });

    await res.json();
  };

  return (
    <div>
      <form
        method="PUT"
        action={packEndpoint}
        onSubmit={(event) => handleCreateSubmit(event)}
      >
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" name="title" id="title" />
        <br />
        <button type="submit">Create pack</button>
      </form>
    </div>
  );
};

export default CreatePack;
