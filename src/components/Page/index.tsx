import * as m from "mithril";
import "./style.scss";

export interface IPageAttrs {
    title: string;
    sub: string;
    class: string;
}

export default class Page implements m.ClassComponent<IPageAttrs> {    
    public view(v: m.CVnode<IPageAttrs>) {
        return <div class={`component-page ${v.attrs.class}`}>
            <div class="header">
                <h1 class="title">{v.attrs.title}</h1>
                <h3 class="sub">{v.attrs.sub}</h3>
            </div>
            <div class="content">{v.children}</div>
        </div>
    }
}
