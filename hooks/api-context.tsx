import { useState } from "react";

const useAPI = () => {
  const [input, setInput] = useState("");
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState({
    state: false,
    message: "",
  });

  const handleBlur = () => {
    if (input === "") {
      setError((prev) => ({
        ...prev,
        state: true,
        message: "Please add a link",
      }));
    } else if (
      !input.match(
        /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
      )
    ) {
      setError((prev) => ({ ...prev, state: true, message: "Invalid URL" }));
    } else {
      setError((prev) => ({ ...prev, state: false, message: "" }));
    }
  };

  const handlePress = () => {
    if (input === "") {
      setError((prev) => ({
        ...prev,
        state: true,
        message: "Please add a link",
      }));
    } else if (
      !input.match(
        /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
      )
    ) {
      setError((prev) => ({ ...prev, state: true, message: "Invalid URL" }));
    } else {
      setError((prev) => ({ ...prev, state: false, message: "" }));
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
      setError((prev) => ({
        ...prev,
        state: true,
        message: "Failed to fetch",
      }));
    }
  };

  return {
    input,
    setInput,
    handlePress,
    handleBlur,
    urls,
    error,
  };
};

export default useAPI;
