import { createMemo, createSignal, Match, Show, Switch } from "solid-js";
import { RulePage1, RulePage2, RulePage3, RulePage4, RulePage5 } from "./RulePages";

export default function Rules() {
    const [page_index, set_page_index] = createSignal(0);
    const pages = [RulePage1, RulePage2, RulePage3, RulePage4, RulePage5];
    const page = createMemo(() => pages[page_index()]);
    return <>
        {page()}
        <div id="page-column">
            <Show when={page_index() !== 0}>
                <button id="page-button" onClick={() => {
                    set_page_index((index) => index - 1);
                    document.body.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}>Previous page</button>
            </Show>
            <Switch>
                <Match when={page_index() === pages.length - 1}>
                    <a id="page-button" href="..">Back to lobby</a>
                </Match>
                <Match when={page_index() !== pages.length - 1}>
                    <button id="page-button" onClick={() => {
                        set_page_index((index) => index + 1);
                        document.body.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}>Next page</button>
                </Match>
            </Switch>
        </div>
    </>;
};