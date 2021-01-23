import React, { useEffect, useState } from "react";
import { my_app } from "../utils/constants";
import { AuthenticationContext } from "../context/AuthenticationContext";

const Dashboard = React.memo(() => {
  const { user } = React.useContext(AuthenticationContext);
  const [value, setValue] = useState("");

  useEffect(() => {
    my_app
      .get(`api/v1/user-management/users/kyc/status/${user.profile_id}`)
      .then((res) => {
        console.log(res);
        setValue(res.data.details);
      })
      .catch((error) => {
        throw error;
      });
  }, [user.profile_id]);

  return <div>{value?.pan?.verification_data?.name_on_pan}</div>;
});

export default Dashboard;
