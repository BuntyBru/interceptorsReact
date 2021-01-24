import React, { useEffect, useState } from "react";
import { my_app } from "../utils/constants";
import { AuthenticationContext } from "../context/AuthenticationContext";
import Details from "./Details";
import { useGet } from "../hooks/useApiCalls";

const Dashboard = React.memo(() => {
  const { user } = React.useContext(AuthenticationContext);

  const { data, isLoading, error } = useGet(
    `api/v1/user-management/users/kyc/status/${user.profile_id}`
  );
  if (isLoading) {
    return <p>Loading</p>;
  }

  /* useEffect(() => {
    my_app
      .get(`api/v1/user-management/users/kyc/status/${user.profile_id}`)
      .then((res) => {
        console.log(res);
        setValue(res.data.details);
      })
      .catch((error) => {
        throw error;
      });
  }, [user.profile_id]);*/
  return (
    <div>
      <Details data={data} error={error} />
    </div>
  );
});

export default Dashboard;
