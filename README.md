# My Personal Website
Hosted on github pages at [willrossen.com](https://willrossen.com)

## Built With
- JavaScript
- React
- Tailwind

## Steps for Updating and Deploying
- The main React project is located on branch `main`
- The deployed static build files are located on branch `gh-pages`
- To deploy updates:
  - Confirm `package.json` has been updated with:
    - `"homepage": "https://www.willrossen.com/" ,` at the top level
    - in existing `scripts` add:
      ```
      "scripts": {
        //...
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
        }
      ```
  - run `npm run deploy`
    - creates new build
    - pushes build to `gh-pages` branch
  - Update `Pages` settings for the repo
    - navigate to `Settings`
    - navigate to `Pages`
    - set and save `Custom Domain` to `willrossen.com` 
      - every time you deploy, github resets the domain to `https://wor101.github.io/personal-site/`
      - For now, the only solution is to manually reset the `Custom Domain` each time
  - remember to add, commit, and push any changes to branch `main`