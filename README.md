# MauticFormMultilanguage
This is a javascript, that helps you to create a multi language functionality for Forms

Add the script to your landing page
Create a Form
Use tokens, like {{%email%}} as placeholders
Create a description area with field html name: "languagetranslations"
Add translation in the description area in json format:
** { "en": { "firstname": "Firstname", "lastname": "Lastname", "email": "Email", "welcome": "Welcome" }, "fr": { "firstname": "Prénom", "lastname": "Nom de famille", "email": "Courriel", "welcome": "Bienvenue" } } **

The JS will replace the translations and hide your description container.
