import * as m from "mithril";
import Page from "./components/Page";
import A from "./components/Animation";

interface IPage {
    title: string;
    sub: string;
    class: string;
    content: any;
}

const pages: IPage[] = [{
    title: "Workshop",
    sub: "Modern Front-end Webdevelopment", class: "main",
    content:
        <div>
            <A class="list">
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
    sub: "State of the art JavaScript", class: "typescript",
    content:
        <div>
            <ul>
                <A class="list">
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

            <A class="list">
                <div style={{ textAlign: "center" }}>
                    <div style={{ position: "relative", width: "50%", display: "inline-block" }}>
                        <span style={{ position: "absolute", bottom: "-30px"}}>TypeScript</span>
                        <img src="/assets/ts.png" />
                    </div>
                    <div style={{ position: "relative", width: "50%", display: "inline-block" }}>
                        <span style={{ position: "absolute", bottom: "-30px" }}>JavaScript</span>
                        <img src="/assets/js.png" />
                    </div>
                </div>
            </A>
        </div>
}, {
    title: "Yarn",
    sub: "Dependency Manager voor npm", class: "yarn",
    content:
        <div>
            <ul>
                <A class="list">
                    <li>Parallel downloaden</li>
                    <li>Locale caching</li>
                    <li>Betrouwbaar</li>
                </A>
            </ul>

            <A class="list">
                <h4>Commands</h4>
                <pre>yarn install</pre>
                <pre>yarn upgrade</pre>
                <pre>yarn add mithril</pre>
                <pre>yarn add @types/mithril -D</pre>
            </A>
        </div>
}, {
    title: "WebPack",
    sub: "Code bundler & task-runner", class: "webpack",
    content:
        <ul>
            <A class="list">
                <li>Één JavaScript bestand</li>
                <li>Module system</li>
                <li>Loaders en Plugins</li>
                <li>Dev server</li>
            </A>
        </ul>
}, {
    title: "Sass",
    sub: "Syntactically Awesome Style Sheets", class: "sass",
    content:
        <ul>
            <A class="list">
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
    sub: "Moderne Virtual DOM library", class: "mithril",
    content:
        <ul>
            <A class="list">
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
    sub: "Lifecycle methods", class: "mithril",
    content:
        <A class="list">
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
    return <A class="page" key={page}>
        <Page
            title={p.title}
            sub={p.sub}
            class={p.class}>
            {p.content}
        </Page>
    </A>;
}