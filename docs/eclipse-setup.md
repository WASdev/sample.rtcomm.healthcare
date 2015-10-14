# Eclipse with WDT

[Install WDT on Eclipse](https://developer.ibm.com/wasdev/downloads/liberty-profile-using-eclipse/)


## Clone the Git Repo

1. Open the Git repositories view
  +  *Window -> Show View -> Other...*
  + Type *git* in the filter box and select **Git Repositories** and click 'OK'
  + Click on *Clone a Git Repository*
2. Copy and paste the Github repository URI (https://github.com/jfmartinez/sample.rtcomm.healthcare.git) to the Location URI text field on Eclipse
3. Click 'Next', select only the 'maven-setup' branch, uncheck the other branches that may have been selected and Click 'Next'
4. Click on 'Finish'

## Building with Maven

####Import Maven projects into WDT

1. In the *Git Repositories* view, expand the **sample.rtcomm.healthcare** repo
2. Right-click on the "Working Directory" folder and select "Copy Path to Clipboard"
3. Select *File -> Import -> Maven -> Existing Maven Projects*, then click 'Next'
4. In the Root Directory textbox, Paste in the repository directory (from Step 2)
5. Select Browse... and confirm 3 pom.xml files are selected, click "Finish"
6. Eclipse will create 3 projects:
  + *rtcomm.healthcare.app* - Application part of the sample
  + *rtcomm.healthcare.wlpcfg* - Liberty server configuration of the sample
  + *sample.rtcomm.healthcare* - Root directory of the sample
#### Run Maven Install
1. Right-click on sample.rtcomm.healthcare/pom.xml
2. *Run As -> Maven Build...*
3. In the **Goals** section enter "install"
4. Click Run

## Run the application locally

#### Create a runtime Environment in Eclipse

1. Open the 'Runtime Explorer' view
  + *Window -> Show View -> Other*
  + Type *runtime* in the filterbox and select **Runtime Explorer**
2. Right-click the view and select *New -> Runtime Environment*
3. Give the Runtime environment a name, e.g.
`wlp-2015.8.0.0` if you're using the August 2015 release
4. Create the runtime environment either:
  + Select an existing installation
  + Select *Install from an archive or a repository* to download a new Liberty archive
5. Follow the prompts:
  + If you decided to download Liberty, choose "WAS Liberty V8.5.5.7 Runtime " please install the following add-ons when prompted
    + `Real-Time Communications [rtcomm-1.0]` "rtcomm" in the text filter
    + `JsonP (javax.json) Sample [jsonp-1.0]` - Type "jsonp" in the text filter
    + `Java Servlets 3.1 [servlet-3.1]` - Type "servlet" in the text filter and scroll down


#### Add the User Directory from the Maven project and create a Server

1. Right-click on the Runtime Environment created above located in the 'Runtime Explorer' view and select 'Edit'
2. Click the **Advanced Options...** link
3. If the *rtcomm.healthcare.wlpcfg* directory is not listed, we need to add it:
  1. Click New
  2. Select the *rtcomm.healthcare.wlpcfg* project
  3. Select *Finish, Ok, Finish*
4. Right-click on the *rtcomm.healthcare.wlpcfg* user directory listed under the target Runtime Environment in the Runtime Explorer View and select *New Server*.
5. A dialog should appear with the **RtcommHealthcareServer** Liberty Profile server
6. Click Finish

#### Running the Sample Application

1. Open the 'Servers' view
  + *Window -> Show View -> Other*
  + Type *servers* in the filterbox and select **Servers**
2. Right-click on the server at localhost [RtcommHealthcareServer]
  + Click 'Start'
3. Open the sample at http://localhost:9080/sample.rtcomm.healthcare/
