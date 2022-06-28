const { syslog } = require("../../js/greenfedora-utils")

module.exports = function(config) {

    return {
        schema: {
            website: {
                "@type": "WebSite",
                "@id": "/#website",
                name: "{{site.title}}",
                description: "{{site.description}}",
                url: "{{hostname}}",
                publisher: {
                    "@id": "/#publisher"
                },
                image: "{{site.defaultArticleImage}}"
            },
            publisher: {
                "@type": "Organization",
                "@id": "/#publisher",
                name: "{{site.publisher.name}}",
                description: "{{site.publisher.description}}",
                logo: "{{site.publisher.logo}}"
            },
            author: {
                "@type": "Person",
                "@id": "/#author",
                name: "{{site.authors.gordonansell.name}}",
                image: "{{site.authors.gordonansell.image}}",
                url: "{{site.authors.gordonansell.url}}",
            }
        }
    }
}