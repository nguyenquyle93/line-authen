import React, { useEffect, useState } from "react";
import liff from "@line/liff";

liff.init({ liffId: "1657897488-4Db7ylqN" });
const App = () => {
  const liffURL = "https://liff.line.me/1657897488-4Db7ylqN";

  function login() {
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  }
  useEffect(() => {
    login();
  }, []);

  console.log("1111111", liff.getProfile());

  return <div>asdasfasf</div>;
};

export default App;
