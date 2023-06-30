#!/usr/bin/env node
import { readFileSync } from "node:fs";
const parseInput = (input) => {
    return input
        .split(`\n`)
        .flatMap(v => v.split(/\s+|,/))
        .map(v => v.trim())
        .filter(v => v.length !== 0)
}

const argv = process.argv
if (argv.length <= 4) {
    console.error("invalid argument, check argv %O", argv)
    process.exit(1)
}
const validCollationName = argv[2]
const tableTSVPath = argv[3]
const ignoreTableNamesPath = argv[4]

const tableTSV = readFileSync(tableTSVPath, { encoding: 'utf8' })
const ignoreTableNames = parseInput(readFileSync(ignoreTableNamesPath, { encoding: "utf8" }))


const tables = tableTSV
    .split(`\n`)
    .filter(v => v.length != 0)
    .map(v => {
        const f = v.split('\t')
        return { name: f[0], collation: f[1] }
    }
    )
// pass to stdout
console.error("parsed tables %O", tables)
const invalidTables = tables.filter(table => !ignoreTableNames.includes(table.name))
    .filter(table => table.collation != validCollationName)

console.log(JSON.stringify(invalidTables))


