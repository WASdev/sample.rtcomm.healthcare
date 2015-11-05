# Command Line
## Clone the Git Repo
Clone the repository into a directory (i.e. $HOME/sample.rtcomm.healthcare)

```
git clone https://github.com/jfmartinez/sample.rtcomm.healthcare.git
```

## Building the Sample Using [Apache Maven](https://maven.apache.org/)
Change to the created directory and use Maven to build the sample. It will also download a Liberty install.

```
mvn install
```

###### Running the sample on a local Liberty install
In order to run the sample with a local Liberty install specify the **wlp.install.dir** (Liberty install directory):

```
mvn install -Dwlp.install.dir=/path/to/installed/wlp
```

#### Running the sample locally

The build should have downloaded a Liberty install. You can run the sample by:
```
mvn liberty:run-server
 ```

 Or if you want to run the sample on a local liberty install
 ```
 mvn liberty:run-server -Dwlp.install.dir=/path/to/installed/wlp
 ```
 This will run the server on the foreground. Access the sample at: [http://localhost:9080/sample.rtcomm.healthcare/](http://localhost:9080/sample.rtcomm.healthcare/)


 #### Deploying the Sample to Bluemix

 First you will need to download and install the [Cloud Foundry command line interface] (https://www.ng.bluemix.net/docs/starters/install_cli.html), this can be used to deploy and manage application son Bluemix. Once the Cloud Foundry tools are installed you can simply push the packaged server:

 ```
 cf push <appName> -p rtcomm.healthcare.wlpcfg/servers/RtcommHealthcareServer/RtcommHealthcareServer.zip
 ```
