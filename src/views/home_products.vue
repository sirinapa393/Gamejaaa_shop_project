<template>
  <div class="bghome">
    <div>
      <div class="row">
        <div class="col-4">
          <!-- เนื้อหาของคอลัมน์ที่ 1 -->
          <div class="card">
            <img src="https://sls-prod.api-onscene.com/partner_files/trueidintrend/187654/valorant-open-beta%20(1).png" class="card-img-top mx-auto" alt="">
            <div class="card-body">
              <h5 class="card-title">Valorant</h5>
              <p class="card-text">เติมเกม</p>
              <p class="card-text">ราคา : ตั้งเเต่ 70-2200 บาท</p>
              <router-link to="/product_detail" class="btn btn-primary mx-2">รายละเอียด</router-Link>
                <router-link to="/AddToCart"> <!-- เปลี่ยนเส้นทาง "/AddToCart" ตามค่าที่คุณกำหนด -->
                  <button class="btn btn-success">สั่งซื้อสินค้า</button>
                </router-link>
            </div>
          </div>
        </div>
  
        <div class="col-4">
          <!-- เนื้อหาของคอลัมน์ที่ 2 -->
          <div class="card">
            <img src="https://cdn.oneesports.co.th/cdn-data/sites/3/2021/08/ROV.png" class="card-img-top mx-auto" alt="">
            <div class="card-body">
              <h5 class="card-title">ROV</h5>
              <p class="card-text">เติมเกม</p>
              <p class="card-text">ราคา : ตั้งเเต่ 50-2300 บาท</p>
              <router-link to="/product_detail2" class="btn btn-primary mx-2">รายละเอียด</router-Link>
                <router-link to="/AddToCart2"> <!-- เปลี่ยนเส้นทาง "/AddToCart" ตามค่าที่คุณกำหนด -->
                  <button class="btn btn-success">สั่งซื้อสินค้า</button>
                </router-link>
            </div>
          </div>
        </div>
  
        <div class="col-4">
          <!-- เนื้อหาของคอลัมน์ที่ 3 -->
          <div class="card">
            <img src="https://i.ytimg.com/vi/FuSrDOJyBuw/maxresdefault.jpg" class="card-img-top mx-auto" alt="">
            <div class="card-body">
              <h5 class="card-title">Tales Runner</h5>
              <p class="card-text">เติมเกม</p>
              <p class="card-text">ราคา : ตั้งเเต่ 50-1250 บาท</p>
              <router-link to="/product_detail3" class="btn btn-primary mx-2">รายละเอียด</router-Link>
                <router-link to="/AddToCart3"> <!-- เปลี่ยนเส้นทาง "/AddToCart" ตามค่าที่คุณกำหนด -->
                  <button class="btn btn-success">สั่งซื้อสินค้า</button>
                </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
        <div class="row">
          <div class="col-4">
            <!-- เนื้อหาของคอลัมน์ที่ 1 -->
            <div class="card">
              <img src="https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg" class="card-img-top mx-auto">
              <div class="card-body">
                <h5 class="card-title">PUBG</h5>
                <p class="card-text">เติมเกม</p>
                <p class="card-text">ราคา : ตั้งเเต่ 95-2100 บาท</p>
                <router-link to="/product_detail4" class="btn btn-primary mx-2">รายละเอียด</router-Link>
                  <router-link to="/AddToCart4"> <!-- เปลี่ยนเส้นทาง "/AddToCart" ตามค่าที่คุณกำหนด -->
                    <button class="btn btn-success">สั่งซื้อสินค้า</button>
                  </router-link>
              </div>
            </div>
          </div>
    
          <div class="col-4">
            <!-- เนื้อหาของคอลัมน์ที่ 2 -->
            <div class="card">
              <img src="https://cdn-webth.garenanow.com/webth/cdn/fo4/reskin/share.jpg" class="card-img-top mx-auto" alt="">
              <div class="card-body">
                <h5 class="card-title">Fifa Online4</h5>
                <p class="card-text">เติมเกม</p>
                <p class="card-text">ราคา : ตั้งเเต่ 50-2500 บาท</p>
                <router-link to="/product_detail5" class="btn btn-primary mx-2">รายละเอียด</router-Link>
                  <router-link to="/AddToCart5"> <!-- เปลี่ยนเส้นทาง "/AddToCart" ตามค่าที่คุณกำหนด -->
                    <button class="btn btn-success">สั่งซื้อสินค้า</button>
                  </router-link>
              </div>
            </div>
          </div>
    
          <div class="col-4">
            <!-- เนื้อหาของคอลัมน์ที่ 3 -->
            <div class="card">
              <img src="https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1696513856" class="card-img-top mx-auto" alt="">
              <div class="card-body">
                <h5 class="card-title">CSGO2</h5>
                <p class="card-text">เติมเกม</p>
                <p class="card-text">ราคา : ตั้งเเต่ 80-3400 บาท</p>
                <router-link to="/product_detail6" class="btn btn-primary mx-2">รายละเอียด</router-Link>
                  <router-link to="/AddToCart6"> <!-- เปลี่ยนเส้นทาง "/AddToCart" ตามค่าที่คุณกำหนด -->
                    <button class="btn btn-success">สั่งซื้อสินค้า</button>
                  </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import { computed } from 'vue';
