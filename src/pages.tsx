import * as m from "mithril";
import Page from "./components/Page";
import { AnimationContainer as A } from "./components/Animation";
const imgTS = require("./assets/ts.png");
const imgJS = require("./assets/js.png");
const demoGif = require("./assets/demo.gif");

interface IPage {
  title: string;
  sub: string;
  className: string;
  content: any;
}

const pages: IPage[] = [{
  title: "Workshop",
  sub: "Modern Front-end Webdevelopment", className: "main",
  content:
    <div>
      <ul >
        <A className="list">
          <li>TypeScript</li>
          <li>TSLint</li>
          <li>Yarn</li>
          <li>WebPack</li>
          <li>Sass</li>
          <li>Mithril</li>
          <li>OSpec</li>
          <li>Store</li>
        </A>
      </ul>
      <A className="list">
        <img style={{
          width: "auto",
          maxWidth: "50%",
          display: "inline-block",
          right: "10%",
          top: 0,
          position: "absolute"
        }} src={demoGif} />
      </A>
    </div>
},
{
  title: "TypeScript",
  sub: "State of the art JavaScript", className: "typescript",
  content:
    <div>
      <ul>
        <A className="list">
          <li>Stricte superset van JavaScript</li>
          <li>Open Source</li>
          <li>Ontwikkeld door Microsoft</li>
          <li>ESNext naar ES5</li>
          <li>Interfaces en types</li>
          <li>Object georiënteerd</li>
          <li>Autocompletion</li>
          <li>Compile-time errors</li>
        </A>
      </ul>

      <A className="list">
        <div style={{ textAlign: "center" }}>
          <div style={{ position: "relative", width: "50%", display: "inline-block" }}>
            <span style={{ position: "absolute", bottom: "-30px" }}>TypeScript</span>
            <img src={imgTS} />
          </div>
          <div style={{ position: "relative", width: "50%", display: "inline-block" }}>
            <span style={{ position: "absolute", bottom: "-30px" }}>JavaScript</span>
            <img src={imgJS} />
          </div>
        </div>
      </A>
    </div>
},
{
  title: "TSLint",
  sub: "Static Analysis for TypeScript", className: "tslint",
  content:
    <div>
      <ul>
        <A className="list">
          <li>Leesbaarheid</li>
          <li>Onderhoudbaarheid</li>
          <li>Syntactische correctheid</li>
          <li>Bad practice waarschuwingen</li>
          <li>Minder merge-conflicts</li>
          <li>IDE integratie</li>
          <li>Autocorrect</li>
        </A>
      </ul>
    </div>
}, {
  title: "Yarn",
  sub: "Dependency Manager", className: "yarn",
  content:
    <div>
      <ul>
        <A className="list">
          <li>Parallel downloaden</li>
          <li>Locale caching</li>
          <li>Geavanceerde dependency tree</li>
          <li>Upgrade met versie-controle</li>
        </A>
      </ul>

      <A className="list">
        <h4>Commands</h4>
        <pre>yarn install</pre>
        <pre>yarn upgrade</pre>
        <pre>yarn add mithril</pre>
        <pre>yarn add @types/mithril -D</pre>
      </A>
    </div>
}, {
  title: "WebPack",
  sub: "Code bundler & task-runner", className: "webpack",
  content:
    <ul>
      <A className="list">
        <li>Één JavaScript bestand</li>
        <li>Inline assets</li>
        <li>Minder HTTP requests</li>
        <li>Modulair systeem</li>
        <li>Loaders en Plugins</li>
        <li>Development server</li>
      </A>
    </ul>
}, {
  title: "Sass",
  sub: "Syntactically Awesome Style Sheets", className: "sass",
  content:
    <ul>
      <A className="list">
        <li>Geneste styles</li>
        <li>Modulair systeem</li>
        <li>Variabelen</li>
        <li>If - else statements</li>
        <li>Functies (Mixins)</li>
      </A>
    </ul>
}, {
  title: "Mithril",
  sub: "Modern Virtual DOM library", className: "mithril",
  content:
    <ul>
      <A className="list">
        <li>Component gebaseerd</li>
        <li>Interactief / Reactief</li>
        <li>State management</li>
        <li>Hoge performance</li>
        <li>Flexibel</li>
        <li>JSX syntax</li>
      </A>
    </ul>
}, {
  title: "Mithril",
  sub: "Lifecycle methods", className: "mithril",
  content:
    <A className="list">
      <h4>1. oninit(VNode)</h4>
      <h4>2. view(VNode)</h4>
      <h4>3. oncreate(VNodeDOM)</h4>
      <h4>4. onbeforeupdate(VNode, VNodeDOM)</h4>
      <h4>5. onupdate(VNodeDOM)</h4>
      <h4>6. onbeforeremove(VNodeDOM)</h4>
      <h4>7. onremove(VNode)</h4>
      <br />
      <h4>Mithril.render()</h4>
    </A>
}, {
  title: "OSpec",
  sub: "Noiseless Testing Framework", className: "ospec",
  content:
    <ul>
      <A className="list">
        <li>Geen configuratie</li>
        <li>Assertion library</li>
        <li>Asynchrone tests</li>
        <li>Geen dependencies</li>
        <li>Snel</li>
      </A>
    </ul>
}, {
  title: "Store",
  sub: "Cross-browser storage for all", className: "store",
  content:
    <ul>
      <A className="list">
        <li>Geen configuratie</li>
        <li>Bestaat sinds 2010</li>
        <li>Ondersteuning voor (bijna) alle browsers</li>
        <li>Eenvoudig in gebruik</li>
        <li>Plugins</li>
      </A>
    </ul>
}];

export default pages;

export const getPage = (page: number) => {
  const p: IPage = pages[page];
  return <A className="page" key={page}>
    <Page title={p.title} sub={p.sub} className={p.className}>
      {p.content}
    </Page>
  </A>;
}