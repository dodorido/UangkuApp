import React from "react";

class ModalEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            deskripsi: props.data.deskripsi,
            nominal: props.data.nominal,
            tanggal: props.data.tanggal,
            category: props.data.category
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({
            show: true,
            deskripsi: this.props.data.deskripsi,
            nominal: this.props.data.nominal,
            tanggal: this.props.data.tanggal,
            category: this.props.data.category
        });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit() {
        const updatedData = {
            deskripsi: this.state.deskripsi,
            nominal: parseInt(this.state.nominal),
            tanggal: this.state.tanggal,
            category: this.state.category
        };
        this.props.onEdit(this.props.index, updatedData);
        this.handleClose();
    }

    render() {
        return (
            <>
                <button onClick={this.handleShow} className="text-blue-500 mr-2">
                    Edit
                </button>

                {this.state.show && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white rounded-lg shadow-lg w-96">
                            <div className="flex justify-between items-center p-4 border-b">
                                <h2 className="text-lg font-semibold">Edit Transaksi</h2>
                                <button className="text-gray-400 hover:text-gray-600" onClick={this.handleClose}>
                                    ×
                                </button>
                            </div>

                            <div className="p-4">
                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                                    <input
                                        type="text"
                                        name="deskripsi"
                                        value={this.state.deskripsi}
                                        onChange={this.handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nominal</label>
                                    <input
                                        type="number"
                                        name="nominal"
                                        value={this.state.nominal}
                                        onChange={this.handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
                                    <input
                                        type="date"
                                        name="tanggal"
                                        value={this.state.tanggal}
                                        onChange={this.handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end items-center p-4 border-t">
                                <button
                                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
                                    onClick={this.handleClose}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                                    onClick={this.handleSubmit}
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

export default ModalEdit;