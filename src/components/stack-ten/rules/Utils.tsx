import { children, Index, Match, Switch, type JSX } from "solid-js";

export function Stack(props: { stack: Array<number | null>, desc?: string }) {
    let top_index = props.stack.findIndex((value) => value === null) - 1;
    if (top_index === -2) {
        top_index = props.stack.length - 1;
    }
    const stack_class = top_index === -1 ? "stack empty" : "stack";
    return (<>
        <div class={stack_class}>
            <Index each={props.stack}>
                {(num, index) =>
                    <Switch>
                        <Match when={index === top_index}>
                            <div class="stack-top">
                                <span class="stack-item">
                                    {num() ?? <>&nbsp;</>}
                                </span>
                                <strong>TOP</strong>
                            </div>
                        </Match>
                        <Match when={index !== top_index}>
                            <span class="stack-item">
                                {num() ?? <>&nbsp;</>}
                            </span>
                        </Match>
                    </Switch>
                }
            </Index>
        </div>
        <span class="stack-desc">{props.desc}</span>
    </>);
};

export function RulePage(props: { title: string, children?: JSX.Element }) {
    const child = children(() => props.children);
    return (<>
        <h1>{props.title}</h1>
        <br />
        {child()}
    </>);
}

export function Card(props: { opers: string[] }) {
    return (<div class="card">
        <Index each={props.opers}>
            {(oper) => <span class="operation">{oper()}</span>} 
        </Index>
    </div>)
}