import { Button } from "@/components/ui/button";
import { useReducer } from "react";

interface State {
  count: number;
}

interface Action {
  type: "increase" | "decrease";
}

const initialState: State = {
  count: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increase":
      return {
        count: state.count + 1,
      };

    case "decrease":
      return {
        count: state.count > 0 ? state.count + 1 : 0,
      };

    default:
      return state;
  }
};

//changes for release/production change
const BooksPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function outerFun() {
    let count = 0;

    return function innerFn() {
      count++;

      console.log(count);
    };
  }

 const saveOutFunc = outerFun;


  saveOutFunc()


  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div>{state.count}</div>

      <div className="flex justify-center items-center gap-3">
        <Button onClick={() => dispatch({ type: "increase" })}>Add by 1</Button>
        <Button onClick={() => dispatch({ type: "decrease" })}>Sub by 1</Button>
      </div>
    </div>
  );
};

export default BooksPage;
