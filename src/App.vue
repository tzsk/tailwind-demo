<template>
  <div class="robustwealth">
    <div class="container mx-auto" :class="{ 'px-1': true }">
      <router-link to="/" class="text-primary font-bold">Home</router-link> |
      <router-link to="/about" class="text-primary font-bold">
        About
      </router-link>
      |
      <router-link to="/login" class="text-primary font-bold">
        Login
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" src="@/assets/app.scss"></style>
