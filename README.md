#sample.rtcomm.healthcare
This sample demonstrates using the WASdev/lib.rtcomm.clientjs and WASdev/lib.angular-rtcomm projects to add real-time communications to a Healthcare website. The sample supports 3 roles:

1.  Patient -- A customer/consumer of the healthcare service using the web site to determine something about their healthcare
2.  Healthcare Agent -- A support agent providing assistance with using the website via chat and video.
3.  Healthcare Doctor -- A Doctor who is available to provide immediate assistance through chat andvideo.

A live demo of this app is located here:  http://rtcomm-healthcare.wasdev.developer.ibm.com/

##Requirements

1.  A Liberty Profile server that runs with the `rtcomm-1.0` feature enabled.
2.  Chrome or Firefox web browsers that support WebRTC.
3.  Eclipse with the latest beta of the WDT Tools installed.
4.  bower package manager

##Building and Running The Sample

### Eclipse / WDT


[Install WDT on Eclipse](https://developer.ibm.com/wasdev/downloads/liberty-profile-using-eclipse/)


#### Clone the Git Repo

1. Open the GIt repositories view
  +  *Window -> Show View -> Other *
  + Type *git* in the filter box and select ** Git Repositories **
2. Copy Git

### Command Line

#### Clone the Git Repo
Clone the repository into a directory (i.e. $HOME/sample.rtcomm.healthcare)

```
git clone https://github.com/WASdev/sample.rtcomm.healthcare.git
```
#### Building the Sample Using [Apache Maven](https://maven.apache.org/)

Change to the created directory and use Maven to build the sample

```
mvn install
```
###### Download Liberty

In order to run the sample, you need a valid installation of liberty. If you already have a version of liberty you can skip this step.

Specify a licensed version of liberty that should be downloaded by the liberty-maven -plugin. The current developer license can be found at the bottom of the [curent license](http://public.dhe.ibm.com/ibmdl/export/pub/software/websphere/wasdev/downloads/wlp/8.5.5.5/lafiles/runtime/en.html), look for the 'D/N: &lt;license code&gt;'.

Now use Maven to download Liberty (it will be downloaded to the ** /path/to/sample.rtcomm.healthcare/rtcomm.healthcare.wlpcfg/target/** directory)
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
