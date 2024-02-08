<!-- App.vue -->
<template>
  <div id="app">
    <router-view></router-view>
    <div v-if="showSignUp">
      <Login></Login>
    </div>
    <div v-else>
      <SignUp></SignUp>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showSignUp: false, // 렌더링할 컴포넌트를 결정하는 조건
    };
  },
  components: {

  },
};
</script>
