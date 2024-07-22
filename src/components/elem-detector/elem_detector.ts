const elements = [
    "h",
    "he",
    "li",
    "be",
    "b",
    "c",
    "n",
    "o",
    "f",
    "ne",
    "na",
    "mg",
    "al",
    "si",
    "p",
    "s",
    "cl",
    "ar",
    "k",
    "ca",
    "sc",
    "ti",
    "v",
    "cr",
    "mn",
    "fe",
    "co",
    "ni",
    "cu",
    "zn",
    "ga",
    "ge",
    "as",
    "se",
    "br",
    "kr",
    "rb",
    "sr",
    "y",
    "zr",
    "nb",
    "mo",
    "tc",
    "ru",
    "rh",
    "pd",
    "ag",
    "cd",
    "in",
    "sn",
    "sb",
    "te",
    "i",
    "xe",
    "cs",
    "ba",
    "la",
    "ce",
    "pr",
    "nd",
    "pm",
    "sm",
    "eu",
    "gd",
    "tb",
    "dy",
    "ho",
    "er",
    "tm",
    "yb",
    "lu",
    "hf",
    "ta",
    "w",
    "re",
    "os",
    "ir",
    "pt",
    "au",
    "hg",
    "tl",
    "pb",
    "bi",
    "po",
    "at",
    "rn",
    "fr",
    "ra",
    "ac",
    "th",
    "pa",
    "u",
    "np",
    "pu",
    "am",
    "cm",
    "bk",
    "cf",
    "es",
    "fm",
    "md",
    "no",
    "lr",
    "rf",
    "db",
    "sg",
    "bh",
    "hs",
    "mt",
    "ds",
    "rg",
    "cn",
    "nh",
    "fl",
    "mc",
    "lv",
    "ts",
    "og",
];

interface ChemistryElement {
    element: string;
    atomic_number: number;
}

interface SearchResult {
    vec: ChemistryElement[];
    is_success: boolean;
}

function search_for_two_elements(searcher: string): SearchResult | null {
    if (searcher.length > 1) {
        const result_finding = elements.findIndex((r) => r == searcher.slice(0, 2));
        if (result_finding !== -1) {
            const { vec, is_success } = search_backtrack(searcher.slice(2));
            vec.push({
                element: searcher.slice(0, 2), atomic_number: result_finding + 1,
            });
            return { vec: vec, is_success: is_success };
        } else {
            return { vec: [], is_success: false }
        }
    }
    else {
        return null;
    }
}

function search_for_one_element(searcher: string): SearchResult {

    const result_finding = elements.findIndex((r) => r == searcher.slice(0, 1));
    if (result_finding !== -1) {
        const { vec, is_success } = search_backtrack(searcher.slice(1));
        vec.push({ element: searcher.slice(0, 1), atomic_number: result_finding + 1 });
        return { vec: vec, is_success: is_success };
    } else {
        return { vec: [], is_success: false }
    }

}

function search_backtrack(searcher: string): SearchResult {
    if (searcher === "") {
        return { vec: [], is_success: true };
    }
    const one_elem = search_for_one_element(searcher);
    const two_elem = search_for_two_elements(searcher);
    if (two_elem !== null) {
        const { vec, is_success } = one_elem;
        const { vec: vec2, is_success: is_success2 } = two_elem;
        if (is_success && is_success2) {
            return vec.length > vec2.length ? two_elem : one_elem;
        } else if (is_success) {
            return one_elem;
        } else if (is_success2) {
            return two_elem;
        } else {
            return vec.length > vec2.length ? one_elem : two_elem;
        }
    }
    return one_elem;
}

export function search(searcher: string): SearchResult {
    const { vec, is_success } = search_backtrack(searcher);
    return { vec: vec.reverse(), is_success: is_success };
}