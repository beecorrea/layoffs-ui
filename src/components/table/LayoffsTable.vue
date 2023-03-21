<template>
  <table>
    <thead>
      <tr>
        <HeaderCell v-for="header in headers" :header="header" />
      </tr>
    </thead>
    <tbody>
      <Row v-for="row in rows" :data="row"></Row>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { RowData } from './table'
import HeaderCell from './HeaderCell.vue'
import Row from './Row.vue'


defineProps<{ headers: string[], rows: RowData[] }>()
</script>

<style>
@import "open-props/style";
@import "open-props/sizes";

th,
td {
  margin: 0 var(--size-2);
  padding: var(--size-2) var(--size-8);
}
</style>