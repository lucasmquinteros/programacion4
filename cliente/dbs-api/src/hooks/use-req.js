import { useEffect, useState } from "react";

export const useReq = ({ promise }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    promise()
      .then((data) => setData(data))
      .finally(() => setIsLoading(false));
  }, []);

  return { data: data, isLoading: isLoading };
};
