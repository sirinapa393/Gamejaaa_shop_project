<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <!-- เพิ่มลิงก์ที่คลิกได้ไปยังหน้าหลักด้วย router-link -->
        <router-link to="/">
          <img src="https://insider-gaming.com/wp-content/uploads/2023/03/csgo-source-2.jpg" alt="Valorant" class="img-fluid clickable-image">
        </router-link>
      </div>
      <div class="col-md-6">
        <h1 class="display-4">Counter-Strike2
        </h1>
        <p class="lead">Counter-Strike คือซีรีส์วิดีโอเกมยิงมุมมองบุคคลที่หนึ่งที่มีผู้เล่นหลายคนทางยุทธวิธี ซึ่งทีมผู้ก่อการร้ายต่อสู้กันเพื่อก่อเหตุก่อการร้าย ในขณะที่ผู้ต่อต้านผู้ก่อการร้ายพยายามป้องกัน
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
