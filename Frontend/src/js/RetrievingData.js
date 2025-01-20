export function fetchTransactions() {
    fetch('http://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => {
            let transactionsList = document.getElementById('transactions-list');
            transactionsList.innerHTML = '';
            data.forEach(transaction => {
                let listItem = document.createElement('li');
                listItem.classList.add('list-group-item');
                listItem.textContent = `${transaction.description}: $${transaction.amount} on ${transaction.date}`;
                transactionsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching transactions:', error));
}



export function fetchAccounts() {
    fetch('http://localhost:3000/api/accounts')
        .then(response => response.json())
        .then(data => {
            let accountList = document.getElementById('account-list');
            accountList.innerHTML = '';
            data.forEach(account => {
                let listItem = document.createElement('li');
                listItem.textContent = `${account.accountName}: $${account.balance}`;
                accountList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching accounts:', error));
}

export function fetchCategories() {
    fetch('http://localhost:3000/api/categories')
        .then(response => response.json())
        .then(data => {
            let categoryList = document.getElementById('category-list');
            categoryList.innerHTML = '';
            data.forEach(category => {
                let listItem = document.createElement('li');
                listItem.textContent = `${category.categoryName}: ${category.subcategories.join(', ')}`;
                categoryList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));
}

export function fetchBudgets() {
    fetch('http://localhost:3000/api/budgets')
        .then(response => response.json())
        .then(data => {
            let budgetList = document.getElementById('budget-list');
            budgetList.innerHTML = '';
            data.forEach(budget => {
                let listItem = document.createElement('li');
                listItem.textContent = `${budget.category}: $${budget.currentSpending} / $${budget.amount}`;
                budgetList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching budgets:', error));
}

window.onload = function() {
    fetchTransactions();
    fetchAccounts();
    fetchCategories();
    fetchBudgets();
}
