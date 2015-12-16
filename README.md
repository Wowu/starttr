# Starttr
Simple blog starter theme for Drupal 8

## About
Starttr is simple blog starter theme, what means, that you can completely modify
it. Comparing to other starter themes, starttr is just a couple of files like
normalize.css, basic styling, simple grid and responsive menu, so it is not necessary to use
this theme for a sub-theme.

## Installation
Starttr is created to be used as a base theme, so you should create a sub-theme.

1. Install base theme
  - unpack zip file or clone repo to your themes directory, usually
    `PATH_TO_DRUPAL/sites/all/themes/`
  - go to administrator page on your Drupal site and go to Appearance. Now
    install the theme (for more information visit
    https://drupal.org/getting-started/install-contrib/themes)
2. Create sub-theme
  - create a directory named as you want to, ex. `mytheme`
  - create `mytheme.info.yml` file cointaining basic theme settings, and `base theme: starttr` key. Your sub-theme will inherit all styles and scripts from Starttr. Note: name of the `.info.yml` file must be the same as directory name.
    
    Example `mytheme.info.yml` file:
    ```
    name: My Theme
    type: theme
    description: This is a my sub-theme of starttr
    core: 8.x
  
    # Defines the base theme
    base theme: starttr
    
    # Defines libraries group in which we can add css/js.
    libraries:
      - mytheme/global-styling
      
    # Regions
    regions:
      header: Header
      content: Content
      primary_menu: Primary menu
      footer: Footer
  ```
  
  More info about sub-themes: https://www.drupal.org/node/2165673
  
  More info about theming Drupal 8: https://www.drupal.org/theme-guide/8

## Licenses
  - normalize.css - [github.com/necolas/normalize.css/](https://github.com/necolas/normalize.css/)
  - simplegrid.css - [github.com/ThisIsDallas/Simple-Grid](https://github.com/ThisIsDallas/Simple-Grid), under the MIT license.
  

  
