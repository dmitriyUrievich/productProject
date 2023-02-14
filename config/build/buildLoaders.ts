import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}:BuildOptions): webpack.RuleSetRule[] {

    const babelLoader = {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                "plugins":[
                    [
                        "i18next-extract",
                        {
                            locales:['ru','en'],
                            keyAsDefaultValue:true
                        }
                    ],
                ]
            }
        }
    }
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from js strings
            isDev? 'style-loader': MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options:{
                    modules:{
                        auto:(resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ?'[path][name]__[local]--[hash:base64:7]'
                            :'[hash:base64:7]'
                    },

                }
            },
            // Compiles Sass to CSS
            'sass-loader',
        ]
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return [
        babelLoader,
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader
    ]
}