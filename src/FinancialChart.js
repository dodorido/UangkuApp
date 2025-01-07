import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import summary from './data.json';
import { Link } from "react-router-dom";
const FinancialChart = () => {
  // Proses data untuk mengelompokkan transaksi per tanggal
  const processData = () => {
    const groupedData = {};
    
    summary.summary.forEach(item => {
      const date = new Date(item.tanggal);
      const dateStr = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
      
      if (!groupedData[dateStr]) {
        groupedData[dateStr] = { date: dateStr, pemasukan: 0, pengeluaran: 0 };
      }
      
      if (item.category === 'IN') {
        groupedData[dateStr].pemasukan += item.nominal;
      } else {
        groupedData[dateStr].pengeluaran += item.nominal;
      }
    });

    // Convert to array and sort by date
    return Object.values(groupedData).sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  };

  const data = processData();

  const formatRupiah = (value) => {
    return `Rp ${new Intl.NumberFormat('id-ID').format(value)}`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border rounded shadow-lg">
          <p className="text-sm font-bold mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className={`text-sm ${entry.name === 'pemasukan' ? 'text-green-500' : 'text-red-500'}`}>
              {entry.name === 'pemasukan' ? 'Pemasukan: ' : 'Pengeluaran: '}
              {formatRupiah(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[500px] p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Tren Transaksi Keuangan</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            tickFormatter={formatRupiah}
            tick={{ fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="pemasukan"
            name="Pemasukan"
            stroke="#10B981"
            strokeWidth={2}
            dot={{ r: 6 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="pengeluaran"
            name="Pengeluaran"
            stroke="#EF4444"
            strokeWidth={2}
            dot={{ r: 6 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div>
        <h10 className="mt-2 cursor-pointer bg-green-500 rounded mx-auto">
        <Link to="/Homepage"  className="text-inherit no-underline text-white"> HOMEPAGE
        </Link>
        </h10>
      </div>
    </div>
  );
};

export default FinancialChart;