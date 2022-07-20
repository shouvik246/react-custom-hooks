import { useEffect, useState } from "react";
import axios from "axios";

const useCustomData = (data) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async (data) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/${data}`);
    setPosts(res.data);
  };

  useEffect(() => {
    getPosts(data);
  }, [data]);

  return posts;
};

export default useCustomData;
