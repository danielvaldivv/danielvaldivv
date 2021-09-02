import React from 'react'
import html from '../assets/icons/skills/html.png'
import css from '../assets/icons/skills/css.png'
import js from '../assets/icons/skills/javascript.png'
import react from '../assets/icons/skills/react.png'
import node from '../assets/icons/skills/node.png'
import webpack from '../assets/icons/skills/webpack.png'
import eslint from '../assets/icons/skills/eslint.png'
import prettier from '../assets/icons/skills/prettier.png'
import git from '../assets/icons/skills/git.png'
import github from '../assets/icons/skills/github.png'

import '../styles/Skills.css'

function Skills() {
  return (
    <section className="skills">
      <h2 className="skills__tittle">Skills Tech</h2>
      <section className="Section__grid">
        <a target="_blank" rel="noreferrer" href="/"><figure><img src={html} alt="HTML icon"/><figcaption><p>HTML5</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="/"><figure><img src={css} alt="CSS icon"/><figcaption><p>CSS3</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="/"><figure><img src={js} alt="JavaScript icon"/><figcaption><p>JavaScript</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="/"><figure><img src={react} alt="React js icon"/><figcaption><p>React.js</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="/"><figure><img src={node} alt="Node js icon"/><figcaption><p>Node.js</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="/"><figure><img src={webpack} alt="Webpack icon"/><figcaption><p>Webpack</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="/"><figure><img src={eslint} alt="Eslint icon"/><figcaption><p>Eslint</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="/"><figure><img src={prettier} alt="Prettier icon"/><figcaption><p>Prettier</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="/"><figure><img src={git} alt="Git icon"/><figcaption><p>Git</p></figcaption></figure></a>
        <a target="_blank" rel="noreferrer" href="/"><figure><img src={github} alt="GitHub icon"/><figcaption><p>GitHub</p></figcaption></figure></a>
      </section>
    </section>
  )
}

export default Skills
