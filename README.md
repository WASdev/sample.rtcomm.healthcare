# sample.rtcomm.healthcare
This sample demonstrates using the WASdev/lib.rtcomm.clientjs and WASdev/lib.angular-rtcomm projects to add real-time communications to a Healthcare website. The sample supports 3 roles:

1.  Patient -- A customer/consumer of the healthcare service using the web site to determine something about their healthcare
2.  Healthcare Agent -- A support agent providing assistance with using the website via chat and video.
3.  Healthcare Doctor -- A Doctor who is available to provide immediate assistance through chat andvideo.

A live demo of this app is located here:  http://rtcomm-healthcare.wasdev.developer.ibm.com/

## Requirements

1.  A Liberty Profile server that runs with the `rtcomm-1.0` feature enabled.
2.  Chrome or Firefox web browsers that support WebRTC.
3.  Eclipse with the latest beta of the WDT Tools installed.
4.  bower package manager

## Building and Running The Sample

There are two options for building and running the sample:

+ Using [Eclipse with WDT](#eclipse-with-wdt) (Websphere Developer Tools)
+ [Command Line](#command-line)

___

### Eclipse with WDT

[Install WDT on Eclipse](https://developer.ibm.com/wasdev/downloads/liberty-profile-using-eclipse/)


#### Clone the Git Repo

1. Open the Git repositories view
  +  *Window -> Show View -> Other*
  + Type *git* in the filter box and select **Git Repositories**
  + Click on *Clone a Git Repository*
2. Copy and paste the Github repository URI (https://github.com/jfmartinez/sample.rtcomm.healthcare.git) to the Location URI text field on Eclipse
3. Click 'Next', select only the 'maven-setup' branch
4. Click on 'Finish'

#### Building with Maven

Import Maven projects into WDT

1. In the *Git Repositories* view, expand the **sample.rtcomm.healthcare** repo
2. Right-click on the "Working Directory" folder and select "Copy path to Clipboard"
3. Select *File -> Import -> Maven -> Existing Maven Projects*
4. In the Root Directory textbox, Paste in the repository directory (from Step 2)
5. Select Browse.. and confirm 3 pom.xml files are selected, click "Finish"
6. Eclipse will create 3 projects:
  + *sample.rtcomm.healthcare* - Root directory of the sample
  + *rtcomm.healthcare.app* - Application part of the sample
  + *rtcomm.healthcare.wlpcfg* - Liberty server configuration of the sample

###### Run Maven Install
1. Right-click on sample.rtcomm.healthcare/pom.xml
2. *Run As -> Maven Build...*
3. In the **Goals** section enter "install"
4. Click Run

#### Run the application locally

###### Create a runtime Environment in Eclipse

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


###### Add the User Directory from the Maven project and create a Server

1. Right-click on the Runtime Environment created above located in the 'Runtime Explorer' view and select 'Edit'
2. Click the **Advanced Options...** link
3. If the *rtcomm.healthcare.wlpcfg* directory is not listed, we need to add it:
  1. Click New
  2. Select the *rtcomm.healthcare.wlpcfg* project
  3. Select *Finish, Ok, Finish*
4. Right-click on the *rtcomm.healthcare.wlpcfg* user directory listed under the target Runtime Environment in the Runtime Explorer View and select *New Server*.
5. A dialog should appear with the **RtcommHealthcareServer** Liberty Profile server
6. Click Finish

###### Running the Sample Application

1. Open the 'Servers' view
  + *Window -> Show View -> Other*
  + Type *servers* in the filterbox and select **Servers**
2. Right-click on the server at localhost [RtcommHealthcareServer]
  + Click 'Start'
3. Open the sample at http://localhost:9080/sample.rtcomm.healthcare/

___

### Command Line

#### Clone the Git Repo
Clone the repository into a directory (i.e. $HOME/sample.rtcomm.healthcare)

```
git clone -b maven-setup https://github.com/jfmartinez/sample.rtcomm.healthcare.git
```
#### Building the Sample Using [Apache Maven](https://maven.apache.org/)

Change to the created directory and use Maven to build the sample

```
mvn install
```
###### Download Liberty

In order to run the sample, you need a valid installation of liberty. If you already have a version of liberty you can skip this step.

Specify a licensed version of liberty that should be downloaded by the liberty-maven -plugin. The current developer license can be found at the bottom of the [curent license](http://public.dhe.ibm.com/ibmdl/export/pub/software/websphere/wasdev/downloads/wlp/8.5.5.5/lafiles/runtime/en.html), look for the 'D/N: &lt;license code&gt;'.

Now use Maven to download Liberty (it will be downloaded to the **/path/to/sample.rtcomm.healthcare/rtcomm.healthcare.wlpcfg/target/** directory)
```
mvn install -Pwlp-download -Dwlp.license=<license code>
```
#### Running the sample locally


If you have a valid installation of Liberty with the `rtcomm-1.0` feature already installed  use the following to start the server and run the application

```
export WLP_USER_DIR=/path/to/sample.rtcomm.healthcare/rtcomm.healthcare.wlpcfg
/path/to/wlp/bin/server run RtcommHealthcareServer
```

If you downloaded Liberty in this project you can use the installation to run the server

````
export WLP_USER_DIR=/path/to/sample.rtcomm.healthcare/rtcomm.healthcare.wlpcfg
rtcomm.healthcare.wlpcfg/target/liberty/wlp/bin/server run RtcommHealthcareServer
````

Access the sample at: (http://localhost:9080/sample.rtcomm.healthcare/)
