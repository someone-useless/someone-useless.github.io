import 'solid-js';
import { createSignal, For } from "solid-js";
import { search } from "./elem_detector";

function toTitleCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

export default function ElemDetector() {
    const [elems_constructed_str, set_str] = createSignal<string>("");
    const search_result = () => search(elems_constructed_str().toLowerCase());
    return (<>
        <input autocomplete="off" type="text" id="elems" onInput={(e) => set_str(e.currentTarget.value)}></input>
        <br />
        <h3 class={search_result().is_success ? "success" : "failed"}>{search_result().is_success ? "SUCCESS" : "FAILED"}</h3>
        <For each={search_result().vec}>
            {(props) => (
                <span>
                    {toTitleCase(props.element)}
                    |
                    {props.atomic_number}
                </span>
            )}
        </For>
    </>);
};