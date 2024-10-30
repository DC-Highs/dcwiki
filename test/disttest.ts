import DCWiki from "../dist/esm"

;(async () => {
    const dcwiki = await DCWiki.create({ 
        language: "br",
        api: { url: "dasdasdas" }
    })
})(); 