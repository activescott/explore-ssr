#!/usr/bin/env node

import puppeteer from "puppeteer"
import { writeFile } from "fs/promises"
import prettier from "prettier"
import parserHtml from "prettier/plugins/html.js"
import parserBabel from "prettier/plugins/babel.js"
import parserPostCss from "prettier/plugins/postcss.js"

async function main() {
  const tasks = []
  const args = process.argv.slice(2)
  if (args.length == 2) {
    const [url, testName] = args
    tasks.push({ url, testName })
  } else if (args.length == 0) {
    tasks.push({ url: "http://127.0.0.1:5000", testName: "react" })
    tasks.push({ url: "http://127.0.0.1:4000", testName: "nextjs" })
  } else {
    console.error("Usage: dump-renders.mjs [url] [testName]")
    process.exit(1)
  }

  for (const { url, testName } of tasks) {
    await dumpServerRender(url, testName)
    await dumpClientRender(url, testName)
  }
}

async function dumpServerRender(url, testName) {
  const result = await fetch(url)
  const html = await result.text()
  await writeFile(`${testName}-server-rendered.html`, await pretty(html))
}

async function dumpClientRender(url, testName) {
  const browser = await puppeteer.launch({ headless: "new" })
  const page = await browser.newPage()
  await page.goto(url)
  const html = await page.content()
  await page.close()
  await browser.close()
  await writeFile(`${testName}-client-rendered.html`, await pretty(html))
}

async function pretty(html) {
  return await prettier.format(html, {
    plugins: [parserHtml, parserBabel, parserPostCss],
    parser: "html",
  })
}

main().then(console.log("done")).catch(console.error)
