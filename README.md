# SocioLive Core Standalone
A standalone version of SocioLive that is completely offline and runs on a simple index.html file. 


### Socio Labs Summer 2017 Take Home Assignment

#### Introduction

Here at [Socio](https://socio.events), one of our simplest but most engaging products is the SocioLive and its Attendee Drawing Feature. Our customers use SocioLive to visualize the engagement that is going on during their event. The attendee drawing serves as their tool to administer giveaways throughout or at the conclusion of said event. To see SocioLive in action simply click [here](http://socio.live). And by hovering your mouse to that magic wand on the left top corner you can start the Attendee Drawing. The numbers that are changing show the number of attendees that have joined the event, as well as, how many people have made connections (handshakes) with each other, and the leading industries shows the industry making the most connections! 

Currently, the names in this demo Attendee Drawing are hardcoded in the Javascript code (`js/live-demo.js`). One of the most frequent requests that we receive from our customers is to have the ability to upload names to our Attendee Drawing through a csv (comma-separated values) file. As your take home assignment, you will simply be given this task. You will need to somehow let our customer upload a csv file into Attendee Drawing. You will be responsible for designing the front-end and back-end of it through HTML and Javascript or anything that can run in a browser.

Here you can see an example csv file that our customers will be able to use to upload names into a Attendee Drawing. You will be given the current source code that we have, but we would like to keep this assignment open ended, so feel free to rewrite the entire Attendee Drawing through a framework/language of your choice ([ReactJS](https://facebook.github.io/react/) would be one that we would be interesting to see, but plain old Javascript or [AngularJS](https://angularjs.org/) is also good). If you decide to not use the code provided and rewrite, you do NOT need recreate any of the other parts of SocioLive, just the Attendee Drawing. Ultimately, this project is entirely yours, so think of this project as something that we would publish to thousands of people to use. 

P.S. If you come up with something solid, we will publish it and thousands of people will enjoy using your creation! We recommended keeping this work you create in your public profile for other people to see. We love open source and we love collaborating!

---

#### Instructions
* Fork this repository to your own personal Github. Keep it public! 
    * [Fork a Repo](https://help.github.com/articles/fork-a-repo)
* Download the repository to your computer
    * We like to use Git via [SourceTree](https://www.sourcetreeapp.com/). Of course, you can use command line Git, your own tools, or simply download the repository as a ZIP file
* If you are editing the code, just get started and be sure to commit your work!
* If you are rewriting the entire SocioLive Attendee Drawing, then feel free to delete all the original source code files and your put your own files into the repository and begin committing!
* Be sure to test your code using one or more examples
* Once you are done, feel free to let us know and send us link to repository or send us a pull request! 
    * [Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/)
* P.S. If you want to build more than one version feel free to send them both with us!


#### Questions
If you have any questions, feel free to add a Github Issue on the repository. Instructions on creating an issue can be found [here](https://help.github.com/articles/creating-an-issue/).

Just for reference, the repository's Github issues can be found [here](https://github.com/jlwatkins/socio-live-standalone-core/issues)

---

#### Important Files
* `js/live-demo.js` - main javascript file which includes attendee drawing AND SocioLive code. Only need to pay attention to attendee drawing code
* `index.html` - main HTML file
* `examples\simple-example-1.csv` - simple CSV file that you can use to test your code and know how the an example input would look like

#### Other Files / Folders
* `css/presentation/*` - all the CSS files used
* `font-awesome/*` - the font we use on the page
* `images/presentation/*` - the themes and backgrounds we use throughout the website
* `vendor/*` - third-party libraries that we use, you are NOT limited to these, feel free to choose your own and add more here!

---

#### Our Favorite Tools (just in-case your interested)
* [SublimeText](https://www.sublimetext.com/) - Free
* [WebStorm](https://www.jetbrains.com/webstorm/) - Free for students available [here](https://www.jetbrains.com/student/) 
* [Git](https://git-scm.com/) and [Github](https://github.com/) - Free
* [SourceTree](https://www.sourcetreeapp.com/) - Free

---

### Design Documenation for CSV Upload Functionality

#### Design Philosophy
The intent of the assignment was to allow a user to upload a list of attendees that reside in a comma separated values (CSV) file.  The approach taken is to provide this functionality by modifying as little as possible for simplicity as well as to not be invasive to the exisitng interface.  As such, I chose not to re-implement the entire interface and use existing menus as much as possible.

#### Upload Components
To upload a CSV file, the user opens the action menu and, if their browser supports the FileReader object, they will see an "Upload Attendees" menu option.  The FileReader object support is needed by the implementation so for browsers that do not support this object, the menu for "Uploading Attendees" menu is hidden.  Selecting the menu brings up a file browser filtered for .csv files.  Once the user selects the file containing the attendees (and clicks "open"), the file is uploaded, parsed, data validated, and the attendees list is updated with the new values.  Existing attendees are replaced with those from the CSV file.  If the user wishes to append to existing attendees they will need to update the CSV file and upload again.

#### The PapaParse JS Library
The parsing of the CSV file itself is done using the PapaParse javascript library (http://papaparse.com/).  The library provides multiple options for CSV parsing and can detect malformatted files.  It also has a very intutive application programming interface.

#### Other Error Checking
Since the BasicUser object requires 'first name', 'last name', and 'info' fields, the code ensures that the name (both first and last) have a value and that there are no duplicate attendees.  It also ensures that the CSV is properly formatted, requiring a header line as specified in the example csv file given.

#### Test Cases
Additional test .csv file used are located in the `examples/` directory

#### Future Extension: Server Side Attendee Storage
Currently when the web page is refreshed the attendee names default back to the original, hard-coded values.  To further improve functionality, it would be beneficial for the uploaded attendees to be saved on the server side and then sent to the client browser when the page is loaded.  This would require additional functionality on the server side to store the uploaded file in an appropriate place.  The client browser could then issue an asynchronous request to the server at load time to retrieve the CSV file data and update the user list.  The loading and validation could be done using the same code as is implemented for this assignment. 
