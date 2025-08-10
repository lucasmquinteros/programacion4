import { useEffect, useState } from "react";

export const useReq = ({ promise }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    promise()
      .then((data) => setData(data))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading };
};
