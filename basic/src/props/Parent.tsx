import { Child } from "./Child";

const Parent = () => {
  return (
    <Child
      color="red"
      onClick={() => {
        console.log("CLicked !");
      }}
    >
      Mani
    </Child>
  );
};

export default Parent;
