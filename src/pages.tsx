import * as m from "mithril";
import Page from "./components/Page";
import {AnimationContainer as A} from "./components/Animation";
const imgTS = require("./assets/ts.png");
const imgJS = require("./assets/js.png");

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
            <A className="list">
                <h4>TypeScript</h4>
                <h4>WebPack</h4>
                <h4>Sass</h4>
                <h4>Mithril</h4>
                <h4>Store</h4>
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
                    <li>Object Oriented</li>
                    <li>Autocompletion</li>
                    <li>Errors en warnings</li>
                </A>
            </ul>

            <A className="list">
                <div style={{ textAlign: "center" }}>
                    <div style={{ position: "relative", width: "50%", display: "inline-block" }}>
                        <span style={{ position: "absolute", bottom: "-30px"}}>TypeScript</span>
                        <img src={imgTS} />
                    </div>
                    <div style={{ position: "relative", width: "50%", display: "inline-block" }}>
                        <span style={{ position: "absolute", bottom: "-30px" }}>JavaScript</span>
                        <img src={imgJS} />
                    </div>
                </div>
            </A>
        </div>
}, {
    title: "Yarn",
    sub: "Dependency Manager voor npm", className: "yarn",
    content:
        <div>
            <ul>
                <A className="list">
                    <li>Parallel downloaden</li>
                    <li>Locale caching</li>
                    <li>Betrouwbaar</li>
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
                <li>Module system</li>
                <li>Loaders en Plugins</li>
                <li>Dev server</li>
            </A>
        </ul>
}, {
    title: "Sass",
    sub: "Syntactically Awesome Style Sheets", className: "sass",
    content:
        <ul>
            <A className="list">
                <li>Nesting</li>
                <li>Imports</li>
                <li>Variabelen</li>
                <li>If - else</li>
                <li>Functies</li>
                <li>CSS3</li>
            </A>
        </ul>
}, {
    title: "Mithril",
    sub: "Moderne Virtual DOM library", className: "mithril",
    content:
        <ul>
            <A className="list">
                <li>Component based</li>
                <li>Interactive / Reactive</li>
                <li>State management</li>
                <li>Performance</li>
                <li>Flexibel</li>
                <li>JSX</li>
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
}];

export default pages;

export const getPage = (page: number) => {
    const p: IPage = pages[page];
    return <A className="page" key={page}>
        <Page
            title={p.title}
            sub={p.sub}
            className={p.className}>
            {p.content}
        </Page>
    </A>;
}