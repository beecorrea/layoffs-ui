import {
  randCompanyName,
  randCountry,
  randRecentDate,
  randNumber,
} from '@ngneat/falso'
import { getLayoffFor } from '../../../shared/api/api'
import { RowData, GetLayoffsResponse } from './types'


export function generateTableData(opts: { amount: number }): RowData[] {
  let rows: RowData[] = []

  for (let i = opts.amount; i > 0; i--) {
    const data: RowData = {
      company: randCompanyName(),
      country: randCountry(),
      happenedAt: randRecentDate({ days: 90 }).toLocaleDateString(),
      amountAffected: randNumber({ min: 100 })
    }
    rows.push(data)
  }

  return rows
}

export async function fetchTableData(company?: string): Promise<RowData[]> {
  const url = getLayoffFor(company)
  const res = await fetch(url)

  const data: GetLayoffsResponse = await res.json()
  console.log(data)

  return data.layoffs.map(d => ({ company: d.name, country: d.country, happenedAt: d.happened_at, amountAffected: d.amount_affected }))
}