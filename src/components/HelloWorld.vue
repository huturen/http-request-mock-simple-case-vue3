<script setup>
import { ref, reactive } from "vue";
import axios from "axios";
window.axios = axios; // for debugging

const profile = reactive({});
const headers = reactive({});
const refreshBtn = ref("refresh");
const load = () => {
  const apiUser = "https://jsonplaceholder.typicode.com/users/1"; // mock it

  refreshBtn.value = "loading...";
  axios.get(apiUser).then((res) => {
    Object.assign(profile, res.data);
    Object.assign(headers, res.headers);
    refreshBtn.value = "refresh";
  });
};

const mustDo = reactive({ title: "none" });
const mustDoBtn = ref("must do");
const getTodo = () => {
  const apiTodo = "https://jsonplaceholder.typicode.com/todos/1";

  mustDoBtn.value = "getting...";
  axios.get(apiTodo).then((res) => {
    Object.assign(mustDo, res.data);
    mustDoBtn.value = "must do";
  });
};

load();
</script>
<template>
  <div class="greetings">
    <h1 class="green">
      Profile
      <div class="buttons">
        <button class="load" @click="load">{{ refreshBtn }}</button>
        <button class="get-todo" @click="getTodo">{{ mustDoBtn }}</button>
      </div>
    </h1>
    <ul>
      <li>Name: {{ profile.name }}</li>
      <li>Email: {{ profile.email }}</li>
      <li>Phone No.: {{ profile.phone }}</li>
      <li>Gender: {{ profile.gender }}</li>
      <li>Age: {{ profile.age }}</li>
      <li>Today's must-do: {{ mustDo.title }}</li>
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

h1 .buttons {
  float: right;
  cursor: pointer;
  margin-top: 10px;
}

.buttons button {
  font-size: 0.8rem;
  color: blue;
  border: 1px solid #eee;
  display: block;
  margin: 5px;
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
  width: 560px;
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
