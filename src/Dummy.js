import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { baseUrl } from "./baseUrl";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  useEffect(() => {
    getHistory();
  }, []);
  const [orderHistoryData, setOrderHistoryData] = useState([]);
  const [orderHistoryData1, setOrderHistoryData1] = useState([]);
  const getHistory = () => {
    axios.get(baseUrl + "tablehistory").then((res) => {
      setOrderHistoryData(res.data.data.reverse());
      setOrderHistoryData1(res.data.data.reverse());
      setHistoryBill(res.data.data.reverse()[0]);
    });
  };

  const navigate = useNavigate();

  const [historyBill, setHistoryBill] = useState({});
  const [currMonth, setCurrMonth] = useState("");
  const [currYear, setCurrYear] = useState("");
  const [currDate, setCurrDate] = useState("");

  const showTime = (x) => {
    const d = new Date(x);
    const dd = d.getDate();
    const mm = d.getMonth() + 1;
    const yy = d.getFullYear();
    const t = d.getHours();
    const nt = t > 12 ? t - 12 : t;
    const m = d.getMinutes();
    const ampm = t > 12 ? "PM" : "AM";
    const zeroMin = m < 10 ? 0 : "";
    const finaldate = dd + "/" + mm + "/" + yy;
    return `${finaldate}   ${nt}:${zeroMin}${m}${ampm}`;
  };
  const filteryear = (x) => {
    const list = orderHistoryData1;
    const list1 = x !== "" ? list.filter((i) => i.year == x) : list;
    const list2 =
      currMonth !== "" ? list1.filter((i) => i.month == currMonth) : list1;
    const list3 =
      currDate !== "" ? list2.filter((i) => i.date == currDate) : list2;
    setOrderHistoryData(list3);
  };
  const filterMonth = (x) => {
    const list = orderHistoryData1;
    const list1 = x !== "" ? list.filter((i) => i.month == x) : list;
    const list2 =
      currYear !== "" ? list1.filter((i) => i.year == currYear) : list1;
    const list3 =
      currDate !== "" ? list2.filter((i) => i.date == currDate) : list2;
    setOrderHistoryData(list3);
  };
  const filterDate = (x) => {
    const list = orderHistoryData1;
    const list1 = x !== "" ? list.filter((i) => i.date == x) : list;
    const list2 =
      currMonth !== "" ? list1.filter((i) => i.month == currMonth) : list1;
    const list3 =
      currYear !== "" ? list2.filter((i) => i.year == currYear) : list2;
    setOrderHistoryData(list3);
  };

  const date = new Date();
  const cm = date.getMonth();

  const monthTotal = () => {
    const m = orderHistoryData
      .map((i) => i.totalBill)
      .reduce((a, b) => a + b, 0);
    return m;
  };
  const normalMonth = ["April", "June", "September", "November"];
  const noOfDays =
    currMonth === "February"
      ? currYear % 4 === 0
        ? 29
        : 28
      : normalMonth.includes(currMonth)
      ? 30
      : currMonth !== ""
      ? 31
      : 0;
  const data = new Array(noOfDays).fill().map((i, n) => n + 1);

  return (
    <div>
      <div style={{}}>
        <Sidebar />
        <div
          style={{
            width: "80%",
            height: 70,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "20%",
            justifyContent: "space-around",
          }}
        >
          {/* {JSON.stringify(monthFullList)} */}
          <select
            onChange={(e) => {
              setCurrYear(e.target.value);
              filteryear(e.target.value);
            }}
            style={{ width: "12%", borderRadius: 5 }}
          >
            <option selected disabled>
              select year
            </option>
            <option value={""}>All</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
            <option>2027</option>
          </select>
          <select
            style={{ width: "12%", borderRadius: 5 }}
            onChange={(e) => {
              setCurrMonth(e.target.value);
              filterMonth(e.target.value);
            }}
          >
            <option selected disabled>
              select month
            </option>
            <option value={""}>All</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
          <select
            style={{ width: "12%", borderRadius: 5 }}
            onChange={(e) => {
              setCurrDate(e.target.value);
              filterDate(e.target.value);
              setCurrDate(e.target.value);
            }}
          >
            <option selected disabled>
              select date
            </option>
            <option value={""}>All</option>
            {data.map((i) => (
              <option>{i}</option>
            ))}
          </select>
          <div
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "row",
              height: 20,
              gap: 10,
            }}
          >
            <label
              style={{
                textDecoration: "underline",
                marginTop: 5,
                fontWeight: "bold",
              }}
            >
              Total sale
            </label>
            <button
              style={{
                borderRadius: 5,
                float: "right",
                backgroundColor: "green",
                border: "none",
                height: 30,
                width: 100,
                color: "white",
                fontWeight: "bolder",
              }}
            >
              ₹{monthTotal()}
            </button>
          </div>
        </div>

        <div
          className="dashdiv"
          style={{
            backgroundColor: "#f1f5f7",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "30%",
              marginLeft: 10,
              display: "flex",
              flexDirection: "column",
              height: "85vh",
              overflowY: "scroll",
            }}
          >
            {orderHistoryData?.map((i) => (
              <div
                onClick={() => setHistoryBill(i)}
                style={{
                  width: "100%",
                  height: 80,
                  backgroundColor:
                    i.orderId == historyBill.orderId ? "#f4702e" : "",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  padding: 10,
                  marginTop: 6,
                  color: i.orderId == historyBill.orderId ? "white" : "black",
                  borderRadius: 5,
                }}
              >
                <div style={{ width: "70%" }}>
                  <label>{showTime(i?.created_at)}</label>
                  <br />
                </div>
                <div style={{ width: "30%" }}>
                  <b>₹ {i?.totalBill}</b>
                </div>
                <label>Order Id {i?.orderId} </label>
                <br />
              </div>
            ))}
          </div>

          <div style={{ width: "70%", overflowY: "scroll" }}>
            <div style={{ paddingLeft: "3%" }}>
              <div
                style={{
                  width: "95%",
                  marginLeft: 10,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 80,
                    backgroundColor: "#f4702e",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    padding: 10,
                    marginTop: 5,
                    color: "white",
                    borderRadius: 5,
                  }}
                >
                  <div style={{ width: "70%" }}>
                    <label>{showTime(historyBill?.created_at)}</label>
                    <br />
                  </div>

                  <label>Order Id {historyBill?.orderId} </label>
                  <br />
                </div>
              </div>
              <table style={{ width: "95%" }}>
                <thead
                  style={{ height: "5vh", borderBottom: "1px solid grey" }}
                >
                  <th style={{ width: "50%" }}>Item</th>
                  <th style={{ width: "10%", textAlign: "center" }}>Qty.</th>
                  <th style={{ width: "20%", textAlign: "center" }}>Price</th>
                  <th style={{ width: "20%", textAlign: "right" }}>Amount</th>
                </thead>
                <tbody>
                  {historyBill?.order?.map((i) => (
                    <tr
                      style={{
                        height: "7vh",
                        borderBottom: "1px solid grey",
                        width: "100%",
                      }}
                    >
                      <td>{i.item}</td>
                      <td style={{ width: "20%", textAlign: "center" }}>
                        {i.quantity}
                      </td>
                      <td style={{ width: "20%", textAlign: "center" }}>
                        {i.price}
                      </td>
                      <td
                        style={{
                          width: "20%",
                          textAlign: "right",
                          fontWeight: "550 ",
                        }}
                      >
                        ₹ {i?.price * i.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div
                style={{
                  width: "95%",
                  height: "5vh",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b>Sub Total :</b>
                <b style={{ fontWeight: "bolder" }}>
                  ₹ {historyBill?.totalBill}
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
