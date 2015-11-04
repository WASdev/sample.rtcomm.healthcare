### Command Line

#### Clone the Git Repo
Clone the repository into a directory (i.e. $HOME/sample.rtcomm.healthcare)

```
git clone https://github.com/jfmartinez/sample.rtcomm.healthcare.git
```
#### Building the Sample Using [Apache Maven](https://maven.apache.org/)

Change to the created directory and use Maven to build the sample

```
mvn install
```

In order to run the sample, you need a valid installation of liberty.

###### Using a local Liberty installation

To learn how to download and install Liberty locally go here: [Download WAS Liberty](docs/Download-WAS-Liberty.md)

```
mvn install -Pwlp-local -Dwlp.install.dir=/path/to/liberty/installation/
```

###### Download Liberty to the Project using Maven

Specify a licensed version of liberty that should be downloaded by the liberty-maven -plugin. The current developer license can be found at the bottom of the [current license](http://public.dhe.ibm.com/ibmdl/export/pub/software/websphere/wasdev/downloads/wlp/8.5.5.5/lafiles/runtime/en.html), look for the 'D/N: &lt;license code&gt;'.

Now use Maven to download Liberty (it will be downloaded to the **/path/to/sample.rtcomm.healthcare/rtcomm.healthcare.wlpcfg/target/** directory)
```
mvn install -Pwlp-download -Dwlp.license=<license code>
```
#### Running the sample locally

Once the installation process is completed, you can run the sample by:
```
cd rtcomm.healthcare.wlpcfg
mvn liberty:run-server
```
This will run the server on the foreground.
Access the sample at: [http://localhost:9080/sample.rtcomm.healthcare/](http://localhost:9080/sample.rtcomm.healthcare/)
