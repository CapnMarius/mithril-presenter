import * as m from "mithril";

let iteration: number = 0;
let lastStamp: number = 0;
function getIteratedDelay(delay: number = 0): number {
    if (delay === 0) return 0;

    iteration++;
    if (lastStamp + delay < Date.now()) iteration = 0;
    lastStamp = Date.now();
    return iteration * delay;
}

export default class Animation {
    protected iterateDelay: number = 100;
    private beforeClass: string = "before";

    public oncreate(v: m.CVnodeDOM<any>) {
        if (Array.isArray(v.children)) v.children.forEach((child: m.VnodeDOM<any, any>) => this.doBefore(child));
        else this.doBefore(v);
    }

    public onbeforeremove(v: m.CVnodeDOM<any>) {
        const promises: Promise<any>[] = [];
        if (Array.isArray(v.children)) v.children.forEach((child: m.VnodeDOM<any, any>) => promises.push(this.doAfter(child)));
        else promises.push(this.doAfter(v));
        return Promise.all(promises);
    }

    public oninit(v: m.CVnode<any>) {
        if (v.attrs.iterateDelay !== undefined) this.iterateDelay = parseInt(v.attrs.iterateDelay, 10);
        if (v.attrs.class !== undefined) this.beforeClass += " " + v.attrs.class;
        if (Array.isArray(v.children)) v.children.forEach((child: m.Vnode<any, any>) =>
            child.attrs = this.injectClasses(child.attrs));

    }

    public view(v: m.CVnode<any>) {
        if (!Array.isArray(v.children)) return <div class={this.beforeClass}>{v.children}</div>;

        return v.children;
    }

    private injectClasses(attrs: any = {}): {} {
        if (attrs.class === undefined) attrs.class = this.beforeClass;
        else attrs.class += " " + this.beforeClass;

        return attrs;
    }

    private doBefore(v: m.VnodeDOM<any, any>): void {
        if (v.dom) setTimeout(() => v.dom.classList.remove("before"), getIteratedDelay(this.iterateDelay) || 20);

    }

    private doAfter(v: m.VnodeDOM<any, any>): Promise<any> {
        if (v.dom) {
            v.dom.classList.add("after");
            const transitionDuration: number = getTransitionDuration(v.dom) + getIteratedDelay(this.iterateDelay);
            return new Promise((resolve) => setTimeout(resolve, transitionDuration));
        }
        return Promise.resolve();
    }
}

export function getComputedStyleNumber(dom: Element, property: string): number {
    const style: string | null = getComputedStyle(dom)[property];
    return style ? parseFloat(style) : 0;
}

export function getTransitionDuration(dom: Element): number {
    return (
        getComputedStyleNumber(dom, "transitionDelay") +
        getComputedStyleNumber(dom, "transitionDuration")
    ) * 1000;
}