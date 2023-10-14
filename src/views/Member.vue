<template>
    <div class="group-list">
      <div class="G1"><h1>รายชื่อกลุ่ม</h1></div>
      <ul class="member-list">
        <li v-for="member in members" :key="member.id" class="member-item">
          {{ member.name }} (รหัส {{ member.code }})
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        members: [
          { id: 1, name: 'นายจิรัฏฐ์ ชุติเกียรติญานนท์', code: '6504101313' },
          { id: 2, name: 'นางสาวประภาวรินทร์ องอาจอุดมรัตน์', code: '6504101353' },
          { id: 3, name: 'นางสาวศิรินภา มณีรัตน์', code: '6504101393' },
          { id: 4, name: 'นางสาวษุภากร อนันต์', code: '6504101401' },
          { id: 5, name: 'นายสิรวิชญ์ เกิดชนะ', code: '6504101403' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .group-list {
    text-align: center;
  }
  
  .member-list {
    list-style-type: none;
    padding: 0;
  }
  
  .member-item {
    font-size: 18px;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
    border-radius: 5px;
  }

  .G1 {
    margin-top: 15px;
  }
  @media only screen and (max-device-width:844px){
    
  .group-list {
    text-align: center;
  }
  
  .member-list {
    list-style-type: none;
    padding: 0;
  }
  
  .member-item {
    font-size: 12px;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
    border-radius: 5px;
  }

  .G1 {
    margin-top: 20px;
  }
  }
  </style>
  