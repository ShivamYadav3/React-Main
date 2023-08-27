import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./component/day1/form";
import FormElement from "./component/day2/form1";
import StateWithFC from "./component/day4/function-with-state";
import FormWithFc from "./component/day3/form-with-fc";
import StaleClosure from "./component/day1/stale-closure";
// import FormValidationFc2 from "./formValidationWitFc";
// import ListRender from "./listRender";
// import ListRenderDynamic from "./DunamicListRender";
// import ParentComp from "./component/day6/parent";
// import Names from "./component/day6/names";
import TodoHome from "./component/day6/ToDoHome";

// import ButtonExample from "./component/day7/ButtonExample";
import ParentComp from "./component/day8/ParentComp";
// import Names from "./component/day8/Names";
import Parent from "./component/day12/Parent";
import Greetings from "./component/day12/Greetings";
import Day14MainWithMemo from "./component/day14/Day14Main";
import Day14Api from "./component/day14/Day14Api";
import SearchBox from "./component/day14/searchBox";
import Rating from "./component/day15/rating";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/day17/Home";
import About from "./component/day17/About";
import Contact from "./component/day17/Contact";
import ProductDetails from "./component/day18/ProductDetails";
import ProductList from "./component/day18/ProductList";
import QueryParamsExample from "./component/day19/QueryParamsExample";
// import QueryParamsExample from "./component/day19/QueryParamsExample2";
import AComp from "./component/day20/a";
import Main from "./component/day21/Main";
import InputUCC from "./component/day23/inputucc";
import { ButtonCC, ButtonUCC } from "./component/day23/button";
import ComponentSwitcher from "./component/day23/ComponentSwitcher";
import AutoFocusWithRefV2 from "./component/day24/AutoFocusWithRefV2";
import Counter1 from "./component/day25/counter";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Counter2 from "./component/day25/counter2";
import Calculator from "./component/day26/calculator";
import StopWatch from "./component/day28/stopWatch";
import Day14Main from "./component/day14/1.index";
import Day13AsyncExampleBad from "./component/day13/Day13AsyncExampleBad";
import Day13AsyncExampleGood from "./component/day13/Day13AsyncExampleGood";
import Day16UseCallbackExample from "./component/day16/day";
import MultipleUseCallback from "./component/day16/useCallback";
import StopwatchCC from "./component/day23/stopwatccc";
import StopwatchUCC from "./component/day23/StopwatchUCC";
import AutoFocusWithRef from "./component/day24/AutoFocusWithRef";
import OTPComponent from "./component/day24/Otp";
import FormValidation from "./a revison/day1/FormValidetion";
// import DynamicForm from "./a revison/day2/DynamicForm";
import UserFormCopy from "./a revison/day1/formValidation2";
import ProductListApi from "./a revison/day3/product";
import FirstComp from "./a revison/day4/FirstComp";
import ServerData from "./a revison/day5/ServerSide";
import Homepage from "./a revison/day4/context/try/HomePage";
import ColourPicker from "./a revison/colour/picker";
import ToDo from "./a revison/colour/todo";
import DynamicForm from "./a revison/day6/dynamicForm";
import Maiiin from "./component/day18/maiiin";
import OTPComp from "./a revison/day7/otp";
import FormComponent from "./a revison/day8/FormComponent";
import Counter from "./a revison/day9/counterWithUsereducer";
import FormComponentV2 from "./a revison/day9/FormInput";
// import NewStopWatch from "./a revison/day 10/stopWatch";
import Api from "./a revison/day11/Api";
import Api2 from "./a revison/day11/apiGpt";
import App2 from "./a revison/day11/App";
import App3 from "./a revison/day12/app3";
import PeopleDetails from "./a revison/day11/peopleDetails";
import Search from "./a revison/day13/Search";
// import ErrorBoundary from "./a revison/day14/ErrorBoundary";
import AutomaticCounter from "./a revison/day15/AutomaticCounter";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  // {
  //   path: "about",
  //   element: <About />,
  // },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
  {
    path: "/",
    element: <App2 />,
  },
  // {
  //   path: "search",
  //   element: <QueryParamsExample />,
  // },
  // {
  //   path: "product-details/:meraProductId",
  //   element: <ProductDetails />,
  // },
  {
    path: "people-details",
    element: <PeopleDetails />,
  },
  // {
  //   path: "*",
  //   element: <div>Bhiya, there is no such page</div>,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <Provider store={store}>
      <Calculator />
    </Provider> */}
    {/* <Home /> */}
    {/* <RouterProvider router={router} /> */}
    {/* <Search /> */}
    {/* <DynamicForm /> */}
    {/* <OTPComp /> */}
    {/* <Maiiin /> */}
    {/* <App2 /> */}
    {/* <Search /> */}
    {/* <ErrorBoundary>
      <Search />
    </ErrorBoundary> */}
    <AutomaticCounter />
  </>
);
