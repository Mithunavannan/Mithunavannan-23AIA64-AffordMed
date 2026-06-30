import axios from "axios";

const BASE_URL =
  "http://4.224.186.213/evaluation-service";

export async function fetchNotifications(
  page = 1,
  limit = 10,
  notificationType = "",
  token
) {
  const response = await axios.get(
    `${BASE_URL}/notifications`,
    {
      params: {
        page,
        limit,
        ...(notificationType && {
          notification_type: notificationType,
        }),
      },
      headers: {
        Authorization: token,
      },
    }
  );

  return response.data;
}