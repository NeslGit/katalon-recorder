import { getTrackingPlayBackData } from "../tracking/playback-local-tracking.js";
import { trackingSegment } from "../tracking/segment-tracking-service.js";


const sampleData = [
  {
    testSuiteName: "Common actions",
    projectName: "Basic automation",
    description: "Click, type and add selection",
    testSuite: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
  <title>Common actions</title>
</head>
<body>
<table cellpadding="1" cellspacing="1" border="1">
  <thead>
  <tr><td rowspan="1" colspan="3">Common actions</td></tr>
  </thead>
  <tbody>
  <tr><td>open</td><td>https://katalon-test.s3.amazonaws.com/aut/html/form.html<datalist><option>https://katalon-test.s3.amazonaws.com/aut/html/form.html</option></datalist></td><td></td>
  </tr>
  <tr><td>#</td><td>This is a comment.<datalist><option>This is a comment.</option></datalist></td><td></td>
  </tr>
  <tr><td>click</td><td>id=first-name<datalist><option>id=first-name</option><option>name=firstName</option><option>//input[@id='first-name']</option><option>//form[@id='infoForm']/div/div/input</option><option>//input</option><option>css=#first-name</option></datalist></td><td></td>
  </tr>
  <tr><td>type</td><td>id=first-name<datalist><option>id=first-name</option><option>name=firstName</option><option>//input[@id='first-name']</option><option>//form[@id='infoForm']/div/div/input</option><option>//input</option><option>css=#first-name</option></datalist></td><td>Alex</td>
  </tr>
  <tr><td>type</td><td>id=last-name<datalist><option>id=last-name</option><option>name=lastName</option><option>//input[@id='last-name']</option><option>//form[@id='infoForm']/div[2]/div/input</option><option>//div[2]/div/input</option><option>css=#last-name</option></datalist></td><td>Smith</td>
  </tr>
  <tr><td>click</td><td>name=gender<datalist><option>name=gender</option><option>//input[@name='gender']</option><option>//form[@id='infoForm']/div[3]/div/div/label/input</option><option>//label/input</option><option>css=input[name="gender"]</option></datalist></td><td></td>
  </tr>
  <tr><td>click</td><td>id=dob<datalist><option>id=dob</option><option>name=dob</option><option>//input[@id='dob']</option><option>//form[@id='infoForm']/div[4]/div/input</option><option>//div[4]/div/input</option><option>css=#dob</option></datalist></td><td></td>
  </tr>
  <tr><td>click</td><td>//tr[4]/td[3]<datalist><option>//tr[4]/td[3]</option></datalist></td><td></td>
  </tr>
  <tr><td>click</td><td>id=address<datalist><option>id=address</option><option>name=address</option><option>//input[@id='address']</option><option>//form[@id='infoForm']/div[5]/div/input</option><option>//div[5]/div/input</option><option>css=#address</option></datalist></td><td></td>
  </tr>
  <tr><td>type</td><td>id=address<datalist><option>id=address</option><option>name=address</option><option>//input[@id='address']</option><option>//form[@id='infoForm']/div[5]/div/input</option><option>//div[5]/div/input</option><option>css=#address</option></datalist></td><td>123456 Wakanda</td>
  </tr>
  <tr><td>click</td><td>id=email<datalist><option>id=email</option><option>name=email</option><option>//input[@id='email']</option><option>//form[@id='infoForm']/div[6]/div/input</option><option>//div[6]/div/input</option><option>css=#email</option></datalist></td><td></td>
  </tr>
  <tr><td>type</td><td>id=email<datalist><option>id=email</option><option>name=email</option><option>//input[@id='email']</option><option>//form[@id='infoForm']/div[6]/div/input</option><option>//div[6]/div/input</option><option>css=#email</option></datalist></td><td>alex@wakanda.gov</td>
  </tr>
  <tr><td>click</td><td>id=password<datalist><option>id=password</option><option>name=password</option><option>//input[@id='password']</option><option>//form[@id='infoForm']/div[7]/div/input</option><option>//div[7]/div/input</option><option>css=#password</option></datalist></td><td></td>
  </tr>
  <tr><td>type</td><td>id=password<datalist><option>id=password</option><option>name=password</option><option>//input[@id='password']</option><option>//form[@id='infoForm']/div[7]/div/input</option><option>//div[7]/div/input</option><option>css=#password</option></datalist></td><td>secret</td>
  </tr>
  <tr><td>click</td><td>id=company<datalist><option>id=company</option><option>name=company</option><option>//input[@id='company']</option><option>//form[@id='infoForm']/div[8]/div/input</option><option>//div[8]/div/input</option><option>css=#company</option></datalist></td><td></td>
  </tr>
  <tr><td>type</td><td>id=company<datalist><option>id=company</option><option>name=company</option><option>//input[@id='company']</option><option>//form[@id='infoForm']/div[8]/div/input</option><option>//div[8]/div/input</option><option>css=#company</option></datalist></td><td>Dora</td>
  </tr>
  <tr><td>select</td><td>id=role<datalist><option>id=role</option><option>name=role</option><option>//select[@id='role']</option><option>//form[@id='infoForm']/div[9]/div/select</option><option>//select</option><option>css=#role</option></datalist></td><td>label=Manager</td>
  </tr>
  <tr><td>click</td><td>id=role<datalist><option>id=role</option><option>name=role</option><option>//select[@id='role']</option><option>//form[@id='infoForm']/div[9]/div/select</option><option>//select</option><option>css=#role</option></datalist></td><td></td>
  </tr>
  <tr><td>addSelection</td><td>id=expectation<datalist><option>id=expectation</option><option>name=expectation</option><option>//select[@id='expectation']</option><option>//form[@id='infoForm']/div[10]/div/select</option><option>//div[10]/div/select</option><option>css=#expectation</option></datalist></td><td>label=Nice manager/leader</td>
  </tr>
  <tr><td>click</td><td>//select[@id='expectation']/option[2]<datalist><option>//select[@id='expectation']/option[2]</option><option>//div[10]/div/select/option[2]</option></datalist></td><td></td>
  </tr>
  <tr><td>addSelection</td><td>id=expectation<datalist><option>id=expectation</option><option>name=expectation</option><option>//select[@id='expectation']</option><option>//form[@id='infoForm']/div[10]/div/select</option><option>//div[10]/div/select</option><option>css=#expectation</option></datalist></td><td>label=Excellent colleagues</td>
  </tr>
  <tr><td>click</td><td>//select[@id='expectation']/option[3]<datalist><option>//select[@id='expectation']/option[3]</option><option>//div[10]/div/select/option[3]</option></datalist></td><td></td>
  </tr>
  <tr><td>addSelection</td><td>id=expectation<datalist><option>id=expectation</option><option>name=expectation</option><option>//select[@id='expectation']</option><option>//form[@id='infoForm']/div[10]/div/select</option><option>//div[10]/div/select</option><option>css=#expectation</option></datalist></td><td>label=Good teamwork</td>
  </tr>
  <tr><td>click</td><td>//select[@id='expectation']/option[4]<datalist><option>//select[@id='expectation']/option[4]</option><option>//div[10]/div/select/option[4]</option></datalist></td><td></td>
  </tr>
  <tr><td>click</td><td>//input[@value='']<datalist><option>//input[@value='']</option><option>//form[@id='infoForm']/div[11]/div/div/label/input</option><option>//div[11]/div/div/label/input</option><option>css=input[type="checkbox"]</option></datalist></td><td></td>
  </tr>
  <tr><td>click</td><td>xpath=(//input[@value=''])[2]<datalist><option>xpath=(//input[@value=''])[2]</option><option>//form[@id='infoForm']/div[11]/div/div[2]/label/input</option><option>//div[2]/label/input</option></datalist></td><td></td>
  </tr>
  <tr><td>click</td><td>id=comment<datalist><option>id=comment</option><option>name=comment</option><option>//textarea[@id='comment']</option><option>//form[@id='infoForm']/div[12]/div/textarea</option><option>//textarea</option><option>css=#comment</option></datalist></td><td></td>
  </tr>
  <tr><td>type</td><td>id=comment<datalist><option>id=comment</option><option>name=comment</option><option>//textarea[@id='comment']</option><option>//form[@id='infoForm']/div[12]/div/textarea</option><option>//textarea</option><option>css=#comment</option></datalist></td><td>Added by Alex.</td>
  </tr>
  <tr><td>click</td><td>id=submit<datalist><option>id=submit</option><option>//button[@id='submit']</option><option>//form[@id='infoForm']/div[13]/div/button</option><option>//button</option><option>css=#submit</option></datalist></td><td></td>
  </tr>
  </tbody></table>
</body>
</html>`,
  },
  {
    testSuiteName: "Capture screenshots",
    projectName: "Capture screenshots",
    description: "Capture the screenshot of an entire page",
    testSuite: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
  <title>Capture screenshots</title>
</head>
<body>
<table cellpadding="1" cellspacing="1" border="1">
  <thead>
  <tr><td rowspan="1" colspan="3">Capture screenshots</td></tr>
  </thead>
  <tbody>
  <tr><td>open</td><td>https://katalon-test.s3.amazonaws.com/aut/html/form.html<datalist><option>https://katalon-test.s3.amazonaws.com/aut/html/form.html</option></datalist></td><td></td>
  </tr>
  <tr><td>captureEntirePageScreenshot</td><td>before-adding-comment<datalist><option>before-adding-comment</option></datalist></td><td></td>
  </tr>
  <tr><td>click</td><td>id=comment<datalist><option>id=comment</option><option>name=comment</option><option>//textarea[@id='comment']</option><option>//form[@id='infoForm']/div[12]/div/textarea</option><option>//textarea</option><option>css=#comment</option></datalist></td><td></td>
  </tr>
  <tr><td>type</td><td>id=comment<datalist><option>id=comment</option><option>name=comment</option><option>//textarea[@id='comment']</option><option>//form[@id='infoForm']/div[12]/div/textarea</option><option>//textarea</option><option>css=#comment</option></datalist></td><td>Added by Alex.</td>
  </tr>
  <tr><td>captureEntirePageScreenshot</td><td>after-adding-comment<datalist><option>after-adding-comment</option></datalist></td><td></td>
  </tr>
  </tbody></table>
</body>
</html>`,
  },
  {
    testSuiteName: "Working with variables",
    projectName: "Combine values",
    description: "Store and combine values from different text/input fields",
    testSuite: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
      "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
      "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\n" +
      "<head>\n" +
      "  <meta content=\"text/html; charset=UTF-8\" http-equiv=\"content-type\" />\n" +
      "  <title>Working with variables</title>\n" +
      "</head>\n" +
      "<body>\n" +
      "<table cellpadding=\"1\" cellspacing=\"1\" border=\"1\">\n" +
      "  <thead>\n" +
      "  <tr><td rowspan=\"1\" colspan=\"3\">Working with variables</td></tr>\n" +
      "  </thead>\n" +
      "  <tbody>\n" +
      "  <tr><td>open</td><td>https://katalon-test.s3.amazonaws.com/aut/html/form.html<datalist><option>https://katalon-test.s3.amazonaws.com/aut/html/form.html</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>store</td><td>Alex<datalist><option>Alex</option></datalist></td><td>author</td>\n" +
      "  </tr>\n" +
      "  <tr><td>store</td><td>Alex<datalist><option>Alex</option></datalist></td><td>Name with spaces also works. See tab Variables.</td>\n" +
      "  </tr>\n" +
      "  <tr><td>storeEval</td><td>new Date().toString()<datalist><option>new Date().toString()</option></datalist></td><td>time</td>\n" +
      "  </tr>\n" +
      "  <tr><td>storeTitle</td><td>page<datalist><option>page</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>echo</td><td>Added by ${author}. Time: ${time}. Page: ${page}.<datalist><option>Added by ${author}. Time: ${time}. Page: ${page}.</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>storeEval</td><td>storedVars['author'] + \"${page}\"<datalist><option>storedVars['author'] + ${page}</option><option>storedVars['author'] + \"${page}\"</option></datalist></td><td>demo1</td>\n" +
      "  </tr>\n" +
      "  <tr><td>echo</td><td>${demo1}<datalist><option>${demo}</option><option>${demo1}</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>storeEval</td><td>author + page<datalist><option>author + page</option></datalist></td><td>demo2</td>\n" +
      "  </tr>\n" +
      "  <tr><td>echo</td><td>${demo2}<datalist><option>${demo2}</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>click</td><td>id=comment<datalist><option>id=comment</option><option>name=comment</option><option>//textarea[@id='comment']</option><option>//form[@id='infoForm']/div[12]/div/textarea</option><option>//textarea</option><option>css=#comment</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>type</td><td>id=comment<datalist><option>id=comment</option><option>name=comment</option><option>//textarea[@id='comment']</option><option>//form[@id='infoForm']/div[12]/div/textarea</option><option>//textarea</option><option>css=#comment</option></datalist></td><td>Added by ${author}. Time: ${time}. Page: ${page}.</td>\n" +
      "  </tr>\n" +
      "  <tr><td>storeEval</td><td>1<datalist><option>1</option></datalist></td><td>a</td>\n" +
      "  </tr>\n" +
      "  <tr><td>storeEval</td><td>a+1<datalist><option>a+1</option></datalist></td><td>b</td>\n" +
      "  </tr>\n" +
      "  <tr><td>storeEval</td><td>b+1<datalist><option>b+1</option></datalist></td><td>c</td>\n" +
      "  </tr>\n" +
      "  <tr><td>type</td><td>id=comment<datalist><option>id=comment</option></datalist></td><td>${a} ${b} ${c}</td>\n" +
      "  </tr>\n" +
      "  </tbody></table>\n" +
      "</body>\n" +
      "</html>",
  },
  {
    testSuiteName: "Manipulate page’s Javascript variables",
    projectName: "Execute Javascript",
    description: "Execute javascript and use the returned values",
    testSuite: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
      "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
      "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\n" +
      "<head>\n" +
      "  <meta content=\"text/html; charset=UTF-8\" http-equiv=\"content-type\" />\n" +
      "  <title>Manipulate page's JavaScript variables</title>\n" +
      "</head>\n" +
      "<body>\n" +
      "<table cellpadding=\"1\" cellspacing=\"1\" border=\"1\">\n" +
      "  <thead>\n" +
      "  <tr><td rowspan=\"1\" colspan=\"3\">Manipulate page's JavaScript variables</td></tr>\n" +
      "  </thead>\n" +
      "  <tbody>\n" +
      "  <tr><td>open</td><td>https://katalon-test.s3.amazonaws.com/aut/html/form.html<datalist><option>https://katalon-test.s3.amazonaws.com/aut/html/form.html</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>runScript</td><td>return window.$.fn.jquery<datalist><option>window.$.fn.jquery</option><option>return window.$.fn.jquery</option></datalist></td><td>jQueryVersion</td>\n" +
      "  </tr>\n" +
      "  <tr><td>echo</td><td>${jQueryVersion}<datalist><option>${jQueryVersion}</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>runScript</td><td>window.text=10<datalist><option>window.text=10</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>runScript</td><td>return window.text<datalist><option>return window.text</option></datalist></td><td>text</td>\n" +
      "  </tr>\n" +
      "  <tr><td>echo</td><td>${text}<datalist><option>${text}</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  </tbody></table>\n" +
      "</body>\n" +
      "</html>",
  },
  {
    testSuiteName: "Verify",
    projectName: "Verify if field values are expected",
    description: "Verify if error messages are displayed for invalid inputs",
    testSuite: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
      "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
      "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\n" +
      "<head>\n" +
      "  <meta content=\"text/html; charset=UTF-8\" http-equiv=\"content-type\" />\n" +
      "  <title>Verify</title>\n" +
      "</head>\n" +
      "<body>\n" +
      "<table cellpadding=\"1\" cellspacing=\"1\" border=\"1\">\n" +
      "  <thead>\n" +
      "  <tr><td rowspan=\"1\" colspan=\"3\">Verify</td></tr>\n" +
      "  </thead>\n" +
      "  <tbody>\n" +
      "  <tr><td>open</td><td>https://katalon-test.s3.amazonaws.com/aut/html/form.html<datalist><option>https://katalon-test.s3.amazonaws.com/aut/html/form.html</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>click</td><td>id=first-name<datalist><option>id=first-name</option><option>name=firstName</option><option>//input[@id='first-name']</option><option>//form[@id='infoForm']/div/div/input</option><option>//input</option><option>css=#first-name</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>type</td><td>id=first-name<datalist><option>id=first-name</option><option>name=firstName</option><option>//input[@id='first-name']</option><option>//form[@id='infoForm']/div/div/input</option><option>//input</option><option>css=#first-name</option></datalist></td><td>Alex</td>\n" +
      "  </tr>\n" +
      "  <tr><td>type</td><td>id=last-name<datalist><option>id=last-name</option><option>name=lastName</option><option>//input[@id='last-name']</option><option>//form[@id='infoForm']/div[2]/div/input</option><option>//div[2]/div/input</option><option>css=#last-name</option></datalist></td><td>Smith</td>\n" +
      "  </tr>\n" +
      "  <tr><td>click</td><td>id=submit<datalist><option>id=submit</option><option>//button[@id='submit']</option><option>//form[@id='infoForm']/div[13]/div/button</option><option>//button</option><option>css=#submit</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>verifyText</td><td>id=gender-error<datalist><option>id=gender-error</option><option>//label[@id='gender-error']</option><option>//form[@id='infoForm']/div[3]/div/label</option><option>//div[3]/div/label</option><option>css=#gender-error</option></datalist></td><td>This field is required.</td>\n" +
      "  </tr>\n" +
      "  <tr><td>verifyText</td><td>id=dob-error<datalist><option>id=dob-error</option><option>//label[@id='dob-error']</option><option>//form[@id='infoForm']/div[4]/div/label</option><option>//div[4]/div/label</option><option>css=#dob-error</option></datalist></td><td>glob:*required*</td>\n" +
      "  </tr>\n" +
      "  <tr><td>verifyText</td><td>id=address-error<datalist><option>id=address-error</option><option>//label[@id='address-error']</option><option>//form[@id='infoForm']/div[5]/div/label</option><option>//div[5]/div/label</option><option>css=#address-error</option></datalist></td><td>regex:.*required\\.</td>\n" +
      "  </tr>\n" +
      "  </tbody></table>\n" +
      "</body>\n" +
      "</html>",
  },
  {
    testSuiteName: "if…elseif…else…endif",
    projectName: "Conditional cases",
    description: "Click and interact differently based on some conditions of the page",
    testSuite: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
  <title>if...elseIf...else...endIf</title>
</head>
<body>
<table cellpadding="1" cellspacing="1" border="1">
  <thead>
  <tr><td rowspan="1" colspan="3">if...elseIf...else...endIf</td></tr>
  </thead>
  <tbody>
  <tr><td>open</td><td>https://katalon-test.s3.amazonaws.com/aut/html/form.html<datalist><option>https://katalon-test.s3.amazonaws.com/aut/html/form.html</option></datalist></td><td></td>
  </tr>
  <tr><td>storeEval</td><td>1<datalist><option>1</option></datalist></td><td>i</td>
  </tr>
  <tr><td>if</td><td>i==1<datalist><option>i==2</option><option>i==1</option></datalist></td><td></td>
  </tr>
  <tr><td>click</td><td>id=first-name<datalist><option>id=first-name</option><option>name=firstName</option><option>//input[@id='first-name']</option><option>//form[@id='infoForm']/div/div/input</option><option>//input</option><option>css=#first-name</option></datalist></td><td></td>
  </tr>
  <tr><td>type</td><td>id=first-name<datalist><option>id=first-name</option><option>name=firstName</option><option>//input[@id='first-name']</option><option>//form[@id='infoForm']/div/div/input</option><option>//input</option><option>css=#first-name</option></datalist></td><td>Alex1</td>
  </tr>
  <tr><td>else</td><td><datalist><option>i==1</option><option>i==2</option><option></option></datalist></td><td></td>
  </tr>
  <tr><td>click</td><td>id=first-name<datalist><option>id=first-name</option><option>name=firstName</option><option>//input[@id='first-name']</option><option>//form[@id='infoForm']/div/div/input</option><option>//input</option><option>css=#first-name</option></datalist></td><td></td>
  </tr>
  <tr><td>type</td><td>id=first-name<datalist><option>id=first-name</option><option>name=firstName</option><option>//input[@id='first-name']</option><option>//form[@id='infoForm']/div/div/input</option><option>//input</option><option>css=#first-name</option></datalist></td><td>This block will be skipped.</td>
  </tr>
  <tr><td>endIf</td><td><datalist><option></option></datalist></td><td></td>
  </tr>
  <tr><td>if</td><td>i==2<datalist><option>i==1</option><option>i==2</option></datalist></td><td></td>
  </tr>
  <tr><td>click</td><td>id=first-name<datalist><option>id=first-name</option><option>name=firstName</option><option>//input[@id='first-name']</option><option>//form[@id='infoForm']/div/div/input</option><option>//input</option><option>css=#first-name</option></datalist></td><td></td>
  </tr>
  <tr><td>type</td><td>id=first-name<datalist><option>id=first-name</option><option>name=firstName</option><option>//input[@id='first-name']</option><option>//form[@id='infoForm']/div/div/input</option><option>//input</option><option>css=#first-name</option></datalist></td><td>Alex2</td>
  </tr>
  <tr><td>endIf</td><td><datalist><option></option></datalist></td><td></td>
  </tr>
  <tr><td>if</td><td>i==3<datalist><option>i==2</option><option>i==1</option><option>i==3</option></datalist></td><td></td>
  </tr>
  <tr><td>click</td><td>id=last-name<datalist><option>id=last-name</option><option>name=lastName</option><option>//input[@id='last-name']</option><option>//form[@id='infoForm']/div[2]/div/input</option><option>//div[2]/div/input</option><option>css=#last-name</option></datalist></td><td></td>
  </tr>
  <tr><td>type</td><td>id=last-name<datalist><option>id=last-name</option><option>name=lastName</option><option>//input[@id='last-name']</option><option>//form[@id='infoForm']/div[2]/div/input</option><option>//div[2]/div/input</option><option>css=#last-name</option></datalist></td><td>Smith3</td>
  </tr>
  <tr><td>elseIf</td><td>i==2<datalist><option>i==2</option></datalist></td><td></td>
  </tr>
  <tr><td>click</td><td>id=last-name<datalist><option>id=last-name</option><option>name=lastName</option><option>//input[@id='last-name']</option><option>//form[@id='infoForm']/div[2]/div/input</option><option>//div[2]/div/input</option><option>css=#last-name</option></datalist></td><td></td>
  </tr>
  <tr><td>type</td><td>id=last-name<datalist><option>id=last-name</option><option>name=lastName</option><option>//input[@id='last-name']</option><option>//form[@id='infoForm']/div[2]/div/input</option><option>//div[2]/div/input</option><option>css=#last-name</option></datalist></td><td>Smith2</td>
  </tr>
  <tr><td>else</td><td><datalist><option></option></datalist></td><td></td>
  </tr>
  <tr><td>click</td><td>id=last-name<datalist><option>id=last-name</option><option>name=lastName</option><option>//input[@id='last-name']</option><option>//form[@id='infoForm']/div[2]/div/input</option><option>//div[2]/div/input</option><option>css=#last-name</option></datalist></td><td></td>
  </tr>
  <tr><td>type</td><td>id=last-name<datalist><option>id=last-name</option><option>name=lastName</option><option>//input[@id='last-name']</option><option>//form[@id='infoForm']/div[2]/div/input</option><option>//div[2]/div/input</option><option>css=#last-name</option></datalist></td><td>Smith</td>
  </tr>
  <tr><td>endIf</td><td><datalist><option></option></datalist></td><td></td>
  </tr>
  </tbody></table>
</body>
</html>`,
  },
  {
    testSuiteName: "while…endwhile",
    projectName: "Repeat similar actions",
    description: "Perform actions repeatedly until a condition is met",
    testSuite: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
      "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
      "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\n" +
      "<head>\n" +
      "  <meta content=\"text/html; charset=UTF-8\" http-equiv=\"content-type\" />\n" +
      "  <title>while...endWhile</title>\n" +
      "</head>\n" +
      "<body>\n" +
      "<table cellpadding=\"1\" cellspacing=\"1\" border=\"1\">\n" +
      "  <thead>\n" +
      "  <tr><td rowspan=\"1\" colspan=\"3\">while...endWhile</td></tr>\n" +
      "  </thead>\n" +
      "  <tbody>\n" +
      "  <tr><td>open</td><td>https://katalon-test.s3.amazonaws.com/aut/html/form.html<datalist><option>https://katalon-test.s3.amazonaws.com/aut/html/form.html</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>store</td><td>1<datalist><option>1</option></datalist></td><td>ii</td>\n" +
      "  </tr>\n" +
      "  <tr><td>while</td><td>ii&lt;5<datalist><option>i==2</option><option>i==1</option><option>i&lt;10</option><option>ii&lt;10</option><option>ii&lt;5</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>click</td><td>id=first-name<datalist><option>id=first-name</option><option>name=firstName</option><option>//input[@id='first-name']</option><option>//form[@id='infoForm']/div/div/input</option><option>//input</option><option>css=#first-name</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>type</td><td>id=first-name<datalist><option>id=first-name</option><option>name=firstName</option><option>//input[@id='first-name']</option><option>//form[@id='infoForm']/div/div/input</option><option>//input</option><option>css=#first-name</option></datalist></td><td>${ii}</td>\n" +
      "  </tr>\n" +
      "  <tr><td>storeEval</td><td>${ii}+1<datalist><option>i+1</option><option>ii+1</option><option>${ii}+1</option></datalist></td><td>ii</td>\n" +
      "  </tr>\n" +
      "  <tr><td>endWhile</td><td><datalist><option></option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  </tbody></table>\n" +
      "</body>\n" +
      "</html>",
  },
  {
    testSuiteName: "Nested loops",
    projectName: "Repeat actions on similar pages",
    description: "Go over a number of similar pages and interact with the elements on these pages in similar ways",
    testSuite: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
      "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
      "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\n" +
      "<head>\n" +
      "  <meta content=\"text/html; charset=UTF-8\" http-equiv=\"content-type\" />\n" +
      "  <title>Nested loops</title>\n" +
      "</head>\n" +
      "<body>\n" +
      "<table cellpadding=\"1\" cellspacing=\"1\" border=\"1\">\n" +
      "  <thead>\n" +
      "  <tr><td rowspan=\"1\" colspan=\"3\">Nested loops</td></tr>\n" +
      "  </thead>\n" +
      "  <tbody>\n" +
      "  <tr><td>storeEval</td><td>5<datalist><option>10</option><option>2</option><option>5</option></datalist></td><td>pages</td>\n" +
      "  </tr>\n" +
      "  <tr><td>storeEval</td><td>1<datalist><option>1</option></datalist></td><td>pageIndex</td>\n" +
      "  </tr>\n" +
      "  <tr><td>while</td><td>${pageIndex}&lt;${pages}<datalist><option>${pageIndex}&lt;${pages}</option><option>pageIndex&lt;pages</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>storeEval</td><td>${pageIndex} + 1<datalist><option>${pageIndex} + 1</option></datalist></td><td>pageIndex</td>\n" +
      "  </tr>\n" +
      "  <tr><td>store</td><td>page_${pageIndex}<datalist><option>page_${pageIndex}</option></datalist></td><td>url</td>\n" +
      "  </tr>\n" +
      "  <tr><td>store</td><td>5<datalist><option>10</option><option>5</option></datalist></td><td>rows</td>\n" +
      "  </tr>\n" +
      "  <tr><td>store</td><td>0<datalist><option>0</option></datalist></td><td>rowIndex</td>\n" +
      "  </tr>\n" +
      "  <tr><td>while</td><td>${rowIndex}&lt;${rows}<datalist><option>${rowIndex}&lt;${rows}</option><option>rowIndex&lt;rows</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>storeEval</td><td>${rowIndex} + 1<datalist><option>${rowIndex} + 1</option></datalist></td><td>rowIndex</td>\n" +
      "  </tr>\n" +
      "  <tr><td>store</td><td>click_${rowIndex}<datalist><option>click_${rowIndex}</option></datalist></td><td>click</td>\n" +
      "  </tr>\n" +
      "  <tr><td>endWhile</td><td><datalist><option></option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>endWhile</td><td><datalist><option></option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  </tbody></table>\n" +
      "</body>\n" +
      "</html>",
  },
  {
    testSuiteName: "gotoIf…gotoLabel…label",
    projectName: "Reuse actions in your automation scripts",
    description: "Run a particular part of your automation scripts when needed",
    testSuite: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
      "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
      "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\n" +
      "<head>\n" +
      "  <meta content=\"text/html; charset=UTF-8\" http-equiv=\"content-type\" />\n" +
      "  <title>gotoIf...gotoLabel...label</title>\n" +
      "</head>\n" +
      "<body>\n" +
      "<table cellpadding=\"1\" cellspacing=\"1\" border=\"1\">\n" +
      "  <thead>\n" +
      "  <tr><td rowspan=\"1\" colspan=\"3\">gotoIf...gotoLabel...label</td></tr>\n" +
      "  </thead>\n" +
      "  <tbody>\n" +
      "  <tr><td>open</td><td>https://katalon-test.s3.amazonaws.com/aut/html/form.html<datalist><option>https://katalon-test.s3.amazonaws.com/aut/html/form.html</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>store</td><td>1<datalist><option>0</option><option>1</option></datalist></td><td>j</td>\n" +
      "  </tr>\n" +
      "  <tr><td>label</td><td>COMMENT<datalist><option>COMMENT</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>type</td><td>id=comment<datalist><option>id=comment</option><option>name=comment</option><option>//textarea[@id='comment']</option><option>//form[@id='infoForm']/div[12]/div/textarea</option><option>//textarea</option><option>css=#comment</option></datalist></td><td>${j}</td>\n" +
      "  </tr>\n" +
      "  <tr><td>storeEval</td><td>${j}+1<datalist><option>i+1</option><option>j+1</option><option>${j}+1</option></datalist></td><td>j</td>\n" +
      "  </tr>\n" +
      "  <tr><td>gotoIf</td><td>j &lt; 3<datalist><option>i &lt; 3</option><option>j &lt; 3</option></datalist></td><td>COMMENT</td>\n" +
      "  </tr>\n" +
      "  <tr><td>gotoLabel</td><td>END<datalist><option>END</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>type</td><td>id=comment<datalist><option>id=comment</option></datalist></td><td>skipped</td>\n" +
      "  </tr>\n" +
      "  <tr><td>label</td><td>END<datalist><option>END</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>type</td><td>id=comment<datalist><option>id=comment</option></datalist></td><td>end</td>\n" +
      "  </tr>\n" +
      "  </tbody></table>\n" +
      "</body>\n" +
      "</html>",
  },
  {
    testSuiteName: "Test Data",
    projectName: "Fill a form with data from CSV file ",
    description: "Read data from a CSV and type all of them into a page",
    testSuite: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
      "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
      "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\n" +
      "<head>\n" +
      "  <meta content=\"text/html; charset=UTF-8\" http-equiv=\"content-type\" />\n" +
      "  <title>Test Data</title>\n" +
      "</head>\n" +
      "<body>\n" +
      "<table cellpadding=\"1\" cellspacing=\"1\" border=\"1\">\n" +
      "  <thead>\n" +
      "  <tr><td rowspan=\"1\" colspan=\"3\">Test Data</td></tr>\n" +
      "  </thead>\n" +
      "  <tbody>\n" +
      "  <tr><td>loadVars</td><td>data.csv<datalist><option>workplace-team.csv</option><option>data.csv</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>open</td><td>https://katalon-test.s3.amazonaws.com/aut/html/form.html<datalist><option>https://katalon-test.s3.amazonaws.com/aut/html/form.html</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>type</td><td>id=first-name<datalist><option>id=first-name</option><option>name=firstName</option><option>//input[@id='first-name']</option><option>//form[@id='infoForm']/div/div/input</option><option>//input</option><option>css=#first-name</option></datalist></td><td>${first}</td>\n" +
      "  </tr>\n" +
      "  <tr><td>type</td><td>id=last-name<datalist><option>id=last-name</option><option>name=lastName</option><option>//input[@id='last-name']</option><option>//form[@id='infoForm']/div[2]/div/input</option><option>//div[2]/div/input</option><option>css=#last-name</option></datalist></td><td>${last}</td>\n" +
      "  </tr>\n" +
      "  <tr><td>endLoadVars</td><td><datalist><option></option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>storeCsv</td><td>data.csv,1,last<datalist><option>data.csv,1,last</option></datalist></td><td>last</td>\n" +
      "  </tr>\n" +
      "  <tr><td>echo</td><td>${last}<datalist><option>${last}</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  </tbody></table>\n" +
      "</body>\n" +
      "</html>",
    data: {
      "data.csv": {
        "content": "first,last\nAlex,Smith\nSteve,Rogers\nBruce,Wayne\n",
        "type": "csv"
      }
    }
  },
  {
    testSuiteName: "Verify vs Assert",
    projectName: "Stop when field values are unexpected",
    description: "Verify field values and stop execution if invalid.",
    testSuite: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
      "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
      "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\n" +
      "<head>\n" +
      "  <meta content=\"text/html; charset=UTF-8\" http-equiv=\"content-type\" />\n" +
      "  <title>Verify vs Assert</title>\n" +
      "</head>\n" +
      "<body>\n" +
      "<table cellpadding=\"1\" cellspacing=\"1\" border=\"1\">\n" +
      "  <thead>\n" +
      "  <tr><td rowspan=\"1\" colspan=\"3\">Verify vs Assert</td></tr>\n" +
      "  </thead>\n" +
      "  <tbody>\n" +
      "  <tr><td>open</td><td>https://katalon-test.s3.amazonaws.com/aut/html/form.html<datalist><option>https://katalon-test.s3.amazonaws.com/aut/html/form.html</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>click</td><td>id=first-name<datalist><option>id=first-name</option><option>name=firstName</option><option>//input[@id='first-name']</option><option>//form[@id='infoForm']/div/div/input</option><option>//input</option><option>css=#first-name</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>type</td><td>id=first-name<datalist><option>id=first-name</option><option>name=firstName</option><option>//input[@id='first-name']</option><option>//form[@id='infoForm']/div/div/input</option><option>//input</option><option>css=#first-name</option></datalist></td><td>Alex</td>\n" +
      "  </tr>\n" +
      "  <tr><td>click</td><td>id=last-name<datalist><option>id=last-name</option><option>name=lastName</option><option>//input[@id='last-name']</option><option>//form[@id='infoForm']/div[2]/div/input</option><option>//div[2]/div/input</option><option>css=#last-name</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>type</td><td>id=last-name<datalist><option>id=last-name</option><option>name=lastName</option><option>//input[@id='last-name']</option><option>//form[@id='infoForm']/div[2]/div/input</option><option>//div[2]/div/input</option><option>css=#last-name</option></datalist></td><td>Smith</td>\n" +
      "  </tr>\n" +
      "  <tr><td>click</td><td>id=submit<datalist><option>id=submit</option><option>//button[@id='submit']</option><option>//form[@id='infoForm']/div[13]/div/button</option><option>//button</option><option>css=#submit</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>verifyText</td><td>id=gender-error<datalist><option>id=gender-error</option><option>//label[@id='gender-error']</option><option>//form[@id='infoForm']/div[3]/div/label</option><option>//div[3]/div/label</option><option>css=#gender-error</option></datalist></td><td>Execution will continue after this check.</td>\n" +
      "  </tr>\n" +
      "  <tr><td>assertText</td><td>id=gender-error<datalist><option>id=gender-error</option><option>//label[@id='gender-error']</option><option>//form[@id='infoForm']/div[3]/div/label</option><option>//div[3]/div/label</option><option>css=#gender-error</option></datalist></td><td>Execution will stop after this check.</td>\n" +
      "  </tr>\n" +
      "  <tr><td>verifyText</td><td>id=gender-error<datalist><option>id=gender-error</option><option>//label[@id='gender-error']</option><option>//form[@id='infoForm']/div[3]/div/label</option><option>//div[3]/div/label</option><option>css=#gender-error</option></datalist></td><td>This step will not execute.</td>\n" +
      "  </tr>\n" +
      "  </tbody></table>\n" +
      "</body>\n" +
      "</html>",
  },
  {
    testSuiteName: "waitFor…",
    projectName: "Wait patiently",
    description: "Wait for an element to be present",
    testSuite: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
      "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
      "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\n" +
      "<head>\n" +
      "  <meta content=\"text/html; charset=UTF-8\" http-equiv=\"content-type\" />\n" +
      "  <title>waitFor...</title>\n" +
      "</head>\n" +
      "<body>\n" +
      "<table cellpadding=\"1\" cellspacing=\"1\" border=\"1\">\n" +
      "  <thead>\n" +
      "  <tr><td rowspan=\"1\" colspan=\"3\">waitFor...</td></tr>\n" +
      "  </thead>\n" +
      "  <tbody>\n" +
      "  <tr><td>open</td><td>https://katalon-test.s3.amazonaws.com/aut/html/delay.html<datalist><option>https://katalon-test.s3.amazonaws.com/aut/html/delay.html</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>waitForElementPresent</td><td>id=waitedForElement<datalist><option>id=waitedForElement</option><option>//div[@id='waitedForElement']</option><option>//div[@id='container']/div</option><option>//div[2]/div</option><option>css=#waitedForElement</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>echo</td><td>Done!<datalist><option>Done!</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  </tbody></table>\n" +
      "</body>\n" +
      "</html>",
  },
  {
    testSuiteName: "waitFor…wisthCustomTimeout",
    projectName: "Wait impatiently",
    description: "Wait for an element to be present only within some seconds",
    testSuite: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
      "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
      "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\n" +
      "<head>\n" +
      "  <meta content=\"text/html; charset=UTF-8\" http-equiv=\"content-type\" />\n" +
      "  <title>waitFor... with custom timeout</title>\n" +
      "</head>\n" +
      "<body>\n" +
      "<table cellpadding=\"1\" cellspacing=\"1\" border=\"1\">\n" +
      "  <thead>\n" +
      "  <tr><td rowspan=\"1\" colspan=\"3\">waitFor... with custom timeout</td></tr>\n" +
      "  </thead>\n" +
      "  <tbody>\n" +
      "  <tr><td>open</td><td>https://katalon-test.s3.amazonaws.com/aut/html/delay.html<datalist><option>https://katalon-test.s3.amazonaws.com/aut/html/delay.html</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>#</td><td>The element will show up in 10 seconds, but we only wait 2 seconds<datalist><option>The element will show up in 10 seconds, but we only wait 2 seconds</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>setTimeout</td><td>2000<datalist><option>2000</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>waitForElementPresent</td><td>id=waitedForElement<datalist><option>id=waitedForElement</option><option>//div[@id='waitedForElement']</option><option>//div[@id='container']/div</option><option>//div[2]/div</option><option>css=#waitedForElement</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>echo</td><td>Done!<datalist><option>Done!</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  </tbody></table>\n" +
      "</body>\n" +
      "</html>",
  },
  {
    testSuiteName: "Delay",
    projectName: "Pause",
    description: "Pause for 5 seconds and then continue",
    testSuite: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
      "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
      "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\n" +
      "<head>\n" +
      "  <meta content=\"text/html; charset=UTF-8\" http-equiv=\"content-type\" />\n" +
      "  <title>Delay</title>\n" +
      "</head>\n" +
      "<body>\n" +
      "<table cellpadding=\"1\" cellspacing=\"1\" border=\"1\">\n" +
      "  <thead>\n" +
      "  <tr><td rowspan=\"1\" colspan=\"3\">Delay</td></tr>\n" +
      "  </thead>\n" +
      "  <tbody>\n" +
      "  <tr><td>open</td><td>https://katalon-test.s3.amazonaws.com/aut/html/form.html<datalist><option>https://katalon-test.s3.amazonaws.com/aut/html/form.html</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>echo</td><td>1<datalist><option>1</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>pause</td><td>5000<datalist><option>10000</option><option>5000</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  <tr><td>echo</td><td>2<datalist><option>2</option></datalist></td><td></td>\n" +
      "  </tr>\n" +
      "  </tbody></table>\n" +
      "</body>\n" +
      "</html>",
  },
]

function generateDialogHTML() {
  return sampleData.reduce((html, data, index) => {
    return html + `<div id="sample-${index}" style="text-align: center">
                        <h3>${data.projectName}</h3>
                        <p>${data.description}</p>
                    </div>`
  }, "");
}

function attachEvent() {
  $("#sample-project-dialog div").click(function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      $(this).addClass("selected");
    }
  });
}

async function addSample() {
  let selectedSample = $("#sample-project-dialog .selected");
  if (selectedSample.length === 0) {
    return;
  }
  let trackingSample = [];
  $(selectedSample).each((index, element) => {
    let id = element.id.substring(7);
    trackingSample.push(sampleData[id].projectName);
    let testSuite = sampleData[id].testSuite;
    if (sampleData[id].data) {
      dataFiles = Object.assign(dataFiles, sampleData[id].data);
      saveDataFiles();
    }
    readSuiteFromString(testSuite);
  });
  let playBackTrackingData = await getTrackingPlayBackData();
  let numOfExecution = playBackTrackingData.playTestCaseFail + playBackTrackingData.playTestCaseSuccess;
  browser.storage.local.set({ addSample: { isAddSample: true, numOfExecution } });
  trackingSegment("kru_add_sample_project", { projectName: trackingSample });

}

$(document).ready(function () {
  const html = generateDialogHTML();
  $("#sample-project").click(function () {
    if ($("#sample-project:visible").length !== 0){
      $("#helpDialog").dialog("close");
    }
    let dialog = $("#sample-project-dialog");
    if (dialog.length) {
      $(dialog).dialog("open");
      return;
    }
    $('<div id="sample-project-dialog"></div>').dialog({
      title: "Sample Projects",
      autoOpen: true,
      resizable: false,
      width: 700,
      maxHeight: 450,
      modal: true,
      closeText: "Close",
      position: { my: "top+15%", at: "top+15%", of: window },
      buttons: {
        "Add": {
          text: "Add",
          id: "add-sample-project",
          click: () => {
            $("#sample-project-dialog").dialog("close");
            addSample();
          }
        }
      },
      open: function () {
        $('.ui-dialog-titlebar-close')
          .removeClass("ui-dialog-titlebar-close ui-button ui-corner-all ui-widget ui-button-icon-only")
          .attr("id", "close-sample-data-dialog")
          .html('<span style="float:right;"></span>');
      }
    }).html(html);
    attachEvent();
  });
});




