import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';




export async function POST(request: Request) {
  let browser;
  try {
    const { url } = await request.json();

    const urlRegex = /^(http|https):\/\/[^ "]+$/;

    if (!urlRegex.test(url)) {
        return NextResponse.json({urlerror:"invalid url"});
    }

    if (process.env.API) {
      // If the API URL is present, connect to the existing browser instance
      console.log("api tested");
      browser = await puppeteer.connect({ browserWSEndpoint: process.env.API });
  } else {
      // If the API URL is not present, launch a new browser instance
      browser = await puppeteer.launch();
  }
    const page = await browser.newPage();
    console.log(url);
    await page.goto(url);
    const extractedText = await page.$eval('*', (el: any) => el.innerText);
    console.log(extractedText);
    if (browser) {
      await browser.close();
    }

    return NextResponse.json({ extractedText });
  } catch (error) {
    if (browser) {
      await browser.close();
    }
    console.error(error);
    return NextResponse.json({ error });
  }
}