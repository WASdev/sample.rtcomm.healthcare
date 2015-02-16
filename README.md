#sample.rtcomm.healthcare
This sample demonstrates using the lib.rtcomm.clientjs and lib.angular-rtcomm projects to add real-time communications to a Healthcare website. The sample supports 3 roles:

1.  Patient -- A customer/consumer of the healthcare service using the web site to determine something about their healthcare
2.  Healthcare Agent -- A support agent providing assistance with using the website via chat and video.
3.  Healthcare Doctor -- A Doctor who is available to provide immediate assistance through chat andvideo.

##Requirements

1.  A Liberty Profile server that runs with the  `rtcomm-1.0` feature enabled. 
2.  Chrome or Firefox web browsers that support WebRTC.
3.  Eclipse with the latest beta of the WDT Tools installed.

##Installation

1.  Clone the repository:

```
git clone https://github.com/WASdev/sample.rtcomm.healthcare.git
```
Presumably this ends up in some directory: $HOME/sample.rtcomm.healthcare

2. Import the project into Eclipse 

Presuming Liberty is already installed into the directory '$WLP'

3.  Create a new liberty server
```
$WLP/bin/server create ibmhealth
```

4.  In Eclipse, deploy the application to the Liberty server.

5.  Copy the server.xml from the cloned project into the server directory.
```
cp $HOME/sample.rtcomm.healthcare/serverxml/server.xml $WLP/usr/servers/ibmhealth
```

6.  Start Liberty.

7.  Access 'http://localhost:9080/sample.rtcomm.healthcare/' in order to play with the sample.
