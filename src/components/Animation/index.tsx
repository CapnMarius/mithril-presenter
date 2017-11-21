import * as m from "mithril";

let iteration: number = 0;
let lastStamp: number = 0;
function getIteratedDelay(delay: number = 0): number {
    if (delay === 0) {
        return 0;
    }

    iteration++;
    if (lastStamp + 100 < Date.now()) {
        iteration = 0;
    }
    lastStamp = Date.now();
    return iteration * delay;
}

type VChildren = Array<m.Vnode<any, any> | m.VnodeDOM<any, any>>;

export default abstract class Animation {
    private children: VChildren = [];
    private implementedView: (v: m.CVnode<any>) => any;
    protected iterateDelay: number = 100;

    constructor() {
        this.implementedView = this.view;
        this.view = this.animatedView;
    }

    public oncreate(v: m.CVnodeDOM<any>) {
        this.children.forEach((vChild: m.VnodeDOM<any, any>) => {
            const delay: number = getIteratedDelay(this.iterateDelay);
            setTimeout(() => vChild.dom.classList.remove("before"), delay || requestAnimationFrame);
        });
    }

    public onbeforeremove(v: m.CVnodeDOM<any>) {
        const promises: Array<Promise<any>> = [];
        this.children.forEach((vChild: m.VnodeDOM<any, any>) => {
            vChild.dom.classList.add("after");
            const delay: number = getIteratedDelay(this.iterateDelay) + getTransitionDuration(vChild.dom);
            promises.push(new Promise((resolve) => setTimeout(resolve, delay)));
        });
        return Promise.all(promises);
    }

    private animatedView(v: m.CVnode<any>) {
        const children: any = this.implementedView(v);
        if (Array.isArray(children)) {
            children.forEach((vChild: m.Vnode<any, any>) => this.injectClasses(vChild, v.attrs.className));
            this.children = children;
        } else {
            this.injectClasses(children, v.attrs.className);
            this.children = [children];
        }
        return children;
    }

    protected abstract view(v: m.CVnode<any>);

    private injectClasses(v: m.Vnode<any, any>, className: string = "") {
        if (typeof v.attrs !== "object") {
            v.attrs = {};
        }

        if (v.attrs.className === undefined) {
            v.attrs.className = className + " before";
        } else {
            v.attrs.className += " " + className + " before";
        }
    }
}

interface IAnimationContainerAttrs {
    className: string;
    iterateDelay?: number;
    element?: string;
}

export class AnimationContainer extends Animation implements m.ClassComponent<IAnimationContainerAttrs> {
    public oninit(v: m.CVnode<IAnimationContainerAttrs>) {
        if (v.attrs.iterateDelay !== undefined) {
            this.iterateDelay = v.attrs.iterateDelay;
        }
    }

    public view(v: m.CVnode<IAnimationContainerAttrs>) {
        if (v.attrs.element === undefined) {
            return v.children;
        }
        const Key: string = v.attrs.element;
        return <Key className={v.attrs.className}>{v.children}</Key>;
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