// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GPLv2":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "GPLv2":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    case "Apache":
      return "https://opensource.org/licenses/Apache-2.0";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let link = renderLicenseLink(license);
  let badge = renderLicenseBadge(license);
  return `${badge}   
  Licensed under the ["${license}"](${link})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const lic = renderLicenseSection(data.license);
  return `
  # ${data.title}     
         
  ## Description    
  ${data.description}    
      
  ## Installation    
  ${data.installation}    
      
  ## Usage    
  ${data.usage}   
      
  ## Credits   
  ${data.credits}    
           
  ## License    
  ${lic}
`;
}

module.exports = generateMarkdown;
