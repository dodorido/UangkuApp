import './App.css';
import React from 'react';
import { FaWallet } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import ModalCreate from './ModalCreate';
import ModalStatistik from './ModalStatistik';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ModalEdit from './ModalEdit';
import data from './data.json';
class HitungModal extends React.Component {
  constructor() {
    super();

    this.state = {
      sisaUang : 0,
      persentaseUang : 0,
      pemasukanUang : 0,
      pengeluaranUang : 0,
      transaksiIN : 0,
      transaksiOUT : 0,
      summary : data.summary // data ke json
    }

    this.tambahItem = this.tambahItem.bind(this);
    this.fnHitung = this.fnHitung.bind(this);
  }
  hitungStatistikBulanan() {
    const statistik = this.state.summary.reduce((acc, transaksi) => {
      const bulanTahun = new Date(transaksi.tanggal).toLocaleString('id-ID', { month: 'long', year: 'numeric' });
      if (!acc[bulanTahun]) {
        acc[bulanTahun] = { pemasukan: 0, pengeluaran: 0 };
      }
      if (transaksi.category === 'IN') {
        acc[bulanTahun].pemasukan += transaksi.nominal;
      } else {
        acc[bulanTahun].pengeluaran += transaksi.nominal;
      }
      return acc;
    }, {});
    return statistik;
  }
  
