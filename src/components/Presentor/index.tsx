import * as m from "mithril";
import pages, { getPage } from "../../pages";
import "./style.scss";

export default class Presentor implements m.ClassComponent<{}> {
    private page: number = 0;
    private prevKeyStamp: number;

    public view(v: m.CVnode<{}>) {
        return <div className="component-presentor">
            {getPage(this.page)}
            <div className="navigation">
                <div className="prev" onclick={() => this.prev()}>{"◀"}</div>

                <div className="current">
                    {this.page} / {pages.length - 1}
                </div>

                <div className="next" onclick={() => this.next()}>{"▶"}</div>
            </div>
        </div>
    }

    public oncreate(v: m.CVnodeDOM<{}>) {
        window.addEventListener("keyup", (event) => {
            const key: string = event.key.toLowerCase();
            console.log(key)
            if (key.indexOf("right") !== -1) this.next();
            else if (key.indexOf("left") !== -1) this.prev();
        });

        // setInterval(() => {
        //     this.next();
        // }, 3000);
    }

    private next() {
        if (this.throttleKeyPress() === false) return;
        this.page++;
        if (this.page > pages.length - 1) this.page = 0;
        m.redraw();
    }

    private prev() {
        if (this.throttleKeyPress() === false) return;
        this.page--;
        if (this.page < 0) this.page = pages.length - 1;
        m.redraw();
    }

    private throttleKeyPress() {
        const keyStamp: number = Date.now();
        if (this.prevKeyStamp + 1000 > keyStamp) return false;
        this.prevKeyStamp = keyStamp;
        return true;
    }
}
