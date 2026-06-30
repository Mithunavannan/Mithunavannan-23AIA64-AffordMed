const priority = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function getTopNotifications(
  notifications,
  n = 10
) {
  return notifications
    .sort(
      (a, b) =>
        priority[b.Type] -
        priority[a.Type]
    )
    .slice(0, n);
}

module.exports = {
  getTopNotifications,
};