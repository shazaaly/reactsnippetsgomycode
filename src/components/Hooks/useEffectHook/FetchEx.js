import axios from "axios";
import React, { useEffect, useState } from "react";

export const FetchEx = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    /*clean up */
    let isFetched = false;
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => res.data)
      .then((data) => setData(data[0].name));

    return () => {
      isFetched = true;
    };
  }, [data]);
  return <div> Fetched data :{data}</div>;
};
