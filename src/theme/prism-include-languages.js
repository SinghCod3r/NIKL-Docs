import siteConfig from '@generated/docusaurus.config';

export default function prismIncludeLanguages(PrismObject) {
    const {
        themeConfig: { prism },
    } = siteConfig;

    const { additionalLanguages } = prism;

    const PrismBefore = globalThis.Prism;
    globalThis.Prism = PrismObject;

    // Load standard Prism components
    additionalLanguages?.forEach((lang) => {
        require(`prismjs/components/prism-${lang}`);
    });

    // Register custom NIKL language
    PrismObject.languages.nikl = {
        'comment': {
            pattern: /\/\/.*/,
            greedy: true,
            lookbehind: true,
        },
        'builtin': /\b(?:Int|Float|Bool|String|Array|HashMap|Tuple|None)\b/,
        'string': {
            pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: true
        },
        'operator': /[-+%=]=?|!=|:=|->|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
        'function': {
            pattern: /(?<=\bfn\s+)[a-zA-Z_]\w*(?=\s*\()/,
            lookbehind: true
        },
        'boolean': /\b(?:False|True)\b/,
        'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?(?!\w)/i,
        'keyword': /\b(?:if|elif|else|while|for|loop|return|fn|match|spawn|wait|pub|import|as|del|in|break|and|continue|or|not|let|const)\b/,
        'punctuation': /[{}[\];(),.:]/
    };

    delete globalThis.Prism;
    if (typeof PrismBefore !== 'undefined') {
        globalThis.Prism = PrismBefore;
    }
}
