# rebel-icons

Include pixel perfect icons in your React projects easily with `rebel-icons`.
Use ES6 imports and include only the icons that your project is using.

![RebelIcons](/media/rebel-icons.png)

Use `React Higher Order` component to adjust your icons defaults.
Override an attribute if needed and even more... with `Rebel Icons`.

## Dependencies

This library designed to be used with `React`, you don't need any other packages to use this icons.

## Installation

We distribute this package as `npm` package. In order to use it you just need to install it as
any other project in your system.

    npm install rebel-icons --save

## Usage

You can easily add `rebel-icons` to any Component in you app, just import it, and you good to go.

```javascript
import Icon from 'rebel-icons';

class OneAwesomeComponent extends Component {
  render() {
    return <h3> Lets do some <Icon icon="RubyIcon" /></h3>
  }
}
```

## Configuration

All components use `IconBase`, so you can use `Context` to provide some defaults to your project.
Your can use one of your root component to set this configuration.

```js
export default class RootComponent extends Component {
  static childContextTypes = {
    rebelIconsBase: PropTypes.object
  };

  getChildContext() {
    return {
      rebelIconsBase: {
        color: 'grey',
        size: 64,
        style: {
          ...
        }
      }
    }
  }
  ...
}
```

If you want to reduce the size of your bundle and you are using [webpack](https://webpack.github.io/)
you can use [ContextReplacementPlugin](https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin)
to specify the list of Rebel Icons that you want to use.

```js
// Webpack_config.js
 
const Icons = ['rebel', 'js', 'ruby', ...];
const regExp = new RegExp(`(?:${Icons.join('|')})Icon`, 'i');

plugins: [
  ...
  new webpack.ContextReplacementPlugin(/rebel-icons[\/\\]rebel-lib$/, regExp)
]
```

# ![rebel](media/rebel.png)

## Getting help

If you have questions, concerns, bug reports, etc, please file an issue in this repository's
Issue Tracker. We appreciate all feedback and will be glad to help if we can.

## Getting involved

- [ ] Fork it!
- [ ] Create your feature branch: git checkout -b my-new-feature
- [ ] Commit your changes: git commit -am 'Add some feature'
- [ ] Push to the branch: git push origin my-new-feature
- [ ] Submit a pull request :D

General instructions on _how_ to contribute can be found here [CONTRIBUTING](CONTRIBUTING.md).

## Contributors

| <a href="https://www.linkedin.com/in/alla-odeyanenko-3171762a" target="_blank">**Alla Odeyanenko**</a> | <a href="https://github.com/shemerey" target="_blank">**Anton Shemerey**</a> | <a href="https://github.com/AleksandrZhukov" target="_blank">**Aleksandr Zhukov**</a> |
| :---: |:---:| :---:|
| [<img src="https://cloud.githubusercontent.com/assets/31591/19243437/5f73b314-8f20-11e6-953e-c64ee0583ea8.jpg" width="200" height="200">](https://www.linkedin.com/in/alla-odeyanenko-3171762a) | [![Anton Shemerey](https://avatars3.githubusercontent.com/u/31591?v=3&s=200)](https://github.com/shemerey) | [![Aleksandr Zhukov](https://avatars1.githubusercontent.com/u/8876116?v=3&s=200)](https://github.com/AleksandrZhukov)
| <a href="https://www.linkedin.com/in/alla-odeyanenko-3171762a" target="_blank">`https://www.linkedin.com/in/alla-odeyanenko`</a> | <a href="https://github.com/shemerey" target="_blank">`https://github.com/shemerey`</a> | <a href="https://github.com/AleksandrZhukov" target="_blank">`https://github.com/AleksandrZhukov`</a>

----

## LICENSE

This project released under MIT [LICENSE](LICENSE.md)

----

## Credits and references

1. [react-icons](https://github.com/gorangajic/react-icons)
2. [Devicon](http://devicon.fr)

### FAQ.

* Where is the font? `Rebel Icons` doesn’t come as a font we are target `React` only.
* Is `Rebel Icons` free even for commercial use? Yes, absolutely.
