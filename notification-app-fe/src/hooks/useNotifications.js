import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications(
  page,
  filter,
  token
) {
  const [notifications, setNotifications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  const [totalPages, setTotalPages] =
    useState(1);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const data =
          await fetchNotifications(
            page,
            10,
            filter,
            token
          );

        setNotifications(
          data.notifications || []
        );

        setTotalPages(
          Math.ceil(
            (data.total || 10) / 10
          )
        );

        setError(null);
      } catch (err) {
        setError(
          err?.message ||
            "Failed to fetch notifications"
        );
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [page, filter, token]);

  return {
    notifications,
    totalPages,
    loading,
    error,
  };
}