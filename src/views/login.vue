<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="username" class="form-label">Username:</label>
                <input type="text" id="username" v-model="username" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password:</label>
                <input type="password" id="password" v-model="password" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-primary" :disabled="isButtonDisabled">Login</button>
              <div v-if="error" class="text-danger">{{ error }}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      error: null, // เพิ่มคอมโพเนนต์ error เพื่อแสดงข้อความผิดพลาด
      
    };
  },
  computed: {
    isButtonDisabled() {
      return !this.username || !this.password;
    },
  },
  methods: {
    login() {

      this.$router.push('/');

      // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
      if (this.username === "user" && this.password === "password") {
        // ให้ทำงานเมื่อข้อมูลถูกต้อง
        console.log("Username:", this.username);
        console.log("Password:", this.password);
        this.error = null; // ล้างข้อความผิดพลาด
      } else {
        this.error = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
      }
    },
  },
};
</script>


<style scoped>
.card {
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-header {
  font-size: 24px;
  background-color: #222222; /* สีพื้นหลังสำหรับส่วนหัวของการ์ด */
  color: white; /* สีตัวอักษรของส่วนหัวของการ์ด */
  text-align: center;
}

.btn-primary {
  background-color: #007BFF;
  border-color: #007BFF;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

/* เพิ่ม CSS เพิ่มเติมตามที่คุณต้องการ */

/* ปรับแต่งสีพื้นหลังสำหรับข้อความผิดพลาด */
.text-danger {
  color: red;
}
@media only screen and (max-device-width:844px){
  .card {
    width: 100%;
    border-radius: 15px;
    margin-top: 1px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .card-header {
    font-size: 24px;
    background-color: #222222; /* สีพื้นหลังสำหรับส่วนหัวของการ์ด */
    color: white; /* สีตัวอักษรของส่วนหัวของการ์ด */
    text-align: center;
  }

  .btn-primary {
    background-color: #007BFF;
    border-color: #007BFF;
  }

  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }

  /* เพิ่ม CSS เพิ่มเติมตามที่คุณต้องการ */

  /* ปรับแต่งสีพื้นหลังสำหรับข้อความผิดพลาด */
  .text-danger {
    color: red;
  }
}
</style>
