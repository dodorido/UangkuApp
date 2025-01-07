import React from "react";
import {summary} from "./data.json"
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
class ModalStatistik extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    const statistik = this.props.hitungStatistik();
    return (
      <>
        <button
          onClick={this.handleShow}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Lihat Statistik Bulanan
        </button>

        {this.state.show && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Statistik Bulanan</h2>
                <button
                  className="text-gray-400 hover:text-gray-600"
                  onClick={this.handleClose}
                >
                  ×
                </button>
              </div>
              <div>
                {Object.entries(statistik).map(([bulan, data], index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-semibold">{bulan}</h3>
                    <p>Pemasukan: Rp. {data.pemasukan.toLocaleString('id-ID')}</p>
                    <p>Pengeluaran: Rp. {data.pengeluaran.toLocaleString('id-ID')}</p>
                  </div>
                  
                ))}
              </div>
              <h10 className="text-blue-600">
              <Link to="/financial-chart"> FLOWCHART HERE
              </Link>
              </h10>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={this.handleClose}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ModalStatistik;
