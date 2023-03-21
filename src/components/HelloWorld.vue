<template>
  <div>
    <LayoffsTable :headers="headers" :rows="rows" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LayoffsTable from './table/LayoffsTable.vue';
import { generateTableData, fetchTableData } from './table/api/api';
import { RowData } from './table/api/types';

const tableData = ref([] as RowData[])

onMounted(async () => {
  const data = await fetchTableData("")
  tableData.value = data
  // const tableData: RowData[] = generateTableData({ amount: 20 })
})

const headers = ["Company", "Country", "Happened At", "# Affected"]
const rows = ref(tableData)
</script>

<style scoped></style>