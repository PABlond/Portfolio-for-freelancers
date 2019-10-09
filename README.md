[![Netlify Status](https://api.netlify.com/api/v1/badges/bfd3cbfa-5471-4593-841b-fd3674546cc7/deploy-status)](https://app.netlify.com/sites/pedantic-hoover-d62fa7/deploys)

This repository is a complete one page portfolio with a feature which generates a beautiful (pdf) resume.

## Installation

### Requirements

You will need to install the Gatsby CLI.

```bash
npm install -g gatsby-cli
```

Use the package manager [yarn](https://yarnpkg.com/lang/en/) to install needed librairies.

```bash
yarn
```

### Configuration

For every section you will find a markdown file to custom as you wish. Be careful with the file structure.
For example for the "About" section :

```
---
title: "about"
date: "2019-09-18T23:19:51.246Z"
---

<div class="row">

<span class="col-md-4">

![pierre-alexis blond](imgs/data/pablond.jpg) # Don't forget to add a picture of yourself in this specific path

</span>

<div class="text-center col-md-8">

Hi,

I am a full stack developer with **deep knowledge** of web app development, I've got experience in developing a great number of web apps grown **from simple idea to deployment and beyond**.

Flexible and adaptive, I've got **big expertise** in Web and Mobile architectures, libraries, and frameworks.

Feel free to contact me for any purpose !

</div>
</div>
```

## Usage

Start development server.

```bash
gatsby develop
```

You can now visit http://localhost:8000

> Create a production build.

```bash
gatsby build
```

> Gatsby will perform an optimized production build for your site, generating static HTML and per-route JavaScript code bundles.

> Serve the production build locally.

```bash
gatsby serve
```

> Gatsby starts a local HTML server for testing your built site. Remember to build your site using gatsby build before using this command.

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
```
