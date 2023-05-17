const midtransClient = require("midtrans-client");

export default function handler(req, res) {
  if (req.method === "POST") {
    /*Install midtrans-client (https://github.com/Midtrans/midtrans-nodejs-client) NPM package.
npm install --save midtrans-client*/

    //SAMPLE REQUEST START HERE

    // Create Snap API instance
    let snap = new midtransClient.Snap({
      // Set to true if you want Production Environment (accept real transaction).
      isProduction: false,
      serverKey: "SB-Mid-server-YVmyfI09qmV5uR1VSXBHeKPn",
      clientKey: "SB-Mid-client-pYuzgpxcsfVL3ve5",
    });

    let parameter = {
      transaction_details: {
        order_id: "YOUR-ORDERID-1234565",
        gross_amount: 10000,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: "budi",
        last_name: "pratama",
        email: "budi.pra@example.com",
        phone: "08111222333",
      },
    };

    snap.createTransaction(parameter).then((transaction) => {
      // transaction token
      let transactionToken = transaction.token;

      console.log("transactionToken:", transactionToken);
      return res.status(200).json({ token: transactionToken });
    });
  } else {
    // Handle any other HTTP method
  }
}
