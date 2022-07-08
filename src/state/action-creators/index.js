// is file me jo hai hm action ko create krrhe hai-- jaisi ki hmko deposit krna hai, ya fir withdraw krna hai..to ye sb action hai...

export const depositmoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdrawmoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};
