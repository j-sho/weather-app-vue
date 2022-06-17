<template>
  <div class="detail-today btn btn-outline-info">
    <div class="detail-today-header">
      <h3>{{ title }}</h3>
    </div>
    <div class="detail-today-data">
      <h3>{{ result }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DetailDescription",
  props: ["title", "result"],
};
</script>

<style>
.detail-today {
  padding: 0.6em 3em;
  max-width: 80%;
}
</style>
