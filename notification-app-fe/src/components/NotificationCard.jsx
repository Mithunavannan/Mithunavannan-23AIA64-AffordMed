export default function NotificationCard({
  notification,
}) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{notification.Type}</h3>

      <p>{notification.Message}</p>

      <small>
        {notification.Timestamp}
      </small>
    </div>
  );
}