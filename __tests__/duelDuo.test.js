const { Builder, Browser, By, until, Key } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

// must have ^^ this ^^ code before adding in automated tests with Selenium

describe("Duel Duo tests", () => {
  test("page loads with title", async () => { //async fxn to allow 'await' to happen
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  // Check that clicking the Draw button displays the div with id = “choices”
  test("draw btn displays div id'choices' ", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.wait(
      until.elementLocated(By.id('choices')), 1000);
  });

});