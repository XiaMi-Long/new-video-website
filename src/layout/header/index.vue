<script setup lang="ts">
import { useSearch } from "./hooks/useSearch";

const { searchInputValue } = useSearch();

console.log(searchInputValue);
</script>

<template>
  <div class="layout-header">
    <div class="left">
      <span class="logo">ＣＩＬＩＣＩＬＩ</span>
    </div>
    <div class="center">
      <n-input
        v-model:value="searchInputValue"
        type="text"
        placeholder="基本的 Input"
      />
    </div>
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

    .logo {
      color: $primary-color;

      font: {
        weight: 2em;
      }
    }
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
