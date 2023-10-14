<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <!-- เพิ่มลิงก์ที่คลิกได้ไปยังหน้าหลักด้วย router-link -->
        <router-link to="/">
          <img src="https://s.isanook.com/ga/0/ud/232/1162577/rov_garena_1200x720.jpg" alt="Valorant" class="img-fluid clickable-image">
        </router-link>
      </div>
      <div class="col-md-6">
        <h1 class="display-4">Rov</h1>
        <p class="lead">อารีนาออฟเวเลอร์ เป็นเกมแนวโมบาที่พัฒนาโดยทิมิสตูดิโอและจัดจำหน่ายโดยการีนา สำหรับแอนดรอยด์, ไอโอเอสและนินเทนโดสวิตช์
        </p>
        <router-link to="/" class="btn btn-primary">กลับหน้าเเรก</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
/* สไตล์เมื่อนำเมาส์มาที่รูปภาพ */
.clickable-image {
  cursor: pointer;
  transition: transform 0.2s;
}

/* สไตล์เมื่อคลิกที่รูปภาพ */
.clickable-image:hover {
  transform: scale(1.05);
}
</style>
