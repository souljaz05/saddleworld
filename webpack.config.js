const HtmlWebPackPlugin  = require("html-webpack-plugin");

module.exports = {
    module:{
        rules:[
            {
                test: /\.html$/,
                use:[{
                    loader:"html-loader",
                    options:{minimise:true}
                }]
            },
            {
                test: [/.css$|.scss$/],                
                use:[                    
                    'style-loader',                  
                    'css-loader',
                    'sass-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
        }),
        
    ]
}
