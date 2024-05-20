import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    const urlRegex = /^(http|https):\/\/[^ "]+$/;

    if (!urlRegex.test(url)) {
      return NextResponse.json({ urlerror: "invalid url" });
    }

    const browser = process.env.API
      ? await puppeteer.connect({ browserWSEndpoint: process.env.API })
      : await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(url);
    const extractedText = await page.evaluate(() => document.body.innerText);

    await browser.close();

    return NextResponse.json({ extractedText });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}