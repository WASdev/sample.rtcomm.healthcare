# sample.rtcomm.healthcare
This sample demonstrates using the WASdev/lib.rtcomm.clientjs and WASdev/lib.angular-rtcomm projects to add real-time communications to a Healthcare website. The sample supports 3 roles:

1.  Patient -- A customer/consumer of the healthcare service using the web site to determine something about their healthcare
2.  Healthcare Agent -- A support agent providing assistance using the website via chat and video.
3.  Healthcare Doctor -- A Doctor who is available to provide immediate assistance through chat and video.

A live demo of this app is located here:  http://rtcomm-healthcare.wasdev.developer.ibm.com/

## Requirements

1.  A Liberty Profile server that runs with the `rtcomm-1.0` feature enabled.
2.  Chrome or Firefox web browsers that support WebRTC.
3.  Eclipse with the latest beta of the WDT Tools installed.
4.  bower package manager

## Building and Running The Sample

There are two options for building and running the sample:

+ Using [Eclipse with WDT](docs/eclipse-setup.md) (Websphere Developer Tools)
+ [Command Line](docs/command-line-setup.md)
