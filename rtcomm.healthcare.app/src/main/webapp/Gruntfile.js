module.exports = function(grunt) {

  var shortid = require('shortid');

  topicpath = shortid.generate();

  grunt.initConfig({

    'string-replace': {
  dist: {
    files: [{
      expand: true,
      src: ['rtcommConfig.json', '../../../../rtcomm.healthcare-wlpcfg/servers/RtcommHealthcareServer/server.xml']


    }],
    options: {
      replacements: [
        {

          pattern: /(\"rtcommTopicPath\" : \"\/.*\/\")/,
          replacement: "\"rtcommTopicPath\" : \"/" + topicpath  + "/\"",


        },
        {
        pattern: /(rtcommTopicPath=\"\/.*?\/\")/,
        replacement: 'rtcommTopicPath=\"/'+topicpath + '/\"'
      },
      {

        pattern: /(sharedSubscriptionPath=\"\$SharedSubscription\/.*?\/\")/,
        replacement:  "sharedSubscriptionPath=\"$SharedSubscription/" + topicpath + "/\""
      }
    ]
    }
  }
}
  });

  grunt.loadNpmTasks('grunt-string-replace');

};