import { useProductStore } from '../store/product';
import { useRouter } from 'vue-router';
const product_store = useProductStore;
const list = computed(() => product_store.list_products);
const router = useRouter();

const viewProductDetail = (productId) => {
  router.push('/product_detail/' + productId);
};

</script>

<style lang="scss" scoped>

.card{
  width: 390px;
}
.card-img-top {
  width: 24.30rem;
  height: 14rem;
}
.card-img-top:hover {
  transform: scale(1.05); /* ทำให้รูปภาพขยายขนาดเล็กน้อยเมื่อชี้ที่รูปภาพ */
  transition: transform 0.3s ease-in-out; /* ให้อนิเมชันขยายขนาดเมื่อชี้ที่รูปภาพมีความนุ่มโค้ง */
  cursor: pointer; /* เปลี่ยนเคอร์เซอร์ให้เป็นรูปของมือเมื่อชี้ที่รูปภาพ */
}
  
.product-image {
  width: 90%;
  object-fit: cover;
}


.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.row {
      margin-top: 10px; /* เพิ่มระยะห่างด้านบนของแถว */
}
.col-4 {
  margin-bottom: 2rem; /* เพิ่มระยะห่างด้านล่างของคอลัมน์ */
}
.btn-success  {
  background-color: #008f21;
  color: #ffffff;
}
@media only screen and (max-device-width:844px){
.card{
  width: 368px;
}
.card-img-top {
  width: 22.87rem;
  height: 14rem;
}
.card-img-top:hover {
  transform: scale(1.05); /* ทำให้รูปภาพขยายขนาดเล็กน้อยเมื่อชี้ที่รูปภาพ */
  transition: transform 0.3s ease-in-out; /* ให้อนิเมชันขยายขนาดเมื่อชี้ที่รูปภาพมีความนุ่มโค้ง */
  cursor: pointer; /* เปลี่ยนเคอร์เซอร์ให้เป็นรูปของมือเมื่อชี้ที่รูปภาพ */
}
  
.product-image {
  width: 100%;
  object-fit: cover;
}


.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.row {
      margin-top: 10px; /* เพิ่มระยะห่างด้านบนของแถว */
}
.col-4 {
  width: 200px;
  height: 380px;
  margin-bottom: 2rem; /* เพิ่มระยะห่างด้านล่างของคอลัมน์ */
}
.btn-success  {
  background-color: #008f21;
  color: #ffffff;
}
}   
</style>
  