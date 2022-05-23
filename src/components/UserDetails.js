import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function UserDetails() {
  // const details = useSelector((state) => state.userDetails);

  const dispatch = useDispatch();

  function dispatchAction(actionType, payload) {
    dispatch({
      type: actionType,
      payload: payload
    });
  }
  return (
    <>
      {/* <div>{details}</div> */}
      <button
        onClick={() =>
          dispatchAction("SET_USER_DETAILS", "ID: 1, Address: ABC City, ")
        }
      >
        Add Details
      </button>
    </>
  );
}
