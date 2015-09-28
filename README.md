#sample.rtcomm.healthcare
This sample demonstrates using the WASdev/lib.rtcomm.clientjs and WASdev/lib.angular-rtcomm projects to add real-time communications to a Healthcare website. The sample supports 3 roles:

1.  Patient -- A customer/consumer of the healthcare service using the web site to determine something about their healthcare
2.  Healthcare Agent -- A support agent providing assistance with using the website via chat and video.
3.  Healthcare Doctor -- A Doctor who is available to provide immediate assistance through chat andvideo.

A live demo of this app is located here:  http://rtcomm-healthcare.wasdev.developer.ibm.com/sample.rtcomm.healthcare/

##Requirements

1.  A Liberty Profile server that runs with the `rtcomm-1.0` feature enabled. 
2.  Chrome or Firefox web browsers that support WebRTC.
3.  Eclipse with the latest beta of the WDT Tools installed.
4.  bower package manager

##Installation

1. Clone the repository into a directory (i.e. $HOME/sample.rtcomm.healthcare)
  
  ```
  git clone https://github.com/WASdev/sample.rtcomm.healthcare.git
  ```
2. Install package dependecies:
  
  ``` 
  cd $HOME/sample.rtcomm.healthcare/WebContent
  bower install
  ```
3. Import the project into Eclipse 
4. Create a new liberty server(Presuming Liberty is already installed into the directory '$WLP')
  
  ```
  $WLP/bin/server create ibmhealth
  ```
6.  Copy the serverxml/server.xml from the cloned project into the Liberty ibmhealth server directory.
  
  ```
  cp $HOME/sample.rtcomm.healthcare/serverxml/server.xml $WLP/usr/servers/ibmhealth
  ```
7. Configure the MQTT Server and Topic Path:
  1.  Edit the `$WLP/usr/servers/ibmhealth/server.xml` file
    1.  Change the "\<MQTTSERVERHOSTNAME\>" to a valid MQTT Server (A public one for development purposes is located at: messagesight.demos.ibm.com)
    2.  Change the "\<RTCOMMTOPICPATH\>" to define the topic path for your system (Anything you want, but if you are using a **SHARED** MQTT Server then you need to make sure it is **UNIQUE**).
      Try something like "/rtcommHealthcare<somerandomnumber>/"
  2.  Copy the  `$HOME/sample.rtcomm.healthcare/WebContent/rtcommConfig.json.template` file and edit it:
    1.  `cp $HOME/sample.rtcomm.healthcare/WebContent/rtcommConfig.json.template $HOME/sample.rtcomm.healthcare/WebContent/rtcommConfig.json`
    2.  In the rtcommConfig.json file, change the "\<MQTTSERVERHOSTNAME\>" to match the value chosen above
    3.  IN the rtcommConfig.json file, change the "\<RTCOMMTOPICPATH\>" to match the value chosen above
8.  In Eclipse, deploy the application to the Liberty server.
9.  Start Liberty.
10.  Access 'http://localhost:9080/sample.rtcomm.healthcare/' in order to play with the sample.
