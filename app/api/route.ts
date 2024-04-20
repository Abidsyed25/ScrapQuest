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

    browser = await puppeteer.connect({ browserWSEndpoint: process.env.API });
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