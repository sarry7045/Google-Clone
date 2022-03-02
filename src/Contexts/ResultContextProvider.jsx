import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl =
  "https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk";

const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`);
  };
  return <div>ResultContextProvider</div>;
};

export default ResultContextProvider;
