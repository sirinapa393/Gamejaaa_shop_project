<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <!-- เพิ่มลิงก์ที่คลิกได้ไปยังหน้าหลักด้วย router-link -->
        <router-link to="/">
          <img src="https://www.gamemonday.com/wp-content/uploads/2016/04/TR-Cover.jpg" alt="Valorant" class="img-fluid clickable-image">
        </router-link>
      </div>
      <div class="col-md-6">
        <h1 class="display-4">Tales runner</h1>
        <p class="lead">tales runner เกมวิ่งบน PC เกมวิ่งอันดับ1ให้บริการโดยบริษัท Rhaon Entertainment ของเกาหลีใต้
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
