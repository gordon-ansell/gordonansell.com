/**
 * Entry point for GreenFedora.
 */
'use strict';

module.exports = function(config) {

    config.addBuiltInPlugin('scss');
    config.addBuiltInPlugin('image');
    config.addBuiltInPlugin('navigation');
    config.addBuiltInPlugin('socialshares');
    config.addBuiltInPlugin('ratingstars');
    config.addBuiltInPlugin('webmentions');

    config.addJustCopy('assets/style/fonts/');
    config.addJustCopy('assets/style/images/');
    config.addJustCopy('assets/js/');
    config.addJustCopy('assets/fav/');
    config.addJustCopy('assets/images/socialshares/');
    config.addJustCopy('assets/images/webmention/');

    return {
        level: 'log',
        modehost: {
            dev: {
                host: 'localhost',
                port: 8081,
                ssl: false
            },
            staging: {
                host: "gordy.me.uk",
                port: 8081,
                ssl: false
            },
            prod: {
                host: "gordonansell.com",
                ssl: true
            }
        },
        allowInlinePosts: false,
        socialShares: {
            items: [
                {name: "Facebook", link: "https://www.facebook.com/sharer/sharer.php?u=(((url)))&t=(((title)))",
                    icon: "/assets/images/socialshares/facebook.png"},
                {name: "Twitter", link: "https://twitter.com/intent/tweet?url=(((url)))&text=(((title)))",
                    icon: "/assets/images/socialshares/twitter.png"},
                {name: "Reddit", link: "https://www.reddit.com/submit?url=(((url)))&title=(((title)))",
                    icon: "/assets/images/socialshares/reddit.png"},
                {name: "LinkedIn", link: "https://www.linkedin.com/shareArticle?mini=true&url=(((url)))&title=(((title)))&source=(((wstitle)))&summary=(((wsurl)))",
                    icon: "/assets/images/socialshares/linkedin.png"},
                {name: "Email", link: "&#109;ailto&#58;con&#37;&#55;4act&#64;gor&#37;64%6&#70;na%6&#69;sell&#46;%&#54;3om?subject=Contact: (((title)))",
                    icon: "/assets/images/socialshares/email.png"}
            ]
        },
        indieAuth: "https://github.com/gordon-ansell",
        twitterid: "gordon_ansell",
        microblogid: "gordonansell",
        hcard: {
            name: {
                title: "Mr",
                first: "Gordon",
                last: "Ansell"
            },
            sex: "M",
            url: "https://gordonansell.com",
            photo: "/assets/images/logos/hat-768x768.png",
            note: "Former software engineer and project manager. Blogger."
        },
        webmentions: {
            apiKey: "SSsAfFXL5bERavzsz21WDA",
            id: "gordonansell.com"
        },
    }

}

