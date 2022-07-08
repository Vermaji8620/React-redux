// ab reducer ka matlab hai ki jo kaam action-taker krne ka liye bol rha hai wo kaam ko krne wale ko action-taker bolte hai--- jaisi ki yaha pe deposit krna aur withdraw krna action hai...

// to reducer ka matlb hai ki jo (ek chiz ka particular state le) aur (action) ko le  and action ko krke return kr de..

// particular state le se mera matlb hai ki koi chiz kitna present hai jaisi ki yaha pe state 0 hai---

const reducer = (state = 0, action) => {
  if (action.type === "deposit") {
    return state + action.payload;
  } else if (action.type === "withdraw") {
    return state - action.payload;
  } else {
    return state;
  }
};

export default reducer;
