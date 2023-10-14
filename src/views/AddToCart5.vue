<template>
  <div>
    <div class="H1">เติมเกม เเละ ชำระเงิน</div>
    <div class="product">
      <img src="https://cdn-webth.garenanow.com/webth/cdn/fo4/reskin/share.jpg" class="card-img-top mx-auto" alt="">
      <h2>Fifa Online4</h2>
      <div class="nameandid">
        <input type="text" v-model="gameUID" placeholder="ชื่อในเกมพร้อม#" />
      </div>
      <div class="instruction">
        <p>เลือกราคาที่ต้องการเติม :</p>
        <select class="form-select" v-model="selectedPrice">
          <option value="50">50 บาท</option>
          <option value="100">125 บาท</option>
          <option value="150">160 บาท</option>
          <option value="300">310 บาท</option>
          <option value="550">525 บาท</option>
          <option value="1200">1400 บาท</option>
          <option value="2000">2500 บาท</option>
          
        </select>
        <div class="instruction">
          <p>เลือกวิธีชำระ :</p>
          <select class="form-select payment-method-select" v-model="selectedPaymentMethod">
            <option value="QRcode">รหัส QR</option> <!-- เพิ่มตัวเลือก QR Code -->
            <option value="ATM">บัตร ATM</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Truemoney Wallet">TrueMoney Wallet</option>
            <option value="TrueMoney Card">บัตรทรูมันนี่</option>
          
          </select>
        </div>
        <div class="selecM">
          <!-- คำสั่งอื่น ๆ สำหรับวิธีชำระอื่น ๆ ที่นี่ -->
          <div v-if="selectedPaymentMethod === 'QRcode'">
            <p><img :src="getQRCodePath(selectedPrice)" alt="รหัส QR" style="width: 100%;" /></p>
          </div>
          <div v-if="selectedPaymentMethod === 'ATM'">
            <input type="text" v-model="atmCardNumber" placeholder="หมายเลขบัตร ATM" />
          </div>
          <div v-if="selectedPaymentMethod === 'Mastercard'">
            <input type="text" v-model="mastercardNumber" placeholder="หมายเลข Mastercard" />
          </div>
          <div v-if="selectedPaymentMethod === 'Truemoney Wallet'">
            <input type="text" v-model="truemoneyWalletNumber" placeholder="หมายเลข TrueMoney Wallet" />
          </div>
          <div v-if="selectedPaymentMethod === 'TrueMoney Card'">
            <input type="text" v-model="truemoneyCardNumber" placeholder="หมายเลขบัตรทรูมันนี่" />
          </div>
        </div>
        <div class="b1">
          <input type="text" v-model="email" placeholder="อีเมล" />
          <input type="text" v-model="phoneNumber" placeholder="หมายเลขโทรศัพท์" />
          <button @click="addToCart" class="btn btn-primary">ยืนยัน</button>
        </div>
      </div>
      <div class="confirmation" v-if="showConfirmation">
        <p>การทำรายการสำเร็จ!</p>
        <img src="src/assets/Check.jpg">
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
  return {
    selectedPrice: '50',
    selectedPaymentMethod: 'ATM',
    atmCardNumber: '',
    mastercardNumber: '',
    truemoneyWalletNumber: '',
    truemoneyCardNumber: '',
    gameUID: '',
    email: '',
    phoneNumber: '',
    showConfirmation: false // ต้องเพิ่มตัวแปร showConfirmation และกำหนดเป็น false
  };
},

methods: {
  addToCart() {
    // เพิ่มโลจิกสำหรับการเพิ่มสินค้าลงในตะกร้าที่นี่
    this.showConfirmation = true;

    // เมื่อแสดงอนิเมชันติก หลังจากอีก 3 วินาทีให้ซ่อนอนิเมชันติก
    setTimeout(() => {
      this.showConfirmation = false;
    }, 3000); // 3 วินาที
  },
  getQRCodePath(price) {
    // ถ้าเรามีรูปภาพรหัส QR ในโฟลเดอร์ 'qrcodes'
    return `src/assets/QRCODE.png`;
  }
}

}
</script>


<style scoped>

.confirmation {
  font-size: 25px;
  text-align: center;
  
}
.confirmation img {
  width: 65;
  height: 35;
}
.instruction {
  font-size: 17.5px;
  text-align: left;
  margin-top: 20px; /* เพิ่มระยะห่างด้านบน */
}

/* คำสั่ง CSS เพิ่มเติมให้ข้อความชิดซ้าย */
.instruction p {
  text-align: left;
}

/* คำสั่ง CSS เพิ่มเติมให้ข้อความชิดซ้าย */

/* คำสั่ง CSS เพิ่มระยะห่างด้านบนให้เลือกวิธีชำระ */
.payment-method-select {
  margin-top: 20px; /* เพิ่มระยะห่างด้านบน */
}

.selecM {
  margin-top: 10px; /* เพิ่มระยะห่างด้านบน */
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px; /* ปรับขนาดขอบของส่วน product */
  border: 2px solid #ccc; /* ปรับขนาดขอบของส่วน product */
  text-align: center; /* จัดตำแหน่งข้อความตรงกลาง */
}

.product img{
  width: 35rem; 
  height: 19rem;
}

.product button {
  margin-top: 10px;
}

/* สไตล์ของปุ่ม "Add to Cart" */
.product button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
}

.product button:hover {
  background-color: #0056b3;
}

.H1 {
  font-size: 38px;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 10px; /* เพิ่มการกำหนดขนาดขอบด้วยการเพิ่ม Padding */
}

.product h2{
  margin-top: 5%;
  font-size: 25px;
}

.nameandid{
  margin-top: 10px;
  align-items: center;
}
.b1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* เพิ่มระยะห่างระหว่างช่องว่างและปุ่ม */
.b1 input {
  margin: 5px 0;
}
@media only screen and (max-device-width:844px){
.confirmation {
  font-size: 25px;
  text-align: center;
  
}
.instruction {
  font-size: 17.5px;
  text-align: left;
  margin-top: 20px; /* เพิ่มระยะห่างด้านบน */
}

/* คำสั่ง CSS เพิ่มเติมให้ข้อความชิดซ้าย */
.instruction p {
  text-align: left;
}

/* คำสั่ง CSS เพิ่มเติมให้ข้อความชิดซ้าย */

/* คำสั่ง CSS เพิ่มระยะห่างด้านบนให้เลือกวิธีชำระ */
.payment-method-select {
  margin-top: 20px; /* เพิ่มระยะห่างด้านบน */
}

.selecM {
  margin-top: 10px; /* เพิ่มระยะห่างด้านบน */
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px; /* ปรับขนาดขอบของส่วน product */
  border: 2px solid #ccc; /* ปรับขนาดขอบของส่วน product */
  text-align: center; /* จัดตำแหน่งข้อความตรงกลาง */
}

.product img{
  width: 17.8rem; 
  height: 15rem;
}

.product button {
  margin-top: 10px;
}

/* สไตล์ของปุ่ม "Add to Cart" */
.product button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
}

.product button:hover {
  background-color: #0056b3;
}

.H1 {
  font-size: 32px;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 10px; /* เพิ่มการกำหนดขนาดขอบด้วยการเพิ่ม Padding */
}
.nameandid{
  margin-top: 10px;
  align-items: center;
}

.b1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* เพิ่มระยะห่างระหว่างช่องว่างและปุ่ม */
.b1 input {
  margin: 5px 0;
}
}
</style>





