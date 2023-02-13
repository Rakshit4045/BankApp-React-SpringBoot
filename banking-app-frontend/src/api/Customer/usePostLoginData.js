import { useEffect } from "react";

const usePostLoginData = (url, data) => {
  let result = {};
  // const [result, setResult] = useState(false);

  const callApi = () => {
    if (data) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
        }),
      })
        .then((res) => {
          // setResult(true);
          console.log(res.json().object());
          return res;
        })
        .catch((err) => console.log("error: ", err));
    }
  };

  useEffect(() => {
    if (data) {
      result = callApi();
    }
  });

  // useEffect(() => {
  //     console.log(data);

  // },[data, url])
  return result;
};

export default usePostLoginData;
