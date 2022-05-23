import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserDetails from "./UserDetails";
import { output } from "./output";

export default function UserPage() {
  const firstName = useSelector((state) => state.userFirstName);
  const lastName = useSelector((state) => state.userLastName);
  const details = useSelector((state) => state.userDetails);

  const dispatch = useDispatch();

  function dispatchAction(actionType, payload) {
    dispatch({
      type: actionType,
      payload: payload
    });
  }

  function checkDetails() {
    output(details);
  }

  return (
    <>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{details}</div>
      <button onClick={() => dispatchAction("SET_USER_FIRST_NAME", "Alex")}>
        Add First Name
      </button>
      <button onClick={() => dispatchAction("SET_USER_LAST_NAME", "Mendes")}>
        Add Last Name
      </button>
      <button onClick={() => checkDetails()}>Print Details</button>

      <UserDetails />
    </>
  );
}
