<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" id="email" v-model="email" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="username" class="form-label">Username:</label>
                <input type="text" id="username" v-model="username" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password:</label>
                <input type="password" id="password" v-model="password" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password:</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" class="form-control" required>
                <br>
                <label for="terms" class="form-label">
                  <input type="checkbox" id="terms" v-model="termsAccepted" class="custom-checkbox">
                  ยืนยัน
                </label>
              </div>

              <button type="submit" class="btn btn-success btn-block" :disabled="!isFormValid" @click="redirectToRegister">Register</button>
              
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
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false, // เพิ่มตัวแปรเพื่อติดตามสถานะ checkbox
    };
  },
  computed: {
    isFormValid() {
      return (
        this.email.length > 0 &&
        this.username.length > 0 &&
        this.password.length > 0 &&
        this.confirmPassword.length > 0 &&
        this.password === this.confirmPassword &&
        this.termsAccepted // ตรวจสอบว่า checkbox ถูกติก
      );
    },
  },
  methods: {
    redirectToRegister() {
      if (this.isFormValid) {
        this.$router.push('/');
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

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.custom-checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #28a745; /* สีขอบ checkbox */
  border-radius: 4px;
  display: inline-block;
  position: relative;
}

.custom-checkbox:checked::before {
  content: "✔"; /* สัญลักษณ์เมื่อ checkbox ถูกเลือก */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #28a745; /* สีของเครื่องหมายถูกเลือก */
}

.custom-checkbox:checked {
  background-color: #ffffff; /* สีพื้นหลังเมื่อ checkbox ถูกเลือก */
}

/* สีขอบ checkbox เมื่อ hover */
.custom-checkbox:hover {
  border-color: #1e7e34; /* สีขอบ checkbox เมื่อ hover */
}
@media only screen and (max-device-width:844px){
  .card {
  width: 100%;
  margin-top: 10px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-header {
  font-size: 24px;
  background-color: #222222; /* สีพื้นหลังสำหรับส่วนหัวของการ์ด */
  color: white; /* สีตัวอักษรของส่วนหัวของการ์ด */
  text-align: center;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.custom-checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #28a745; /* สีขอบ checkbox */
  border-radius: 4px;
  display: inline-block;
  position: relative;
}

.custom-checkbox:checked::before {
  content: "✔"; /* สัญลักษณ์เมื่อ checkbox ถูกเลือก */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #28a745; /* สีของเครื่องหมายถูกเลือก */
}

.custom-checkbox:checked {
  background-color: #ffffff; /* สีพื้นหลังเมื่อ checkbox ถูกเลือก */
}

/* สีขอบ checkbox เมื่อ hover */
.custom-checkbox:hover {
  border-color: #1e7e34; /* สีขอบ checkbox เมื่อ hover */
}
}
</style>
