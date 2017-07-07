const components = require('./components');
const hypernova = require('hypernova/server');
const renderReact = require('hypernova-react').renderReact;

hypernova({
    getComponent(name) {
        console.log("3) Got request for getComponent with name = ", name);
        for (let componentName in components) {
            if (name === componentName) {
              console.log("4) Returning a promise which will resolve with the renderedComponent");
              return renderReact(componentName, components[componentName]);
            }
        }

        return null;
    }
});
