<script setup lang="ts"></script>

<template>
  <div class="layout-header">
    <div class="left">
      <span></span>
    </div>
    <div class="center"></div>
    <div class="right"></div>
  </div>
</template>

<style scoped lang="scss">
.layout-header {
  display: flex;

  height: 40px;

  border-bottom: 1px solid #bab8b8;

  padding: 5px 30px;

  .left {
    width: 40%;

    display: flex;
    align-items: center;
  }

  .center {
    width: 20%;
  }

  .right {
    width: 40%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
