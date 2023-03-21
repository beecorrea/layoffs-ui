const BASE_URL = "http://localhost:3000/api"
const LAYOFF_ENDPOINT = "/layoff"

export const LAYOFFS_URL = BASE_URL + LAYOFF_ENDPOINT
export const getLayoffFor = (company?: string) => LAYOFFS_URL + `/${company}`