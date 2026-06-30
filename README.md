Parameters
stack

Allowed values:

backend
frontend
level

Allowed values:

debug
info
warn
error
fatal
packageName

Backend:

cache
controller
cron_job
db
domain
handler
repository
route
service

Frontend:

api
component
hook
page
state
style

Common:

auth
config
middleware
utils
message

Descriptive log message.

Example
Log(
  "frontend",
  "info",
  "api",
  "Notifications fetched successfully"
);
Features
Reusable
API-based logging
Error handling
Supports frontend and backend logging

---

# 2. `notification-app-be/README.md`

```md
# Notification Backend

## Stage 6 - Priority Notifications

This module implements the priority notification logic required in the assessment.

## Priority Order

1. Placement
2. Result
3. Event

## Algorithm

```js
const priority = {
  Placement: 3,
  Result: 2,
  Event: 1
};

Notifications are sorted by priority and the top N notifications are returned.

Complexity

Sorting:
O(n log n)

Top N Extraction:
O(n)

Scalability

For large datasets:

Priority Queue / Heap can be used
Redis cache can be added
Read replicas can be introduced

---

# 3. `notification-system-design.md`

Paste this entire content:

```md
# Stage 1

## Core Actions

1. Fetch Notifications
2. Filter Notifications
3. Fetch Priority Notifications
4. Mark Notification Read
5. Mark All Notifications Read

## APIs

### Get Notifications

GET /notifications

Response:

```json
{
  "notifications": []
}
Filter Notifications

GET /notifications?notification_type=Placement

Get Priority Notifications

GET /notifications/priority?limit=10

Real-Time Updates

WebSockets can be used to push notifications instantly to connected clients.

Stage 2
Database Design

notifications

Column	Type
id	UUID
student_id	INT
type	VARCHAR
message	TEXT
is_read	BOOLEAN
created_at	TIMESTAMP
Indexes

(student_id)

(student_id, is_read)

(student_id, created_at)

Scalability
Pagination
Database Indexing
Read Replicas
Redis Cache
Stage 3

Query:

SELECT *
FROM notifications
WHERE studentID = 1042
AND isRead = false
ORDER BY createdAt ASC;
Why Slow?

Without indexes, the database performs a full table scan.

Recommended Index
CREATE INDEX idx_notifications
ON notifications(studentID,isRead,createdAt);
Why Not Index Every Column?
Increased storage
Slower writes
Higher maintenance cost
Stage 4
Performance Improvements
Pagination

Pros:

Reduced data transfer
Infinite Scroll

Pros:

Better user experience
Redis Cache

Pros:

Faster reads

Cons:

Additional infrastructure cost
Stage 5

Current implementation is sequential.

Problems:

Slow for 50,000 students
Email API bottleneck
Poor scalability
Improved Design

Producer → Queue → Workers

Components:

Notification Worker
Email Worker
Database Worker

Benefits:

Parallel processing
Retry support
Fault tolerance
Horizontal scaling
Stage 6
Priority Notification Logic

Priority:

Placement > Result > Event

const priority = {
  Placement: 3,
  Result: 2,
  Event: 1
};

notifications.sort(
  (a,b) =>
    priority[b.Type] -
    priority[a.Type]
);

const top10 = notifications.slice(0,10);
Complexity

O(n log n)

Future Optimization

Use a Max Heap / Priority Queue.

Stage 7
Frontend Features Implemented
Notification Listing
Pagination
Notification Filtering
Material UI Interface
API Integration
Error Handling
Loading State
Priority Notification Logic
Logging Middleware Integration
Technology Stack

Frontend:

React
Vite
Material UI
Axios

Backend:

Node.js
Express

Logging:

AffordMed Logging Middleware

---

# Finally Push

```bash
git add .

git commit -m "Implement logging middleware"

git commit -am "Implement notification UI and API integration"

git commit -am "Add priority notification logic"

git commit -am "Complete system design documentation"

git push origin main
