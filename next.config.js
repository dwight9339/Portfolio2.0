const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ["i.imgur.com", "cdn-images-1.medium.com"]
  }
}