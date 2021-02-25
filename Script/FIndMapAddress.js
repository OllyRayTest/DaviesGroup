function evalChildByXPath()
{
  // Obtain the Page object
  let url = "https://davies-group.com/location/";
  Browsers.Item(btIExplorer).Run(url);
  let page = Sys.Browser("*").Page("*");

  // Call the function
  let obj = page.FindChildByXPath("//button[@type='submit']", true);
  let obj2 = page.FindChild()
  
  // Check the result
  if (!strictEqual(obj, null))
  {
    // If the element was found, click it
    obj.Click();
  }
  else
  {
    // If the element was not found, post a message to the log
    Log.Error("The element was not found.");
  }
}