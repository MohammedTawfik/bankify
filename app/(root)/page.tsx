import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "John",
    lastName: "Doe",
    email: "test@email.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently with our online banking services."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.5}
          />
        </header>
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1002.5 }, { currentBalance: 200.23 }]}
      />
    </section>
  );
};

export default Home;
