# BudgetTrack

BudgetTrack is an application designed to help manage and track budgets for various events. It was built using Angular and TypeScript.

## Description

The application provides a user-friendly interface to create, manage, and track budgets for different events. It includes features such as event creation, budget allocation, expense tracking, and earnings calculation.

## Navigation

The application has a sidebar for easy navigation between different pages. Here's a brief description of each page:

- **Dashboard**: This is the landing page of the application. It provides a summary of all events and their respective budgets.

- **Event Details**: This page provides detailed information about a specific event. Here's what you can do on this page:

  - **View Budget**: You can see the total budget allocated for the event, as well as how much of it has been spent and how much remains.

  - **Track Expenses**: All expenses related to the event are listed here. You can add new expenses, edit existing ones, and mark expenses as paid or unpaid.

  - **Calculate Earnings**: If the event generates income, you can track it here. You can add new income sources, edit existing ones, and see the total income generated by the event.

  - **Manage Event**: You can see the event's manager and contact them if needed. If you are the manager, you can also edit the event's details or delete the event.


## Usage

1. **Login**: To use the application, you first need to log in. If you don't have an account, you can register for one.

2. **Dashboard**: After logging in, you'll be redirected to the Dashboard. Here, you can see a summary of all your events.

3. **Event Details**: Click on an event to view its details. Here, you can track the budget, expenses, and earnings for the event.

4. **Logout**: To log out, click on the logout button in the app bar.

## Development

To run the application locally, you need to have Node.js and Angular CLI installed. After cloning the repository, run `npm install` to install the dependencies. Then, run `ng serve` to start the development server.

## Build

To build the application for production, run `ng build`. The build artifacts will be stored in the `dist/` directory.