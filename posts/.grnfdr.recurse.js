/**
 * Recursive directory data for /posts.
 */
'use strict';

const { syslog } = require("greenfedora-utils");

module.exports = function(config, data) {

    return {
        layout: "post.njk",
        type: "post",
        breadcrumb: [
            {
                loc: "home",
            },
            {
                loc: "taggrab",
            },
            {
                loc: "self"
            }
        ],
    }

}
