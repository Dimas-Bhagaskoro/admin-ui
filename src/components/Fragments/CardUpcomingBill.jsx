import React, { useState, useEffect } from "react";
import Card from "../Elements/Card";
import axios from "axios";

// SOAL 4: Mengambil data bills secara dinamis dari API menggunakan token login mahasiswa
function CardUpcomingBill() {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBills = async () => {
      const token = localStorage.getItem('token'); 
      try {
        const res = await axios.get('https://jwt-auth-eight-neon.vercel.app/bills', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        console.log("Data Bills mentah dari API:", res.data);

        // Memastikan format data berbentuk array sebelum di-set ke state
        if (Array.isArray(res.data)) {
          setBills(res.data);
        } else if (res.data && Array.isArray(res.data.data)) {
          setBills(res.data.data);
        } else {
          setBills(res.data ? [res.data] : []);
        }
      } catch (err) {
        console.error("Gagal mengambil data bills:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBills();
  }, []);

  return (
    <>
      <Card
        title="Upcoming Bill"
        link="/bill"
        desc={
          <div className="flex flex-col justify-around h-full">
            {loading ? (
              <div className="text-center p-6 text-xs text-gray-400 animate-pulse">
                Loading upcoming bills...
              </div>
            ) : bills.length === 0 ? (
              <div className="text-center p-6 text-xs text-gray-400">
                No upcoming bills found.
              </div>
            ) : (
              bills.map((item, index) => {
                const billName = item.name || item.title || "Bill Item";
                const billAmount = item.amount || item.total || "0";
                const fullDate = item.date || item.due_date || "";
                
                let monthDisplay = "Due";
                let dateDisplay = "00";

                // Memotong string tanggal "2025-05-14" secara manual dan aman
                if (fullDate && fullDate.includes("-")) {
                  const parts = fullDate.split("-");
                  if (parts.length >= 3) {
                    const monthNumber = parts[1]; // Mengambil "05"
                    dateDisplay = parts[2];       // Mengambil "14"

                    const months = {
                      "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr",
                      "05": "May", "06": "Jun", "07": "Jul", "08": "Aug",
                      "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec"
                    };
                    monthDisplay = months[monthNumber] || "Due";
                  }
                }

                return (
                  <div key={item.id || index} className="flex justify-between pt-3 pb-3 border-b border-gray-50 last:border-none">
                    <div className="flex">
                      {/* Kotak Tanggal */}
                      <div className="bg-special-bg p-4 rounded-lg flex flex-col items-center justify-center min-w-15">
                        <span className="text-xs text-gray-500">{monthDisplay}</span>
                        <span className="text-2xl font-bold text-gray-700">{dateDisplay}</span>
                      </div>
                      {/* Nama dan Deskripsi Tagihan */}
                      <div className="ms-6 flex flex-col justify-center">
                        <span className="font-bold text-gray-700 text-sm capitalize">{billName}</span>
                        <span className="text-xs text-gray-400 mt-0.5">
                          Last Charge - {item.lastCharge || "Never"}
                        </span>
                      </div>
                    </div>
                    {/* Harga/Jumlah Tagihan */}
                    <div className="flex items-center">
                      <span className="py-2 px-4 border border-gray-05 rounded-lg font-bold text-gray-700 text-sm">
                        {String(billAmount).includes('$') ? billAmount : `$${billAmount}`}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        }
      />
    </>
  );
}

export default CardUpcomingBill;