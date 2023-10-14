<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <!-- เพิ่มลิงก์ที่คลิกได้ไปยังหน้าหลักด้วย router-link -->
        <router-link to="/">
          <img src="https://wstatic-prod-boc.krafton.com/common/content/news/20230509/AaEEyBgN.jpg" alt="Valorant" class="img-fluid clickable-image">
        </router-link>
      </div>
      <div class="col-md-6">
        <h1 class="display-4">PUBG</h1>
        <p class="lead">PUBG : BATTLEGROUNDS คือเกมยิงแบบแบทเทิลรอยัลที่มีผู้เล่น 100 คนต่อสู้กันเอง ต่อสู้เพื่อเอาชนะคู่ต่อสู้ของคุณเพื่อเป็นผู้รอดชีวิตคนสุดท้าย
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
