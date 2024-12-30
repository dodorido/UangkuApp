import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";

class ModalCreate extends React.Component {
    constructor() {
      super();
      this.state = {
        show: false,
        deskripsi : '',
        nominal : 0,
        tanggal : '',
        category : ''
      };
  
      this.handleClose = this.handleClose.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.tambahItem = this.tambahItem.bind(this);
    }
  
    handleClose() {
      this.setState({
        show: false,
      });
    }
  
    handleShow() {
      this.setState({
        show: true,
        category : this.props.category
      });
    }
  
    handleChange(evt) {
      this.setState({
        [evt.target.name] : evt.target.value
      })
      console.log(this.state)
    }
  
    tambahItem() { 
      const data = {
        deskripsi : this.state.deskripsi,
        nominal : parseInt(this.state.nominal),
        tanggal : this.state.tanggal,
        category : this.state.category
      }
      const fntambahItem = this.props.action;
      fntambahItem(data);
      this.setState({
        show: false,
      })
    }
    render() {
      return (
        <>
          {/* Button untuk membuka modal */}
          <button onClick={this.handleShow} className={this.props.variant}>
            {this.props.text}
            {this.props.icon === "FaCirclePlus" && <FaCirclePlus className="ml-2" />}
            {this.props.icon === "FaMinusCircle" && <FaMinusCircle className="ml-2" />}
          </button>
  
          {/* Modal */}
          {this.state.show && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg shadow-lg w-96">
                {/* Header Modal */}
                <div className="flex justify-between items-center p-4 border-b">
                  <h2 className="text-lg font-semibold">{this.props.modalHeading}</h2>
                  <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={this.handleClose}
                  >
                    ×
                  </button>
                </div>
  
                {/* Body Modal */}
                <div className="p-4">
                <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                      <input
                            type="text"
                            placeholder="Masukkan Deskripsi"
                            name="deskripsi"
                            value={this.state.deskripsi}
                            onChange={this.handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nominal</label>
                      <input
                            type="number"
                            placeholder="Masukkan Deskripsi"
                            name="nominal"
                            value={this.state.nominal}
                            onChange={this.handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
  
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
                      <input
                            type="date"
                            placeholder="Masukkan Deskripsi"
                            name="tanggal"
                            value={this.state.tanggal}
                            onChange={this.handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
  
                    <div>
                      <input
                            type="hidden"
                            placeholder="masukkan Deskripsi"
                            name="category"
                            value={this.state.category}
                            onChange={this.handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                </div>
  
                {/* Footer Modal */}
                <div className="flex justify-end items-center p-4 border-t">
                  <button
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={this.tambahItem}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    onClick={this.tambahItem}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      );
    }
  }

  export default ModalCreate;