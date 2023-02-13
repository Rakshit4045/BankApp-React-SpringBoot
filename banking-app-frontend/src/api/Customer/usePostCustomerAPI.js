import { useEffect, useState } from "react";

const usePostCustomerApi = (url, data) => {
  const [result, setResult] = useState(false);
  const [val, setVal] = useState(false);

  if (data) {
    setVal(true);
  }
  const postApi = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    })
      // .then((res) => {
      //         if(res.status === 200)setResult(true);
      //     })
      .then((res) => {
        setResult(true);
        console.log(res);
        return res.json();
      })
      .catch((err) => console.log("error: ", err));
  };

  useEffect(() => {
    console.log("useEffect called");
    if (data) {
      postApi();
    }
  }, [val]);

  return result;
};

export default usePostCustomerApi;
