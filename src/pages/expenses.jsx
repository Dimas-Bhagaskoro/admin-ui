import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from '../components/Layouts/MainLayout';
import Icon from '../components/Elements/Icon';

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('https://jwt-auth-eight-neon.vercel.app/expenses', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        // Log data ke console untuk memastikan isi objek asli dari API mahasiswa kamu
        console.log("Data Expenses dari API:", res.data);
        
        setExpenses(res.data);
      } catch (err) {
        console.error("Gagal mengambil data expenses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchExpenses();
  }, []);

  // Menggunakan Icon.Expense secara seragam agar aman dari error tipe data undefined
  const renderCategoryIcon = () => {
    return <Icon.Expense />;
  };

  return (
    <MainLayout type="expenses">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-700 mb-6">Expenses Comparison</h1>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-48 bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        ) : expenses.length === 0 ? (
          /* Kondisi jika data kosong dari API */
          <div className="text-center py-10 text-gray-400">
            No expenses data found from server.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expenses.map((expense, idx) => {
              // Menghandel variasi properti API: membaca 'category' atau fallback ke 'title'
              const categoryName = expense.category || expense.title || 'Expense';
              // Menghandel nilai total: membaca 'total' atau fallback ke 'amount'
              const totalAmount = expense.total || expense.amount || '0';

              return (
                <div key={expense.id || idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
                  
                  {/* Bagian Header Card Kategori Utama */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gray-100 rounded-xl text-gray-600">
                        {renderCategoryIcon()}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 capitalize">{categoryName}</h3>
                        <p className="text-lg font-bold text-gray-800">
                          {String(totalAmount).includes('$') ? totalAmount : `$${totalAmount}`}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-emerald-500 flex items-center gap-1 justify-end">
                        {expense.percentage || '0'}% ↓
                      </span>
                      <p className="text-[10px] text-gray-400 mt-0.5">Compare to last month</p>
                    </div>
                  </div>

                  {/* Bagian Sub-Item Detail (Menggunakan Fallback jika nested array .items tidak ada) */}
                  <div className="flex flex-col gap-3 mt-2">
                    {expense.items && expense.items.length > 0 ? (
                      expense.items.map((subItem, index) => (
                        <div key={index} className="border-t border-gray-100 pt-3 flex justify-between items-center">
                          <div>
                            <p className="text-sm font-bold text-gray-700">{subItem.name || subItem.title}</p>
                            <p className="text-[11px] text-gray-400 mt-0.5">{subItem.date || expense.date}</p>
                          </div>
                          <span className="text-sm font-bold text-gray-800">
                            {String(subItem.amount).includes('$') ? subItem.amount : `$${subItem.amount}`}
                          </span>
                        </div>
                      ))
                    ) : (
                      /* Jika data bertingkat tidak ada, buat 1 baris detail tiruan berdasarkan objek data flat */
                      <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                        <div>
                          <p className="text-sm font-bold text-gray-700">General {categoryName}</p>
                          <p className="text-[11px] text-gray-400 mt-0.5">{expense.date || 'Today'}</p>
                        </div>
                        <span className="text-sm font-bold text-gray-800">
                          {String(totalAmount).includes('$') ? totalAmount : `$${totalAmount}`}
                        </span>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ExpensesPage;