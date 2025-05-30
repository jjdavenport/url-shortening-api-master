import { useEffect, useState } from "react";

const useAPI = () => {
  const [input, setInput] = useState("");
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState({
    state: false,
    message: "Cannot be empty",
  });

  const fetchData = () => {
    setUrls((prev) => [...prev, { shortUrl: "", longUrl: input }]);
  };

  useEffect(() => {
    console.log(urls);
  }, [urls]);

  return {
    input,
    setInput,
    fetchData,
    urls,
    error,
  };
};

export default useAPI;
