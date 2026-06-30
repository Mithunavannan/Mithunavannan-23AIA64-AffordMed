const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function getPriorityNotifications(notifications, limit = 10) {
  return [...notifications]
    .sort(
      (a, b) =>
        priorityMap[b.Type] -
        priorityMap[a.Type]
    )
    .slice(0, limit);
}

module.exports = {
  getPriorityNotifications,
};