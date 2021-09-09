import React from 'react'
import html from '../../assets/icons/skills/html.png'
import css from '../../assets/icons/skills/css.png'
import js from '../../assets/icons/skills/javascript.png'
import react from '../../assets/icons/skills/react.png'
import node from '../../assets/icons/skills/node.png'
import webpack from '../../assets/icons/skills/webpack.png'
import eslint from '../../assets/icons/skills/eslint.png'
import prettier from '../../assets/icons/skills/prettier.png'
import git from '../../assets/icons/skills/git.png'
import github from '../../assets/icons/skills/github.png'
import stylus from '../../assets/icons/skills/stylus.png'
import sass from '../../assets/icons/skills/sass.png'
import less from '../../assets/icons/skills/less.png'
import firebase from '../../assets/icons/skills/firebase.png'


import './Skills.css'

function Skills() {
  return (
    <section className="skills">
      <h2 className="skills__tittle">Tech Skills</h2>
      <section className="Section__grid">
        <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/es/docs/Web/HTML/Element/html"><figure><img src={html} alt="HTML icon"/><figcaption><p>HTML5</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/es/docs/Web/CSS"><figure><img src={css} alt="CSS icon"/><figcaption><p>CSS3</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/es/docs/Web/JavaScript"><figure><img src={js} alt="JavaScript icon"/><figcaption><p>JavaScript</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="https://reactjs.org/"><figure><img src={react} alt="React js icon"/><figcaption><p>React.js</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="https://nodejs.org/es/"><figure><img src={node} alt="Node js icon"/><figcaption><p>Node.js</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="https://stylus-lang.com/"><figure><img src={stylus} alt="Stylus icon"/><figcaption><p>Stylus</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="https://sass-lang.com/"><figure><img src={sass} alt="Sass icon"/><figcaption><p>Sass</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="https://lesscss.org/"><figure><img src={less} alt="Less icon"/><figcaption><p>Less</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="https://webpack.js.org/"><figure><img src={webpack} alt="Webpack icon"/><figcaption><p>Webpack</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="https://eslint.org/"><figure><img src={eslint} alt="Eslint icon"/><figcaption><p>Eslint</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="https://prettier.io/"><figure><img src={prettier} alt="Prettier icon"/><figcaption><p>Prettier</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="https://firebase.google.com/"><figure><img src={firebase} alt="Firebase icon"/><figcaption><p>Firebase</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="https://git-scm.com/"><figure><img src={git} alt="Git icon"/><figcaption><p>Git</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="https://github.com/"><figure><img src={github} alt="GitHub icon"/><figcaption><p>GitHub</p></figcaption></figure></a>
      </section>
    </section>
  )
}

export default Skills
