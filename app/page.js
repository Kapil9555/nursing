'use client'
import AllComp from "@/components/AllComp";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Page() {

  return (
    <>
    <Provider store={store} >
      <AllComp/>
    </Provider>
    </>
  );
}
