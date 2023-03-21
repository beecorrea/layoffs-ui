<template>
  <tr :key="`${data.company}_${data.amountAffected}_${data.happenedAt}`">
    <td v-for="column in data">{{ column }}</td>
  </tr>
</template>

<script setup lang="ts">
import { RowData } from './table';

defineProps<{ data: RowData }>()
</script>

<style scoped></style>