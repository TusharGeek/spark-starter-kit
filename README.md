# Fashion Store Self-Checkout System (e-Cart)

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
3. **Review Cart**: Customers can view the items, adjust quantities, or remove products.
4. **Payment**: Using Stripe, customers can securely pay for their purchases.
5. **Show Receipt**: Customers present the digital receipt to store staff and exit without waiting in a queue.

## Installation & Setup

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
   npm run backend:node
   ```

   For Python:

   ```bash
   python manage.py runserver
   ```

4. **Run Frontend**:

   ```bash
   npm run frontend
   ```

5. **Environment Variables**:
   Set up your environment variables for Stripe in a `.env` file:

   ```
   STRIPE_API_KEY=your_stripe_api_key
   ```

6. **Build and Serve**:
   ```bash
   npm run build
   npm run serve
   ```

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Make your changes and commit them.
4. Open a pull request for review.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any issues, questions, or contributions, please contact the development team at [email@example.com].
