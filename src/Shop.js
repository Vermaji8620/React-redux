import React from "react";
import { useDispatch } from "react-redux";  
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";  // actioncreator ko lane k liye

const Shop = () => {
  const dispatch = useDispatch();  // dispatch matlb aise smajh skte hai ki koi order ko dispatch kr dena ...yani ki order ko de dena taki wo kaam ho jaye
  const { depositmoney, withdrawmoney } = bindActionCreators(actionCreators,dispatch);

  return (
    <div>
      <h2>DEPOSIT/WITHDRAW MONEY</h2>
      <button
        className="btn btn-primary"
        onClick={() => {
          withdrawmoney(100);
        }}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-primary"
        onClick={() => {
          depositmoney(100);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
