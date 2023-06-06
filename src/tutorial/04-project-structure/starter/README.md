In this section, we will create all files and folders from scratch.

Project Structure - Default Export
/tutorial/04-project-structure/starter

There are more options

Normally somewhere in the src

/components/componentName.jsx /screens/componentName.jsx

* create navbar folder

    -setup Navbar.jsx (component)
    -Navbar.css (styles)
* import in App.jsx

import Final from 'pathToFolder/Navbar/Navbar'

* first solution rename to index.jsx(entry point)
Works but eventually too many index tabs 

* rename back to Navbar.jsx
* create index.jsx


Project Structure - Named Exports
/tutorial/04-project-structure/starter

only makes sense if you have quite a few files

create Pages directory

setup two components Home.jsx and About.jsx

import both in the App.jxs

import Home from 'pathToFolder/Pages/Home'; import About from 'pathToFolder/Pages/About';

A lot of work/lines of code

create index.jsx