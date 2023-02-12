<script setup>
import { ref, reactive } from "vue";
import axios from "axios";
window.axios = axios; // for debugging

const profile = reactive({});
const headers = reactive({});
const refresh = ref("refresh");

const api = "https://jsonplaceholder.typicode.com/users/1"; // mock it
const load = () => {
  refresh.value = "loading";
  axios.get(api).then((res) => {
    Object.assign(profile, res.data);
    Object.assign(headers, res.headers);
    refresh.value = "refresh";
  });
};
load();
</script>
<template>
  <div class="greetings">
    <h1 class="green">
      Profile
      <button @click="load">{{ refresh }}</button>
    </h1>
    <ul>
      <li>Name: {{ profile.name }}</li>
      <li>Email: {{ profile.email }}</li>
      <li>Phone No.: {{ profile.phone }}</li>
      <li>Gender: {{ profile.gender }}</li>
      <li>Age: {{ profile.age }}</li>
    </ul>
  </div>
  <pre>Response Headers: {{ headers }}</pre>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h1 button {
  font-size: 0.8rem;
  margin-top: 30px;
  border: 1px solid #eee;
  float: right;
  color: blue;
  cursor: pointer;
}

ul {
  list-style-type: none;
  font-size: 1rem;
  padding-left: 0px;
}

pre {
  font-size: 12px;
}

.greetings {
  border: 1px dashed #666;
  padding: 10px;
  width: 360px;
  white-space: nowrap;
  border-radius: 3px;
}

.greetings h1 {
  text-align: center;
}

.greetings h1 {
  text-align: left;
}
</style>
