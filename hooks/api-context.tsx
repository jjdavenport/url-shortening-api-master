import { useState } from "react";

const useAPI = () => {
  const [input, setInput] = useState("");
  const [urls, setUrls] = useState([
    {
      fullUrl: "",
      shortUrl: "",
    },
  ]);

  const fetchData = (url) => {
    setUrls(() => setUrls((prev) => ({ ...prev, fullUrl: url })));
  };

  return {
    input,
    setInput,
    fetchData,
    urls,
  };
};

export default useAPI;
