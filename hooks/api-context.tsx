import { useEffect, useState } from "react";

const useAPI = () => {
  const [input, setInput] = useState("");
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState({
    state: false,
    message: "Cannot be empty",
  });

  const handlePress = () => {
    if (input === "") {
      console.log(input);
      setError((prev) => ({
        ...prev,
        state: true,
        message: "Please add a link",
      }));
    } else {
      setInput("");
      fetchData(input);
    }
  };

  const fetchData = async (input: string) => {
    try {
      const response = await fetch("https://is.gd/create.php?format=json&", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `url=${encodeURIComponent(input)}`,
      });
      const result = await response.json();
      setUrls((prev) => [
        ...prev,
        { shortUrl: result.shorturl, longUrl: input },
      ]);
    } catch {
      setError((prev) => ({ ...prev, state: true, message: "Failed" }));
    }
  };

  useEffect(() => {
    console.log(urls);
  }, [urls]);

  return {
    input,
    setInput,
    handlePress,
    urls,
    error,
  };
};

export default useAPI;
