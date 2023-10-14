<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <!-- เพิ่มลิงก์ที่คลิกได้ไปยังหน้าหลักด้วย router-link -->
        <router-link to="/">
          <img src="https://cdn.oneesports.co.th/cdn-data/wp-content/uploads/sites/3/2020/04/fifa-online4.png" alt="Valorant" class="img-fluid clickable-image">
        </router-link>
      </div>
      <div class="col-md-6">
        <h1 class="display-4">Fifa Online4
        </h1>
        <p class="lead">EA Sports FC Online เป็นเกมฟุตบอลออนไลน์ที่มีผู้เล่นหลายคนจำนวนมากเล่นฟรี พัฒนาโดย EA Spearhead และเผยแพร่โดย Nexon, Garena และ Tencent
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