  dataJson(){
    const jsonData = JSON.stringify(this.state.summary, null, 2);
    console.log(jsonData);
  }
  handleExportJSON() {
    const jsonData = JSON.stringify(this.state.summary, null, 2);
    console.log(jsonData);
  }
  handleDownloadJSON() {
    const jsonData = JSON.stringify(this.state.summary, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'summary.json';
    a.click();
    URL.revokeObjectURL(url);
  }
  
  tambahItem(objek){
    let newData = [...this.state.summary, objek]
    let datalUangIN = newData.filter((item)=>item.category === 'IN');
    let nominallUang = datalUangIN.map((item)=> item.nominal );
    let jumlahUangIN = nominallUang.reduce((total,num)=> total + num,0 )
    let datalUangOUT = newData.filter((item)=>item.category === 'OUT');
    let nominallUangOUT = datalUangOUT.map((item)=> item.nominal );
    let jumlahUangOUT = nominallUangOUT.reduce((total,num)=> total + num,0 )
  
    this.setState({
      pemasukanUang : jumlahUangIN,
      transaksiIN : nominallUang.length,
      pengeluaranUang : jumlahUangOUT,
      transaksiOUT : nominallUangOUT.length,
      sisaUang : jumlahUangIN - jumlahUangOUT,
      persentaseUang : (jumlahUangIN - jumlahUangOUT)/jumlahUangIN  * 100,
      summary : newData
    })
    
    
    this.setState({
      summary : [...this.state.summary, objek]

    })
  }
  
fnHitung(){
  let datalUangIN = this.state.summary.filter((item)=>item.category === 'IN');
  let nominallUang = datalUangIN.map((item)=> item.nominal );
  let jumlahUangIN = nominallUang.reduce((total,num)=> total + num )
  let datalUangOUT = this.state.summary.filter((item)=>item.category === 'OUT');
  let nominallUangOUT = datalUangOUT.map((item)=> item.nominal );
  let jumlahUangOUT = nominallUangOUT.reduce((total,num)=> total + num )

  this.setState({
    pemasukanUang : jumlahUangIN,
    transaksiIN : nominallUang.length,
    pengeluaranUang : jumlahUangOUT,
    transaksiOUT : nominallUangOUT.length,
    sisaUang : jumlahUangIN - jumlahUangOUT,
    persentaseUang : (jumlahUangIN - jumlahUangOUT)/jumlahUangIN  * 100
  })
}
    hapusItem(index) {
      const newSummary = this.state.summary.filter((_, i) => i !== index);
      this.setState({ summary: newSummary }, this.fnHitung);
    }
    editItem(index, updatedData) {
      const newSummary = [...this.state.summary];
      newSummary[index] = updatedData;
      this.setState({ summary: newSummary }, this.fnHitung);
    }
    
  componentDidMount() {
    if(this.state.summary.length < 1) {
      console.log('anjay')
    }
    else{
      this.fnHitung()
    }
  }
  render() {
    const navigate = this.props.navigate;
    return (
      <div className="App flex justify-center items-center min-h-screen pt-12" style={{ paddingTop: '50px' }}>
  <div className='container py-2'>
    <div className='col-span-12 text-center'>
    {/* Navigasi ke homepage */}
            <h1 className="mt-2 cursor-pointer">
            <Link to="/Homepage" className="text-inherit no-underline">
              UANGKU APPS
            </Link>
            </h1>
      <hr className='w-72 mx-auto ' />
      <h2> Rp. {this.state.sisaUang},-</h2>
      <span className='title-md'>Sisa uang kamu tersisa {this.state.persentaseUang}% lagi</span>
    </div>
    <div className='row-auto flex justify-between mt-5'>
      <div className='Card-wrapper p-4 flex-1 mx-2'>
        <div className='icon-wrapper mb-1'>
          <FaWallet />
        </div>
        <span className='title-sm'> Pemasukkan</span>
        <h3>Rp. {this.state.pemasukanUang},-</h3>
        <div>
          <span className='title-sm text-ungu' style={{ fontWeight: 'bold' }}>{this.state.transaksiIN} </span>
          <span className='title-sm' style={{ fontWeight: 'bold' }}>Transaksi</span>
        </div>
      </div>
      <div className='Card-wrapper p-4 flex-1 mx-2'>
        <div className='icon-wrapper mb-1'>
          <FaMoneyBill1Wave />
        </div>
        <span className='title-sm'> Pengeluaran</span>
        <h3>Rp. {this.state.pengeluaranUang},-</h3>
        <div>
          <span className='title-sm text-ungu' style={{ fontWeight: 'bold' }}>{this.state.transaksiOUT} </span>
          <span className='title-sm' style={{ fontWeight: 'bold' }}>Transaksi</span>
        </div>
      </div>
    </div>
    <div className='row-auto mt-5'>
      <div className='col-span-12 flex justify-between align-middle'>
        <h4>Ringkasan Transaksi</h4>
        <div className='wrapper-button flex space-x-4'>
        <ModalCreate action={this.tambahItem} category='IN' variant='hover:bg-blue-700 flex items-center bg-blue-500 text-white px-4 py-2 rounded' text='Pemasukkan' icon='FaCirclePlus' modalHeading='Tambahkan Pemasukan'/>
        <ModalCreate action={this.tambahItem} category='OUT' variant='hover:bg-red-700 flex items-center bg-red-500 text-white px-4 py-2 rounded' text='Pengeluaran' icon='FaMinusCircle' modalHeading='Tambahkan Pengeluaran'/>
        <ModalStatistik summary={this.state.summary} hitungStatistik={this.hitungStatistikBulanan.bind(this)} /> 
        <button onClick={() => this.handleExportJSON()} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Ekspor ke JSON
        </button> 
        <button onClick={() => this.handleDownloadJSON()} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
            Unduh JSON
          </button>
        </div>
      </div>
    </div>
    <div className='row-auto'>
      {this.state.summary.length <1 && <Alert />}
      {this.state.summary.map((sum, index) => {
  return (
    <div key={index} className='col-span-12 mb-3 flex justify-between items-center'>
      <div className='flex items-center'>
        <div className={sum.category === 'IN' ? 'icon-wrapper-IN' : 'icon-wrapper-OUT'}>
          {sum.category === 'IN' ? <FaWallet /> : <FaBagShopping />}
        </div>
        <div className='transaction ms-2 flex flex-col'>
          <h6>{sum.deskripsi}</h6>
          <span className='title-sm'>{sum.tanggal}</span>
        </div>
      </div>
      <div className="flex items-center">
        <h5 className={sum.category === 'IN' ? 'duit-in' : 'duit-out'}>Rp. {sum.nominal}</h5>
        <div className="ml-4 flex">
          <ModalEdit 
            data={sum} 
            index={index} 
            onEdit={this.editItem.bind(this)} 
          />
          <button 
            onClick={() => this.hapusItem(index)} 
            className="text-red-500"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  )
})}
    </div>
  </div>
</div>

    );
  }
}

class Alert extends React.Component {
  constructor() {
    console.log('test')
    super();
  }

  render() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-700">
          Data masih kosong
        </h1>
      </div>
    );
  }
}


const UangkuAppWrapper = () => {
  const navigate = useNavigate(); // Gunakan `useNavigate` di komponen fungsi
  return <HitungModal navigate={navigate} />;
};

export default HitungModal;
