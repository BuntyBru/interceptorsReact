import React, { useEffect } from "react";
import { my_app } from "../utils/constants";
import { AuthenticationContext } from "../context/AuthenticationContext";

const Dashboard = React.memo(() => {
  const { user } = React.useContext(AuthenticationContext);
  useEffect(() => {
    console.log(
      "hello from useEffect",
      my_app.defaults.headers.common["Authorization"]
    );
    return my_app
      .get(`api/v1/user-management/users/kyc/status/${user.profile_id}`)
      .catch((error) => {
        throw error;
      });
  }, [user.profile_id]);

  return <div>DASHBOARD</div>;
});

export default Dashboard;
