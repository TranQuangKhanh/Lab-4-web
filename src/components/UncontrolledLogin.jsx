import React, { useRef } from "react";

export default function UncontrolledLogin() {
  const usernameRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    alert(usernameRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username: <input ref={usernameRef} type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
