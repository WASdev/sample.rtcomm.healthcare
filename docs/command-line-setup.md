# Command Line
### Clone the Git Repo
Clone the repository into a directory (i.e. $HOME/sample.rtcomm.healthcare)

```
$ git clone https://github.com/jfmartinez/sample.rtcomm.healthcare.git
```

### Building the Sample Using [Apache Maven](https://maven.apache.org/)
Change to the created project directory and use Maven to build the sample. The following will happen:
- Web application (_rtcomm.healthcare.app_) is built and packaged as a .war file
- Liberty is downloaded to the project
- Application is installed to the server and the server is assembled and packaged. (_rtcomm.healthcare.wlpcfg_)

```
$ mvn install
```

##### Building the Sample with a local Liberty installation
This step can be ignored if you already ran __mvn install__. In order to build the sample with a local Liberty install specify the **wlp.install.dir** (Liberty install directory):

```
$ mvn install -Dwlp.install.dir=/path/to/installed/wlp
```

### Running the Sample Locally
The build should have downloaded a Liberty install. You can run the sample by changing to the __rtcomm.healthcare.wlpcfg__ directory:

```
$ cd rtcomm.healthcare.wlpcfg
```

```
[rtcomm.healthcare.wclpfg]$ mvn liberty:run-server
```
If you used **mvn install** with a local Liberty installation, use the following command to run the server:

```
[rtcomm.healthcare.wclpfg]$ mvn liberty:run-server -Dwlp.install.dir=/path/to/installed/wlp
```

 This will run the server on the foreground. Access the sample at: [http://localhost:9080/](http://localhost:9080/)

### Deploying the Sample to Bluemix
You will need to download and install the [Cloud Foundry command line interface](https://www.ng.bluemix.net/docs/starters/install_cli.html), this can be used to deploy and manage applications on Bluemix. Once the Cloud Foundry tools are installed you can simply push the packaged server:

```
 $ cf push <appName> -p rtcomm.healthcare.wlpcfg/servers/RtcommHealthcareServer/RtcommHealthcareServer.zip
```
