import { APP_ID, APP_TOKEN } from "../constants/keys";
import { NOTI_URL } from "../constants/url";
import useFetch from "./useFetch";

function useNotify() {
  const { post_fetcher } = useFetch();


  const notify = async (title, body) => {
    const data = {
      appId: APP_ID,
      appToken: APP_TOKEN,
      title: title,
      body: body,
      dateSent: Date.now,
    };
    await post_fetcher(NOTI_URL, data)
      .then((response) => {
        console.log("Notification sent successfully", response.data);
      })
      .catch((error) => {
        console.error("Error sending notification", error);
      });
  };

  return {
    notify,
  };
}

export default useNotify;
