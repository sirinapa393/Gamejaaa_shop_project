<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <!-- เพิ่มลิงก์ที่คลิกได้ไปยังหน้าหลักด้วย router-link -->
        <router-link to="/">
          <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4845c37c8ec8c277/6495db0beaac9d6f6838fc54/Val_EP7_Kickoff_Thumb_Final_notxt.jpg?auto=webp&disable=upscale&height=549" alt="Valorant" class="img-fluid clickable-image">
        </router-link>
      </div>
      <div class="col-md-6">
        <h1 class="display-4">Valorant</h1>
        <p class="lead">VALORANT: เกมยิงปืนในรูปแบบ 5v5 ที่ขับเคลื่อนโดยเหล่าเอเจนท์ผู้มากฝีมือและเป็นเกม FPS ที่เน้นการยิงที่แม่นยำพร้อมกับใช้ความสามารถอันเป็นเอกลักษณ์ของตัวละคร</p>
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
