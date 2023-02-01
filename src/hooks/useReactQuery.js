import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const fetchResponse = () => {
  return useQuery({
    queryKey: ["chatGPT-response"],
    queryFn: async () => {
      return await Axios.get(
        "https://api.api-ninjas.com/v1/loremipsum?paragraphs=2",
        {
          headers: {
            "X-Api-Key": "rL1hLqNnQdSUkpsTBqiA7g==FgHTz0OZtGWe8aAW",
          },
          //   set to false to prevent fetching on mount, so we can fetch when btn clicked
          enabled: false,
        }
      ).then((res) => res.data);
    },
  });
};

export { fetchResponse };
