# SplitEasy — Bill Splitter

SplitEasy is a simple serverless bill-splitting web app built for a DevOps project. Users can sign up, log in, create equal bill splits, and view their previous split history.

## Tech Stack

- Frontend: React
- Backend: Node.js AWS Lambda
- API: API Gateway
- Database: DynamoDB
- Authentication: AWS Cognito
- CI/CD: GitHub Actions
- Infrastructure as Code: AWS SAM
- Hosting: S3 Static Website Hosting

## Features

- User signup and login
- Create a new bill split
- Add bill name, total amount, and people
- Equal split calculation
- Save split history
- View previous splits on dashboard
- Unit-tested backend logic

## Project Structure

```text
spliteasy/
├── frontend/
├── backend/
│   ├── src/
│   │   ├── calculate.js
│   │   ├── createSplit.js
│   │   └── getSplits.js
│   └── tests/
│       ├── calculate.test.js
│       ├── createSplit.test.js
│       └── getSplits.test.js
├── infra/
│   └── template.yaml
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
```

## Architecture Diagram

User
 │
 ├── Browser
 │     │
 │     ▼
 │  S3 React Frontend
 │     │
 │     ▼
 │  API Gateway
 │   /       \
 │  ▼         ▼
createSplit  getSplits
 Lambda      Lambda
 │             │
 └─────► DynamoDB
 │
 ▼
Cognito Auth

## Backend Test Instructions

cd backend
npm install
npm test