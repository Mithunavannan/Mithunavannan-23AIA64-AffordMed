# Stage 1

## Core Actions

1. Fetch Notifications
2. Mark Notification Read
3. Mark All Read
4. Filter Notifications
5. Fetch Priority Notifications

## APIs

GET /notifications

GET /notifications?type=Placement

PATCH /notifications/:id/read

PATCH /notifications/read-all

GET /notifications/priority?limit=10