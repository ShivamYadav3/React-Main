import Greetings from "./Greetings";

const ParentComp = () => {
  return (
    <>
      <h1>Welcome to the homepage</h1>
      <div>
        <Greetings name="Mitesh" city="Mumbai" nickName="MB" count={10} />
        <Greetings name="Mahesh" city="Indore" nickName="MP" />
        <Greetings name="Shankar" city="Jabalpur" nickName="SS" />
        <Greetings name="Shivam" city="Bangalore" nickName="SY" />
      </div>
    </>
  );
};

export default ParentComp;
