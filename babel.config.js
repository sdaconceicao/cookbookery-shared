module.exports = api => {
    api.cache(false);
    return {
        presets: [
            ["@babel/preset-env", {
                "useBuiltIns": "entry",
                "loose": true
            }],
            "@babel/preset-react"
        ],
        plugins: [
            [ "@babel/plugin-proposal-class-properties", { "loose" : true }],
            "@babel/plugin-proposal-export-default-from",
            "@babel/plugin-proposal-export-namespace-from"
        ]
    }
}