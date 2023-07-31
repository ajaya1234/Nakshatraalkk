import React, { useState } from "react";
import axios from "axios";
import Header1 from "./Header1";

const ccAvenue_payment_url = "http://103.104.74.215:3011/";
const ccAvenue_muscat_payment_url = "http://103.104.74.215:3011/muscat/payment";

const Payment = () => {
  const amount = localStorage.getItem("packdetails");
  const iddd = localStorage.getItem("idd");

  console.log("asasdasdasd", iddd);

  const [paymentData, setPaymentData] = useState({
    amount: amount,
    order_id:'124562',
    currency: "INR",
  });

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPaymentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isProcessingPayment) {
      return;
    }

    try {
      setIsProcessingPayment(true);

      const paymentGatewayURL =
        paymentData.gatewayType === "muscat"
          ? ccAvenue_muscat_payment_url
          : ccAvenue_payment_url;

      const redirectURL = `${paymentGatewayURL}?amount=${paymentData.amount}&order_id=${paymentData.order_id}&currency=${paymentData.currency}`;

      window.location.href = redirectURL;
    } catch (error) {
      console.error("Error:", error.message);
      window.location.href = "https://localhost:3011/ccavResponseHandler";

    } finally {
      setIsProcessingPayment(false);
    }

  };

  return (
    <div>
      <Header1 />
      <section class="breadscrumb-section pt-0">
        <div class="container-fluid-lg">
          <div class="row">
            <div class="col-12" >
              <div class="breadscrumb-contain">
      <h2>Payment Details</h2>
</div>
      <form onSubmit={handleSubmit} >
        <div >
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            value={paymentData.amount}
            onChange={handleChange}
          />
        </div>

        <input type="hidden" name="order_id" value={paymentData.order_id} />

        <input type="hidden" name="gatewayType" value="muscat" />
        <button class="btn btn-md bg-dark cart-button text-white w-80" type="submit" disabled={isProcessingPayment}>
          {isProcessingPayment ? "Processing..." : "Proceed to Pay"}
        </button>
      </form>
      </div>
      </div>
</div>

</section>
    </div>
  );
};

export default Payment;
