import Page2 from "./Page2";

// function Page1(){

// }

const Page1 = () => {
  console.log("Page1 from js");

  return (
    <>
      <h1>Page1</h1>
      <Page2></Page2>
    </>
  );
};

export default Page1;
