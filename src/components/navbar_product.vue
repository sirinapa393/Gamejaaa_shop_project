<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">GameJaaa</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 input-group">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">หน้าแรก</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Member" class="nav-link">สมาชิกกลุ่ม</router-link>
          </li>
        </ul>
        <div class="SRC input-group" role="search">
          <input class="form-control me-2" type="search" placeholder="ค้นหา..." aria-label="Search" ref="searchInput" >
          <button @click="search" class="btn btn-outline-primary">ยืนยัน</button>
        </div>
        <div class="logandregis input-group">
        <router-link to="/login" class="btn btn-outline-primary me-2">Login</router-link>
        <router-link to="/register" class="btn btn-outline-success">Register</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    search() {
      const searchQuery = this.$refs.searchInput.value.trim().toLowerCase();

      // รายการคำค้นหาและเป้าหมายหน้าที่เกี่ยวข้อง
      const searchOptions = {
        valorant: '/AddToCart',
        rov: '/AddToCart2',
        'tales runner': '/AddToCart3',
        pubg: '/AddToCart4',
        'fifa online4': '/AddToCart5',
        csgo2: '/AddToCart6',
      };

      // ตรวจสอบว่าคำค้นหาอยู่ในรายการหรือไม่
      if (searchQuery in searchOptions) {
        // พาไปยังหน้าที่เกี่ยวข้อง
        this.$router.push(searchOptions[searchQuery]);
      }
    },
  },
};
</script>



<style scoped>
.SRC {
  margin-right: 660px;
  text-align: center;
  margin-top: 10px; /* เพิ่มระยะห่างด้านบน */
}

/* สไตล์ของปุ่มค้นหา */
.SRC button {
  margin-top: 10px;
  background-color: #7a7a7a;
  color: #fff;
  border: none;
  padding: 5px 10px;
}

.SRC button:hover {
  background-color: #cfcfcf;
}

.navbar-brand {
  width: 8%;
  margin-left: 10px;
  font-size: 24px; /* ปรับขนาดตัวอักษรตามที่คุณต้องการ */
  font-weight: bold; /* เพิ่มความหนาตัวอักษร (ถ้าต้องการ) */
}
@media only screen and (max-device-width:844px){
  .SRC {
  margin-right: 10px;
  text-align: center;
  margin-top: 5px; /* เพิ่มระยะห่างด้านบน */
}

/* สไตล์ของปุ่มค้นหา */
.SRC button {
  margin-top: 10px;
  background-color: #7a7a7a;
  color: #fff;
  border: none;
  padding: 5px 10px;
}

.SRC button:hover {
  background-color: #cfcfcf;
}

.navbar{
  width: 100%;
}
.navbar-brand {
  margin-left: 5px;
  width: 25%;
  font-size: 20px; /* ปรับขนาดตัวอักษรตามที่คุณต้องการ */
  font-weight: bold; /* เพิ่มความหนาตัวอักษร (ถ้าต้องการ) */
}
.logandregis{
  margin-top: 5%;
}
}


</style>
