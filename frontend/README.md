# 💸 SplitEasy – Serverless Bill Splitting Application

SplitEasy is a cloud-native bill splitting application built using AWS serverless services. Users can securely sign up, log in, create expense splits, and track their expense history in real time.

---

## 🚀 Features

### Authentication

* User registration using Amazon Cognito
* Secure login and logout
* JWT-based authorization

### Expense Splitting

* Create new bill splits
* Automatically calculate individual shares
* Support multiple participants

### Expense History

* View previously created splits
* Track total expenses
* View participant-wise breakdown

### Cloud Native Architecture

* Fully serverless backend
* Event-driven architecture
* Scalable and cost-efficient deployment

---

## 🏗️ Architecture

Frontend (React + Vite)
↓
Amazon API Gateway
↓
AWS Lambda Functions
↓
Amazon DynamoDB

Authentication:
Amazon Cognito User Pool

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* AWS Amplify
* JavaScript
* CSS
* Amazon S3

### Backend

* Node.js
* AWS Lambda
* Amazon API Gateway

### Database

* Amazon DynamoDB

### Authentication

* Amazon Cognito

### Infrastructure

* AWS SAM (Serverless Application Model)

---

## 📂 Project Structure

SplitEasy-Bill-Splitter/

├── frontend/

│ ├── src/

│ ├── public/

│ └── package.json

│

├── backend/

│ ├── src/

│ │ ├── createSplit.js

│ │ └── getSplits.js

│ └── package.json

│

├── infra/

│ ├── template.yaml

│

└── README.md
└── samconfig.toml

---

## ⚙️ Setup Instructions

cd frontend

npm install

Create .env file:

VITE_API_URL=<API_GATEWAY_URL>

VITE_USER_POOL_ID=<COGNITO_USER_POOL_ID>

VITE_USER_POOL_CLIENT_ID=<COGNITO_CLIENT_ID>

VITE_REGION=us-east-1

Run:

npm run dev

---

### Backend Deployment

Build:

sam build -t infra/template.yaml

Deploy:

sam deploy

---

## ☁️ AWS Services Used

* Amazon Cognito
* AWS Lambda
* Amazon API Gateway
* Amazon DynamoDB
* AWS SAM
* Amazon S3

---

## 🔒 Security

* Cognito User Authentication
* JWT Token Authorization
* Protected API Gateway Endpoints
* IAM-Based Service Permissions

---

## 👥 Team Members

* Ansharah Asad (22K-4411)
* Laiba Khan (22K-4610)

---

## 📄 License

This project was developed for educational and learning purposes as part of a DevOps and Cloud Computing project.
