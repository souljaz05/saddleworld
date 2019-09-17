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
            },       {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    } 
                }]
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
