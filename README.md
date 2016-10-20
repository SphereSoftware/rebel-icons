# rebel-icons

Include pixel perfect icons in your React projects easily with ```rebel-icons```.
Use ES6 imports and include only the icons that your project is using.

![RebelIcons](/media/rebel-icons.png)

Use `React Higher Order` component to adjust your icons defaults.
Override an attribute if needed and even more... with `Rebel Icons`.

## Dependencies

This library designed to be used with `React`, you don't need any other packages to use this
icons. Each Icon is self contained component that can be copy and paste any where in your project.

## Installation

We destribute this package as `npm` package. In order to use it you just need to install it as
any other project in your system.

    npm install rebel-icons --save

## Usage

You can easily add `rebel-icons` to any Component in you app, just import it, and you good to
go.

```javascript
import RubyIcon from 'rebel-icons/RubyIcon';

class OneAwesomeComponent extends Component {
  render() {
    return <h3> Lets do some <RubyIcon /></h3>
  }
}
```

## Configuration

All components use `IconBase`, so you can use `React Higher Order Component` pattern in
order to provide some defaults to your project.

```js
import IconConfigurator from './IconConfigurator'

class App extends Component {
 render() {
    return (
      <div className={style.app}>
        <Header/>
          <IconConfigurator>
            <Main />
          </IconConfigurator>
        <Footer/>
      </div>
    );
  }
}
```

Your configurator can be something like this

```js
import { Component, PropTypes, Children } from 'react'

export default class IconConfigurator extends Component {
  static childContextTypes = {
    reactIconBase: PropTypes.object
  };

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  getChildContext() {
    return {
      reactIconBase: {
        color: 'grey',
        size: 64,
        style: {

        }
      }
    }
  }

  render() {
    return Children.only(this.props.children)
  }
}
```

You can connect this `Component` to `redux`, and update through the application state, or
introduce your own way to communicate with it.

# ![rebel](media/rebel.png)

## Getting help

If you have questions, concerns, bug reports, etc, please file an issue in this repository's
Issue Tracker. We appreatiate all feedback and will be glad to help if we can.

## Getting involved

- [ ] Fork it!
- [ ] Create your feature branch: git checkout -b my-new-feature
- [ ] Commit your changes: git commit -am 'Add some feature'
- [ ] Push to the branch: git push origin my-new-feature
- [ ] Submit a pull request :D

General instructions on _how_ to contribute can be found here [CONTRIBUTING](CONTRIBUTING.md).

## Contributors


| <a href="https://www.linkedin.com/in/alla-odeyanenko-3171762a" target="_blank">**Alla Odeyanenko**</a> | <a href="https://github.com/shemerey" target="_blank">**Anton Shemerey**</a> |
| :---: |:---:| :---:|
| [<img src="https://cloud.githubusercontent.com/assets/31591/19243437/5f73b314-8f20-11e6-953e-c64ee0583ea8.jpg" width="200" height="200">](https://www.linkedin.com/in/alla-odeyanenko-3171762a) | [![Anton Shemerey](https://avatars3.githubusercontent.com/u/31591?v=3&s=200)](https://github.com/shemerey)  |
| <a href="https://www.linkedin.com/in/alla-odeyanenko-3171762a" target="_blank">`https://www.linkedin.com/in/alla-odeyanenko`</a> | <a href="https://github.com/shemerey" target="_blank">`https://github.com/shemerey`</a> |

----

## LICENSE

This project released under MIT [LICENSE](LICENSE.md)

----

## Credits and references

1. [react-icons](https://github.com/gorangajic/react-icons)
2. [Devicon](http://devicon.fr)
3. `React Higher Order Component` pattern

### FAQ.

* Where is the font? `Rebel Icons` doesn’t come as a font we are target `React` only.
* Is `Rebel Icons` free even for commercial use? Yes, absolutely.
