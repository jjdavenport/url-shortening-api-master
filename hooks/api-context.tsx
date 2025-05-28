import { useState } from "react";

const useAPI = () => {
  const [input, setInput] = useState("");
  const [urls, setUrls] = useState([
    {
      fullUrl: "",
      shortUrl: "",
    },
  ]);

  const fetchData = () => {};

  return {
    input,
    setInput,
    fetchData,
    urls,
  };
};

export default useAPI;
