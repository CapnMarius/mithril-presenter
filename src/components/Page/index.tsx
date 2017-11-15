import * as m from "mithril";
import "./style.scss";

export interface IPageAttrs {
    title: string;
    sub: string;
    className: string;
}

export default class Page implements m.ClassComponent<IPageAttrs> {    
    public view(v: m.CVnode<IPageAttrs>) {
        return <div className={`component-page ${v.attrs.className}`}>
            <div className="header">
                <h1 className="title">{v.attrs.title}</h1>
                <h3 className="sub">{v.attrs.sub}</h3>
            </div>
            <div className="content">{v.children}</div>
        </div>
    }
}
