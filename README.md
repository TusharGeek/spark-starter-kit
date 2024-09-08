# Fashion Store Self-Checkout System (Jaldi Cart)
Project Live link: https://celebrated-sunshine-eeb6c3.netlify.app
## 🗒️ Project Overview

This project is designed to simplify the checkout process in fashion stores by enabling customers to scan product barcodes, add them to a digital cart, and complete their payment directly from their mobile devices. The system eliminates the need for standing in queues and expensive self-checkout machines, providing a seamless and cost-effective solution for both customers and store owners.

## 📝 Key Features

- **Barcode Scanning**: Customers can scan product barcodes using their smartphones.
- **Digital Cart**: Items are added to a digital cart, allowing customers to view and manage their selections in real-time.
- **Stripe Integration**: Secure and quick payments through Stripe.
- **Monorepo Setup**: Managed using Nx for consistent development and streamlined workflows across the backend and frontend.
- **Multi-Language Backend**: Powered by Node.js and Python.
- **ReactJS Frontend**: Responsive and mobile-friendly user interface for a smooth shopping experience.
- **Cost-Effective Solution**: Eliminates the need for expensive self-checkout machines and reduces queues, improving customer satisfaction.

## 💻 Tech Stack

- **Monorepo**: Nx
- **Backend**:
  - Node.js
  - Python
- **Frontend**: ReactJS
- **Payment Gateway**: Stripe

## 🌐 System Flow

1. **Scan Product**: Customers scan the barcode of a product using their mobile device.
2. **Add to Cart**: The product is added to a digital cart.
3. **Ask AI About the product**: Ask AI regarding the product.
4. **Review Cart**: Customers can view the items, adjust quantities, or remove products.
5. **Payment**: Using Stripe, customers can securely pay for their purchases.
6. **Show Receipt**: Customers present the digital receipt to store staff and exit without waiting in a queue.

## Installation & Setup
   setup mysql database cartDB.sql; change the credentials in dbConnection.js file in cart-backend
1. **Clone the repository**:

   ```bash
   git clone <repo-url>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run Backend**:
   For Node.js:

   ```bash
   npx nx run cart-backend:server
   ```


4. **Run Frontend**:

   ```bash
   npx nx run cart-system:server
   ```



