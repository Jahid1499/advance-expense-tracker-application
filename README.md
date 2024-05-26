# About this Application & How to system work

- Create a new transaction with name, type - (income, expense), amount
- When create a new transaction, it must be validate
- Show all transaction
- Income type transaction display with blue color and expense display with purple color
- System should be capable delete a single transaction and before delete a transaction, system must be need a confirmation from user
- System display the current balance ( calculate income and expense )
- System should be capable edit a single transaction
- When press the edit button, edited information set on the same create transaction from
- When edited a transection, display update transaction and cancel edit button
- Display only 5 transaction and have a view all transaction button on the footer
- All transaction page have back button for going the home page
- In transaction page have filter option, like transaction name and transaction type
- In transaction page should be paginated, every page show 3 transaction
- Create or update or delete or error for a transaction, system display relevant error message
- Transactions must be synchronized with both frontend and backend
- When create a new transaction and edit a transaction, without reload save in server and show in frontend
- When user create a new transaction, system can’t refetch transaction list that means maintain optimistic update or pessimistic update

# Technology

- React
- Redux
- Typescript
- Tailwind css
- RTK Query
- Json server
- Deploy in vercel

## How to clone project

```sh
git clone https://github.com/Jahid1499/advance-expense-tracker-application.git
```

## How to run server

1. Go to the cloned project directory

```sh
cd advance-expense-tracker-application
```

2. First you need run server - for this follow those step

```sh
cd server
```

```sh
npm i
```

```sh
npm start
```

The server run in http://localhost:5000

> Note: when run server, in the terminal show, which port running the server

## How to run react application

1.  Go to the cloned project directory

```sh
cd advance-expense-tracker-application
```

2. Setup environment - create a .env file in root directory and add those variable

```sh
VITE_API_URL=http://localhost:5000
VITE_ENVIRONMENT_SERVER="development"
VITE_ENVIRONMENT_PAGE_PER_TRANSACTION=5
```

1. Install package

```sh
npm i
```

4. Run application

```sh
npm run dev
```

5. Build application

```sh
npm run build
```

## Documentation

[Application's documentation](https://docs.google.com/document/d/19IhqQ3NALSe9knq0ia_YQ0cZo5kuT2eAeyG0lCKC2O8/edit?usp=sharing)
