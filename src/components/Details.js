import React from "react";

const Details = React.memo((props) => {
  console.log("HELLO DETAILS", props);

  if (props.error) {
    return "Waah bhai swad aa gaya";
  }

  return (
    <div>{props?.data?.data?.details?.pan?.verification_data?.name_on_pan}</div>
  );
});

export default Details;
