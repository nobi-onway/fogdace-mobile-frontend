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
      bigPictureURL:
        "https://img.freepik.com/free-vector/flat-design-veterinary-center-labels-template_23-2149730828.jpg?w=826&t=st=1698944399~exp=1698944999~hmac=5340b3504fa3e593f80009eccc87c18dbe9bd6c4b5456fa39b35c04f08e3c05c",
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
